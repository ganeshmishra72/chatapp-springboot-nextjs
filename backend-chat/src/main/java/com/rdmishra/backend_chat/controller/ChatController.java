package com.rdmishra.backend_chat.controller;

import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

import org.springframework.web.bind.annotation.RequestBody;

import com.rdmishra.backend_chat.dto.request.MessageRequest;
import com.rdmishra.backend_chat.entity.Message;
import com.rdmishra.backend_chat.services.ChatServices;

import lombok.AllArgsConstructor;

@Controller
@AllArgsConstructor

public class ChatController {

    private ChatServices chatServices;

    @MessageMapping("/sendMessage/{roomId}") // /app/sendMessage/roomId
    @SendTo("/topic/room/{roomId}") // subscribe
    public Message sendMessage(
            @RequestBody MessageRequest request,
            @DestinationVariable String roomId) {

        return chatServices.sendMessage(request, roomId);
    }

}

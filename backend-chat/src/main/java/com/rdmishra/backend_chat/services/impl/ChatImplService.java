package com.rdmishra.backend_chat.services.impl;

import java.time.LocalDateTime;

import org.springframework.stereotype.Service;

import com.rdmishra.backend_chat.dto.request.MessageRequest;
import com.rdmishra.backend_chat.entity.Message;
import com.rdmishra.backend_chat.entity.Room;
import com.rdmishra.backend_chat.repo.RoomRepo;
import com.rdmishra.backend_chat.services.ChatServices;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ChatImplService implements ChatServices {

    private final RoomRepo repo;

    @Override
    public Message sendMessage(MessageRequest request, String roomId) {
        Room room = repo.findByRoomId(request.getRoomId());
        Message message = new Message();
        message.setContent(request.getContent());
        message.setSender(request.getSender());
        message.setTimeStamp(LocalDateTime.now());

        if (room == null) {
            throw new RuntimeException("Room Not Found");
        }
        room.getMessages().add(message);
        repo.save(room);

        return message;
    }

}

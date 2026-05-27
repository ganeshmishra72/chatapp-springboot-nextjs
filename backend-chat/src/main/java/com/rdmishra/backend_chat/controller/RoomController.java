package com.rdmishra.backend_chat.controller;

import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rdmishra.backend_chat.dto.request.RoomRequest;
import com.rdmishra.backend_chat.services.RoomServices;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/v1/rooms")
@AllArgsConstructor

public class RoomController {

    private RoomServices roomServices;

    @PostMapping
    public ResponseEntity<?> createRoom(@RequestBody RoomRequest request) {

        return ResponseEntity.ok(roomServices.createRoom(request.getRoomId()));
    }

    @GetMapping("/{roomId}")
    public ResponseEntity<?> joinRoom(@PathVariable String roomId) {

        return ResponseEntity.ok(roomServices.joinRoom(roomId));
    }

    @GetMapping("/{roomId}/messages")
    public ResponseEntity<?> getMessages(@PathVariable String roomId) {
        return ResponseEntity.ok(roomServices.getMessages(roomId));

    }
}

package com.rdmishra.backend_chat.services.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.rdmishra.backend_chat.entity.Message;
import com.rdmishra.backend_chat.entity.Room;
import com.rdmishra.backend_chat.repo.RoomRepo;
import com.rdmishra.backend_chat.services.RoomServices;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class RoomImplService implements RoomServices {

    private final RoomRepo repo;

    @Override
    public Room createRoom(String roomId) {

        if (repo.findByRoomId(roomId) != null) {
            throw new RuntimeException("Room Already Exist!");
        }

        Room room = new Room();
        room.setRoomId(roomId);
        return repo.save(room);
    }

    @Override
    public Room joinRoom(String roomId) {

        Room room = repo.findByRoomId(roomId);
        if (room == null) {
            throw new RuntimeException("Room Not Found");
        }

        return room;
    }

    @Override
    public List<Message> getMessages(String roomId) {

        Room room = repo.findByRoomId(roomId);
        if (room == null) {
            throw new RuntimeException("Room Not Found");
        }
        // get messages
        // paginations
        List<Message> messages = room.getMessages();
        return messages;
    }

}

package com.rdmishra.backend_chat.repo;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.rdmishra.backend_chat.entity.Room;

public interface RoomRepo extends MongoRepository<Room, String> {

    // get room using roomid
    Room findByRoomId(String roomid);
}

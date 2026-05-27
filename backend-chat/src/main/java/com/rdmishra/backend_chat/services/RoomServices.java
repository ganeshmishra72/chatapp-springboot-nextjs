package com.rdmishra.backend_chat.services;

import java.util.List;

import com.rdmishra.backend_chat.entity.Message;
import com.rdmishra.backend_chat.entity.Room;

public interface RoomServices {

    Room createRoom(String roomId);

    Room joinRoom(String roomId);

    List<Message> getMessages(String roomId);
}

package com.rdmishra.backend_chat.dto.request;

import lombok.Data;

@Data
public class RoomRequest {

    private String roomId;
    private String name;
}
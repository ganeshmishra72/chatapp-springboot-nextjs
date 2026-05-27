package com.rdmishra.backend_chat.services;

import com.rdmishra.backend_chat.dto.request.MessageRequest;
import com.rdmishra.backend_chat.entity.Message;

public interface ChatServices {

    Message sendMessage(MessageRequest request, String roomId);
}

package com.rdmishra.backend_chat.exception;

import java.time.LocalDateTime;

import org.springframework.http.HttpStatusCode;

public record ApiResponse(
        String message,
        HttpStatusCode code,
        String path,
        LocalDateTime time) {

}

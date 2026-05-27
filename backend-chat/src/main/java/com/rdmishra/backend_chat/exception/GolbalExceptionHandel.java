package com.rdmishra.backend_chat.exception;

import java.time.LocalDateTime;

import org.springframework.http.HttpStatus;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import jakarta.servlet.http.HttpServletRequest;

@RestControllerAdvice
public class GolbalExceptionHandel {

    @ExceptionHandler({ RuntimeException.class })
    public ResponseEntity<ApiResponse> RuntimeException(RuntimeException exception, HttpServletRequest request) {
        ApiResponse apiResponse = new ApiResponse(exception.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR,
                request.getRequestURI(), LocalDateTime.now());
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(apiResponse);
    }
}

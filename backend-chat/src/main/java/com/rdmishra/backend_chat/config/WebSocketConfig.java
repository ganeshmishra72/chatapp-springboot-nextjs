package com.rdmishra.backend_chat.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;

@Configuration
@EnableWebSocketMessageBroker
public class WebSocketConfig implements WebSocketMessageBrokerConfigurer {

    @Value("${fronten.url}")
    private String frontendURL;

    // Broker ko configue karne ke liye
    @Override
    public void configureMessageBroker(MessageBrokerRegistry config) {

        config.enableSimpleBroker("/topic"); // in memory message borker ko enable kar diye
        // /topic/messages -> es route pe message bhje skt h
        // /test/message -> server yaha mhi bhej payega
        config.setApplicationDestinationPrefixes("/app");
        // it is use to server side controller handel

    }

    @Override
    public void registerStompEndpoints(StompEndpointRegistry registry) {
        registry.addEndpoint("/chat") // connection establisment
                .setAllowedOrigins(frontendURL)

                .withSockJS();
    }

    // /caht enpoint pr connection establish hoga

}

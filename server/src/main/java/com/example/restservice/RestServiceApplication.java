package com.example.restservice;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.jdbc.core.JdbcTemplate;

@SpringBootApplication
public class RestServiceApplication {



    @Autowired
    private static JdbcTemplate jdbcTemplate;

    public static void main(String[] args)
    {
        SpringApplication.run(RestServiceApplication.class, args);

    }

}

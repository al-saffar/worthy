package com.example.restservice;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.concurrent.atomic.AtomicLong;

@RestController
public class UserController {


	@GetMapping("/user")
	@CrossOrigin(origins = "http://localhost:19006/")
	public User greeting(@RequestParam(value = "name", defaultValue = "World") String name) {
		return new User("abc@gmail.com", "Anders", "And");
	}
}

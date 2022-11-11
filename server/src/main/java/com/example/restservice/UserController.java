package com.example.restservice;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.crypto.SecretKeyFactory;
import javax.crypto.spec.PBEKeySpec;
import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;
import java.security.spec.InvalidKeySpecException;
import java.security.spec.KeySpec;
import java.util.List;


@Controller
@RequestMapping(path = "/user")
public class UserController {

	@Autowired
	private UserRepository userRepository;

	@PostMapping(path = "/add")
	public @ResponseBody String addNewUser(@RequestBody User user) throws InvalidKeySpecException, NoSuchAlgorithmException {

		User newUser = new User();
		newUser.setFirstName(user.getFirstName());
		newUser.setLastName(user.getLastName());
		newUser.setEmail(user.getEmail());
		newUser.setPassword(hashPassword(user.getPassword()));

		userRepository.save(newUser);
		return "User Created";
	}

	@GetMapping(path = "/all")
	@CrossOrigin(origins = "http://localhost:19006/")
	public @ResponseBody List<User> getAllUsers() {
		return userRepository.findAll();
	}

	@GetMapping(path = "/me")
	@CrossOrigin(origins = "http://localhost:19006/")
	public @ResponseBody User getMe() {
		return userRepository.findByEmail("anitamalina@tranberg.com");
	}

	@GetMapping(path = "/login")
	@CrossOrigin(origins = "http://localhost:19006/")
	public @ResponseBody boolean checkLogin(@RequestBody User user) throws InvalidKeySpecException, NoSuchAlgorithmException {
		String pw = user.getPassword();
		String email = user.getEmail();
		User loginUser = userRepository.findByEmail(email);
		boolean isAuthenticated = BCrypt.checkpw(pw, loginUser.getPassword());
		return isAuthenticated;
		//return userRepository.loginSuccess("anitamalina@tranberg.com", "$2a$10$x3ApcDNiymjC22JxxSZSQejHGU0YRb0If3PhswWQmLX9cvY1FvgCi");
	}

	private String hashPassword(String pw) throws InvalidKeySpecException, NoSuchAlgorithmException {
		int strength = 10; // work factor of bcrypt
		BCryptPasswordEncoder bCryptPasswordEncoder =
				new BCryptPasswordEncoder(strength, new SecureRandom());
		String encodedPassword = bCryptPasswordEncoder.encode(pw);
		return encodedPassword;
	}


}
package com.example.myapp.services;

import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.*;
import com.example.myapp.models.User;
import com.example.myapp.repositories.*;

@RestController
public class UserService {
	
	@Autowired
	UserRepository userRepository;
	
	@PostMapping("/register")
	public User register(@RequestBody User user) {
		return userRepository.save(user);
	}
}

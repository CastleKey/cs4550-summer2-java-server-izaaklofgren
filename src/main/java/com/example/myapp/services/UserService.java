package com.example.myapp.services;

import org.springframework.web.bind.annotation.*;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.*;
import com.example.myapp.models.User;
import com.example.myapp.repositories.*;

@RestController
public class UserService {
	
	@Autowired
	UserRepository userRepository;
	
	@PostMapping("/register")
	public User register(@RequestBody User user, HttpSession session) {
		User cu = userRepository.save(user);
		
		session.setAttribute("currentUser", cu);
		return cu;
		//return userRepository.save(user);
	}
	
	@GetMapping("/checkLogin")
	public User checkLogin(HttpSession session) {
		return (User) session.getAttribute("currentUser");
	}
	
	@GetMapping("/api/user")
	public List<User> findAllUsers() {
		return (List<User>) userRepository.findAll();
	}
	
	@PostMapping("/login")
	public User login(@RequestBody User user) {
		return userRepository.findUserByCredentials(user.getUsername(), user.getPassword());
	}
	
}

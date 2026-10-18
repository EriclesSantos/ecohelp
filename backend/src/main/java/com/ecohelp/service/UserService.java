package com.ecohelp.service;

import com.ecohelp.dto.CreateUserRequest;
import com.ecohelp.dto.UserResponse;
import com.ecohelp.model.User;
import com.ecohelp.repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class UserService {
    private final UserRepository repository;
    private final PasswordEncoder passwordEncoder;

    public UserService(UserRepository repository, PasswordEncoder passwordEncoder) {
        this.repository = repository;
        this.passwordEncoder = passwordEncoder;
    }

    public UserResponse save(CreateUserRequest request) {
        User user = new User();
        user.setName(request.name().trim());
        user.setEmail(request.email().trim());
        user.setPassword(passwordEncoder.encode(request.password()));
        return UserResponse.from(repository.save(user));
    }

    public List<UserResponse> list() {
        return repository.findAll().stream().map(UserResponse::from).toList();
    }
}

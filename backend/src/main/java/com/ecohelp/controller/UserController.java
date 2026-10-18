package com.ecohelp.controller;

import com.ecohelp.dto.CreateUserRequest;
import com.ecohelp.dto.UserResponse;
import com.ecohelp.service.UserService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {
    private final UserService service;
    public UserController(UserService service) { this.service = service; }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public UserResponse create(@Valid @RequestBody CreateUserRequest user) {
        return service.save(user);
    }

    @GetMapping
    public List<UserResponse> list() { return service.list(); }
}

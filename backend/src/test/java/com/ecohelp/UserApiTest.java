package com.ecohelp;

import com.ecohelp.repository.UserRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.http.MediaType;
import org.springframework.security.crypto.password.PasswordEncoder;
import static org.assertj.core.api.Assertions.assertThat;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc
@ActiveProfiles("demo")
class UserApiTest {
    @Autowired MockMvc mvc;
    @Autowired UserRepository users;
    @Autowired PasswordEncoder encoder;
    @BeforeEach void clean() { users.deleteAll(); }

    @Test void registrationHashesPasswordAndNeverReturnsIt() throws Exception {
        mvc.perform(post("/users").contentType(MediaType.APPLICATION_JSON).content(
            "{\"name\":\"Pessoa Demo\",\"email\":\"demo@example.com\",\"password\":\"demo-pass-123\"}"))
            .andExpect(status().isCreated()).andExpect(jsonPath("$.id").isNumber())
            .andExpect(jsonPath("$.password").doesNotExist());
        String hash = users.findAll().get(0).getPassword();
        assertThat(hash).isNotEqualTo("demo-pass-123");
        assertThat(encoder.matches("demo-pass-123", hash)).isTrue();
        mvc.perform(get("/users")).andExpect(status().isOk())
            .andExpect(jsonPath("$[0].password").doesNotExist());
    }

    @Test void invalidRegistrationIsRejectedWithoutPersisting() throws Exception {
        mvc.perform(post("/users").contentType(MediaType.APPLICATION_JSON).content(
            "{\"name\":\"\",\"email\":\"invalid\",\"password\":\"123\"}"))
            .andExpect(status().isBadRequest());
        assertThat(users.count()).isZero();
    }

    @Test void excessivePasswordLengthIsRejectedBeforeHashing() throws Exception {
        String body = "{\"name\":\"Demo\",\"email\":\"demo@example.com\",\"password\":\"" + "a".repeat(129) + "\"}";
        mvc.perform(post("/users").contentType(MediaType.APPLICATION_JSON).content(body))
            .andExpect(status().isBadRequest());
        assertThat(users.count()).isZero();
    }
}

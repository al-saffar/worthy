package com.example.restservice;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.query.Procedure;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository< User, Long > {
    User findByEmail(String email);

    @Procedure("IsUserPasswordValid")
    int loginSuccess(String username, String password);
}
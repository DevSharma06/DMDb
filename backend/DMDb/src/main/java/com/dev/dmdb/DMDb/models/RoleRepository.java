package com.dev.dmdb.DMDb.models;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface RoleRepository extends MongoRepository<Role, String>{
	Optional<Role> findByName(ERole name);
}

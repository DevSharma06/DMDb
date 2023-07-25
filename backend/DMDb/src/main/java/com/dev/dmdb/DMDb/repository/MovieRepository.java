package com.dev.dmdb.DMDb.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import com.dev.dmdb.DMDb.models.Movie;

@Repository
public interface MovieRepository extends MongoRepository<Movie, String>{

	@Query("{ 'no' : ?0 }")
	Optional<Movie> findMovieByNo(Long no);
}

package com.dev.dmdb.DMDb.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dev.dmdb.DMDb.SequenceGeneratorService;
import com.dev.dmdb.DMDb.models.Movie;
import com.dev.dmdb.DMDb.repository.MovieRepository;

@RestController
@RequestMapping("/api")
public class MovieController {

	private MovieRepository repository;
	private SequenceGeneratorService sequenceGeneratorService;
	
	@Autowired
	public MovieController(MovieRepository repository, SequenceGeneratorService sequenceGeneratorService) {
		this.repository = repository;
		this.sequenceGeneratorService = sequenceGeneratorService;
	}


	@GetMapping("/movies")
	List<Movie> getMovies() {
		return repository.findAll();
	}

	@PostMapping("/addMovie")
	Movie addMovie(@RequestBody Movie movie) {
		movie.setNo(sequenceGeneratorService.generateSequence(movie.SEQUENCE_NAME));
		return repository.save(movie);
	}

	@PutMapping("/updateMovie/{no}")
	Movie updateMovie(@RequestBody Movie movie, @PathVariable Long no) {
		
		return repository.findMovieByNo(no).map(m -> {
//			m.setNo(movie.getNo());
			m.setName(movie.getName());
			m.setDescription(movie.getDescription());
			m.setYearOfRelease(movie.getYearOfRelease());
			m.setGenre(movie.getGenre());
			m.setRating(movie.getRating());
			m.setPosterUrl(movie.getPosterUrl());
			m.setTrailerUrl(movie.getTrailerUrl());
			return repository.save(m);
		}).orElseGet(() -> {
			movie.setNo(sequenceGeneratorService.generateSequence(movie.SEQUENCE_NAME));
			return repository.save(movie);
		});
	}
	
	@PutMapping("/updateMovieById/{id}")
	Movie updateMovieById(@RequestBody Movie movie, @PathVariable String id) {
		
		return repository.findById(id).map(m -> {
			m.setId(movie.getId());
			m.setNo(movie.getNo());
			m.setName(movie.getName());
			m.setDescription(movie.getDescription());
			m.setYearOfRelease(movie.getYearOfRelease());
			m.setGenre(movie.getGenre());
			m.setRating(movie.getRating());
			m.setPosterUrl(movie.getPosterUrl());
			m.setTrailerUrl(movie.getTrailerUrl());
			return repository.save(m);
		}).orElseGet(() -> {
			movie.setId(id);
			movie.setNo(sequenceGeneratorService.generateSequence(movie.SEQUENCE_NAME));
			return repository.save(movie);
		});
	}

	@DeleteMapping("/deleteMovie/{id}")
	void deleteMovie(@PathVariable String id) {
		repository.deleteById(id);
	}
}

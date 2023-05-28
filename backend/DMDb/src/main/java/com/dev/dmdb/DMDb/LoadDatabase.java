package com.dev.dmdb.DMDb;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.dev.dmdb.DMDb.model.Movie;
import com.dev.dmdb.DMDb.repository.MovieRepository;

@Configuration
public class LoadDatabase {
	private static final Logger log = LoggerFactory.getLogger(LoadDatabase.class);

	@Bean
	CommandLineRunner initDatabase(MovieRepository repository) {
		return args-> {
//			log.info("Preloading " + repository.save(new Movie("Sample Move", "Sample Movie Description", "2013", "Action", 7.4F, "Poster Link", "Trailer Link")));
		};
	}
}

package com.dev.dmdb.DMDb.model;

import java.util.Date;
import java.util.List;
import java.util.Objects;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.format.annotation.DateTimeFormat;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import jakarta.persistence.Transient;

@Document(collection = "movies")
public class Movie {

	@Transient
	public static final String SEQUENCE_NAME = "movies_sequence";

	private @Id String id;
	private @GeneratedValue Long no;

	@Indexed(unique = true)
	private String name;

	@Indexed(unique = true)
	private String description;

	private String yearOfRelease;
	private List<String> genre;
	private Float rating;
	
	@Indexed(unique = true)
	private String posterUrl;
	
	@Indexed(unique = true)
	private String trailerUrl;

	@Temporal(TemporalType.TIMESTAMP)
	@DateTimeFormat
	@CreatedDate
	private Date createdDate;

	public Movie() {
	}

	public Movie(String name, String description, String yearOfRelease, List<String> genre, Float rating,
			String posterUrl, String trailerUrl) {
		super();
		this.name = name;
		this.description = description;
		this.yearOfRelease = yearOfRelease;
		this.genre = genre;
		this.rating = rating;
		this.posterUrl = posterUrl;
		this.trailerUrl = trailerUrl;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getYearOfRelease() {
		return yearOfRelease;
	}

	public void setYearOfRelease(String yearOfRelease) {
		this.yearOfRelease = yearOfRelease;
	}

	public List<String> getGenre() {
		return genre;
	}

	public void setGenre(List<String> genre) {
		this.genre = genre;
	}

	public Float getRating() {
		return rating;
	}

	public void setRating(Float rating) {
		this.rating = rating;
	}

	public String getPosterUrl() {
		return posterUrl;
	}

	public void setPosterUrl(String posterUrl) {
		this.posterUrl = posterUrl;
	}

	public String getTrailerUrl() {
		return trailerUrl;
	}

	public void setTrailerUrl(String trailerUrl) {
		this.trailerUrl = trailerUrl;
	}

	@Override
	public int hashCode() {
		return Objects.hash(description, genre, id, name, posterUrl, rating, trailerUrl, yearOfRelease);
	}

	@Override
	public String toString() {
		return String.format(
				"Movie [id=%s, name=%s, description=%s, yearOfRelease=%s, genre=%s, rating=%s, posterUrl=%s, trailerUrl=%s]",
				id, name, description, yearOfRelease, genre, rating, posterUrl, trailerUrl);
	}

	public Long getNo() {
		return no;
	}

	public void setNo(Long no) {
		this.no = no;
	}

}

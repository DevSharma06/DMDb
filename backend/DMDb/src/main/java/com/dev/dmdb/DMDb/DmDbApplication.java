package com.dev.dmdb.DMDb;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class})
public class DmDbApplication {

	public static void main(String[] args) {
		SpringApplication.run(DmDbApplication.class, args);
	}

}

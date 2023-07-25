package com.dev.dmdb.DMDb;

import static org.springframework.data.mongodb.core.FindAndModifyOptions.options;
import static org.springframework.data.mongodb.core.query.Criteria.where;
import static org.springframework.data.mongodb.core.query.Query.query;

import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

import com.dev.dmdb.DMDb.models.DatabaseSequence;

@Service
public class SequenceGeneratorService {

	private MongoOperations mongoOperations;

	@Autowired
	public SequenceGeneratorService(MongoOperations mongoOperations) {
		this.mongoOperations = mongoOperations;
	}

	public long generateSequence(String seqName) {
		DatabaseSequence sequence = mongoOperations.findAndModify(query(where("no").is(seqName)),
				new Update().inc("seq", 1), options().returnNew(true).upsert(true), DatabaseSequence.class);
		return !Objects.isNull(sequence) ? sequence.getSeq() : 1;
	}
}

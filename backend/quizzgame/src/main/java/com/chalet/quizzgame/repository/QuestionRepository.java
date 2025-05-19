package com.chalet.quizzgame.repository;

import com.chalet.quizzgame.model.Question;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface QuestionRepository extends JpaRepository<Question, Integer>{

    Optional<Question> findByQuestion(String question);

    Optional<Question> findByQuestionId(Integer Id);

}
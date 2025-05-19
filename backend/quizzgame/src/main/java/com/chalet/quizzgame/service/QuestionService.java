package com.chalet.quizzgame.service;

import com.chalet.quizzgame.model.Question;
import com.chalet.quizzgame.repository.QuestionRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class QuestionService {

    private final QuestionRepository questionRepository;

    public QuestionService(QuestionRepository questionRepository) {
        this.questionRepository = questionRepository;
    }

    public List<Question> getAllQuestions() {
        return questionRepository.findAll();
    }

    public Optional<Question> getQuestionById(Integer id) {
        return questionRepository.findById(id);
    }

    public Question saveQuestion(Question question) {
        return questionRepository.save(question);
    }

    public void deleteQuestion(Integer id) {
        questionRepository.deleteById(id);
    }

    public Question updateQuestion(Integer id, Question updated) {
        return questionRepository.findById(id)
                .map(q -> {
                    q.setQuestion(updated.getQuestion());
                    q.setAnswer(updated.getAnswer());
                    q.setChoiceAnswer(updated.getChoiceAnswer());
                    q.setImageUrl(updated.getImageUrl());
                    return questionRepository.save(q);
                })
                .orElseThrow(() -> new RuntimeException("Question not found"));
    }
}

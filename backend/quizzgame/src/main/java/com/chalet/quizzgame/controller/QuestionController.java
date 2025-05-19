package com.chalet.quizzgame.controller;

import com.chalet.quizzgame.model.Question;
import com.chalet.quizzgame.service.QuestionService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/questions")
public class QuestionController {

    private final QuestionService questionService;

    public QuestionController(QuestionService questionService) {
        this.questionService = questionService;
    }

    @GetMapping
    public List<Question> getAll() {
        return questionService.getAllQuestions();
    }

    @PostMapping
    public Question create(@RequestBody Question question) {
        return questionService.saveQuestion(question);
    }

    @GetMapping("/{id}")
    public Question getById(@PathVariable Integer id) {
        return questionService.getQuestionById(id)
                .orElseThrow(() -> new RuntimeException("Not found"));
    }

    @PutMapping("/{id}")
    public Question update(@PathVariable Integer id, @RequestBody Question updated) {
        return questionService.updateQuestion(id, updated);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Integer id) {
        questionService.deleteQuestion(id);
    }
}

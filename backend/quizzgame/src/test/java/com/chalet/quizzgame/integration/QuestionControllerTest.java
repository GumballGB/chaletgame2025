package com.chalet.quizzgame.integration;

import com.chalet.quizzgame.model.Question;
import com.chalet.quizzgame.repository.QuestionRepository;
import com.fasterxml.jackson.databind.ObjectMapper;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc
public class QuestionControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @Autowired
    private QuestionRepository questionRepository;

    @BeforeEach
    public void setup() {
        questionRepository.deleteAll();
    }


    @Test
    public void testCreateAndGetQuestion() throws Exception {
        Question question = new Question();
        question.setQuestion("What year did Canada become a country?");
        question.setAnswer("1867");
        question.setChoiceAnswer("A. 1776,B. 1867,C. 1905,D. 1949");
        question.setImageUrl("https://example.com/image.png");

        // Create the question
        mockMvc.perform(post("/questions")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(question)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.question").value("What year did Canada become a country?"));

        // Fetch all questions
        mockMvc.perform(get("/questions"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.length()").value(1));
    }
}

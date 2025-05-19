package com.chalet.quizzgame.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Question {

    @Id
    private Integer questionId;

    private String question;
    private String answer;

    private String choiceAnswer;

    private String url;



    public Question() {

    }

    public String getQuestion() {
        return question;
    }

    public String getImageUrl() {
        return url;
    }

    public void setImageUrl(String url) {
        this.url = url;
    }

    public void setQuestion(String question) {
        this.question = question;
    }

    public String getAnswer() {
        return answer;
    }

    public void setAnswer(String answer) {
        this.answer = answer;
    }

    public String getChoiceAnswer() {
        return choiceAnswer;
    }

    public void setChoiceAnswer(String choiceAnswer) {
        this.choiceAnswer = choiceAnswer;
    }

}

package com.chalet.quizzgame.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Team {

    @Id
    private Integer teamId;

    private String name;

    private String description;

    public Team() {

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

}

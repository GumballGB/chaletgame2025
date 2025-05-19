package com.chalet.quizzgame.repository;

import com.chalet.quizzgame.model.Team;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface TeamRepository extends JpaRepository<Team, Integer>{

    Optional<Team> findByName(String name);

    Optional<Team> findByTeamId(Long Id);

}



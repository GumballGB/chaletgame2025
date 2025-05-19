package com.chalet.quizzgame.service;

import com.chalet.quizzgame.model.Team;
import com.chalet.quizzgame.repository.TeamRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TeamService {

    private final TeamRepository teamRepository;

    public TeamService(TeamRepository teamRepository) {
        this.teamRepository = teamRepository;
    }

    public List<Team> getAllTeams() {
        return teamRepository.findAll();
    }

    public Optional<Team> getTeamById(Integer id) {
        return teamRepository.findById(id);
    }

    public Team saveTeam(Team team) {
        return teamRepository.save(team);
    }

    public void deleteTeam(Integer id) {
        teamRepository.deleteById(id);
    }

    public Team updateTeamScore(Integer id, int newScore) {
        return teamRepository.findById(id)
                .map(team -> {
                    team.setScore(newScore);
                    return teamRepository.save(team);
                })
                .orElseThrow(() -> new RuntimeException("Team not found"));
    }
}

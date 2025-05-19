package com.chalet.quizzgame.controller;

import com.chalet.quizzgame.model.Team;
import com.chalet.quizzgame.service.TeamService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/teams")
public class TeamController {

    private final TeamService teamService;

    public TeamController(TeamService teamService) {
        this.teamService = teamService;
    }

    @GetMapping
    public List<Team> getAll() {
        return teamService.getAllTeams();
    }

    @PostMapping
    public Team create(@RequestBody Team team) {
        return teamService.saveTeam(team);
    }

    @GetMapping("/{id}")
    public Team getById(@PathVariable Integer id) {
        return teamService.getTeamById(id)
                .orElseThrow(() -> new RuntimeException("Not found"));
    }

    @PatchMapping("/{id}/score")
    public Team updateScore(@PathVariable Integer id, @RequestParam int score) {
        return teamService.updateTeamScore(id, score);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Integer id) {
        teamService.deleteTeam(id);
    }
}

package com.runnerz.run_tracker;

import java.time.LocalDateTime;

public record Run(
    Integer id,
    String title,
    LocalDateTime startedOn,
    LocalDateTime completedOn,
    Integer miles,
    Location location
) {
    public Run {
        if(id.intValue() <= 0){
            throw new IllegalArgumentException("Id must be postive");
        }
        if(title.isBlank()){
            throw new IllegalArgumentException("Title must not be empty");
        }
        if(startedOn.isAfter(completedOn)){
            throw new IllegalArgumentException("Completed On must be after Started On");
        }
        if(miles.intValue() <= 0){
            throw new IllegalArgumentException("Miles must be postive");
        }
    }
}

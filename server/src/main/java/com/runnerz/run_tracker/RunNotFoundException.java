package com.runnerz.run_tracker;

public class RunNotFoundException extends RuntimeException {
    public RunNotFoundException() {
        super("Run not found");
    }
}

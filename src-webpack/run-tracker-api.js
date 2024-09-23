export const apiDefinition = {
  "openapi": "3.0.3",
  "info": {
    "title": "Runnerz API",
    "version": "1.0.0",
    "contact": {}
  },
  "servers": [
    {
      "url": "http://localhost:8080"
    }
  ],
  "paths": {
    "/api/runs": {
      "get": {
        "summary": "Get all the runs.",
        "description": "Return all the runs stored in the database.",
        "operationId": "findall",
        "responses": {
          "200": {
            "description": "Indicates a successful response from the server."
          }
        }
      },
      "post": {
        "summary": "Create a new run.",
        "description": "Creates a new run and stores it in the database.",
        "operationId": "create",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "completedOn": {
                    "type": "string",
                    "example": "2022-12-12T16:20:12.497678"
                  },
                  "id": {
                    "type": "number",
                    "example": 3
                  },
                  "location": {
                    "type": "string",
                    "example": "INDOOR"
                  },
                  "miles": {
                    "type": "number",
                    "example": 2
                  },
                  "startedOn": {
                    "type": "string",
                    "example": "2022-12-12T15:00:12.49766"
                  },
                  "title": {
                    "type": "string",
                    "example": "Wednesday Afternoon Run"
                  }
                }
              },
              "examples": {
                "create": {
                  "value": {
                    "completedOn": "2022-12-12T16:20:12.497678",
                    "id": 3,
                    "location": "INDOOR",
                    "miles": 2,
                    "startedOn": "2022-12-12T15:00:12.49766",
                    "title": "Wednesday Afternoon Run"
                  }
                }
              }
            }
          }
        },
        "responses": {
          "201": {
            "description": "Indicates that the request was successfully processed and that a new resource was created."
          }
        }
      }
    },
    "/api/runs/{id}": {
      "get": {
        "summary": "Get a run by id.",
        "description": "Returns a run whose id matches the given id.",
        "operationId": "findbyid",
        "responses": {
          "200": {
            "description": "Indicates a successful response from the server."
          }
        }
      },
      "put": {
        "summary": "Update a run by id.",
        "description": "Replaces all the values in a run whose id matches the given id.",
        "operationId": "update",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "completedOn": {
                    "type": "string",
                    "example": "2022-12-12T15:20:12.497678"
                  },
                  "id": {
                    "type": "number",
                    "example": 3
                  },
                  "location": {
                    "type": "string",
                    "example": "INDOOR"
                  },
                  "miles": {
                    "type": "number",
                    "example": 2
                  },
                  "startedOn": {
                    "type": "string",
                    "example": "2022-12-12T15:00:12.49766"
                  },
                  "title": {
                    "type": "string",
                    "example": "Wednesday Afternoon Run!!!"
                  }
                }
              },
              "examples": {
                "update": {
                  "value": {
                    "completedOn": "2022-12-12T15:20:12.497678",
                    "id": 3,
                    "location": "INDOOR",
                    "miles": 2,
                    "startedOn": "2022-12-12T15:00:12.49766",
                    "title": "Wednesday Afternoon Run!!!"
                  }
                }
              }
            }
          }
        },
        "responses": {
          "204": {
            "description": "Indicates that the request was successfully processed, but no content is being returned."
          }
        }
      },
      "delete": {
        "summary": "Delete a run by id.",
        "description": "Removes a run in the database whose id matches the given id.",
        "operationId": "delete",
        "responses": {
          "204": {
            "description": "Indicates that the request was successfully processed, but no content is being returned."
          }
        }
      }
    }
  },
  "tags": []
}
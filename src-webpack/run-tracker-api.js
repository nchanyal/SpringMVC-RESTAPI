export const apiDefinition = {
  "openapi": "3.0.3",
  "info": {
    "title": "Runnerz",
    "version": "1.0.0",
    "contact": {}
  },
  "servers": [
    {
      "url": "http://localhost"
    }
  ],
  "paths": {
    "/api/runs": {
      "get": {
        "summary": "findAll",
        "description": "findAll",
        "operationId": "findall",
        "responses": {
          "200": {
            "description": ""
          }
        }
      },
      "post": {
        "summary": "create",
        "description": "create",
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
          "200": {
            "description": ""
          }
        }
      }
    },
    "/api/runs/2": {
      "get": {
        "summary": "findById",
        "description": "findById",
        "operationId": "findbyid",
        "responses": {
          "200": {
            "description": ""
          }
        }
      }
    },
    "/api/runs/3": {
      "put": {
        "summary": "update",
        "description": "update",
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
          "200": {
            "description": ""
          }
        }
      },
      "delete": {
        "summary": "delete",
        "description": "delete",
        "operationId": "delete",
        "responses": {
          "200": {
            "description": ""
          }
        }
      }
    }
  },
  "tags": []
}
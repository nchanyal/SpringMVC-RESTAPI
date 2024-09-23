import SwaggerUI from "swagger-ui";
import { apiDefinition } from "./run-tracker-api";
import "../node_modules/swagger-ui/dist/swagger-ui.css";

SwaggerUI({
    dom_id: "#swagger",
    spec: apiDefinition
})
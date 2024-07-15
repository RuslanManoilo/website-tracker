import { DocumentBuilder } from "@nestjs/swagger";

export const swaggerConfig = new DocumentBuilder()
  .setTitle("Website Tracker")
  .setDescription(
    "API documentation for Website Tracker application. [GitHub repository](https://github.com/RuslanManoilo/website-tracker)"
  )
  .addServer("http://localhost:8008")
  .setVersion("1.0.5")
  .addBearerAuth(
    { type: "http", scheme: "bearer", bearerFormat: "JWT" },
    "accessToken"
  )
  .addTag("Authentication", "Authentication endpoints")
  .addTag("Account", "Account endpoints")
  .addTag("Watch List", "Watch list endpoints")
  .addTag("Roles", "Roles endpoints")
  .build();

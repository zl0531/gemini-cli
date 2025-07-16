# Code Execution Service

This service provides a sandboxed environment for executing shell commands. It is designed to be used as a standalone service that can be called from other applications.

## API

The service exposes a single HTTP endpoint:

*   `POST /execute`

The request body should be a JSON object with the following properties:

```json
{
  "command": "string",
  "description": "string (optional)",
  "directory": "string (optional)",
  "config": {
    "targetDir": "string",
    "coreTools": ["string"],
    "excludeTools": ["string"]
  }
}
```

The response body will be a JSON object with the following properties:

```json
{
  "llmContent": "string",
  "returnDisplay": "string"
}
```

## How to use

1.  Install the dependencies:

    ```bash
    npm install
    ```

2.  Build the service:

    ```bash
    npm run build
    ```

3.  Start the service:

    ```bash
    node dist/index.js
    ```

4.  Send a POST request to the `/execute` endpoint with the command you want to execute.

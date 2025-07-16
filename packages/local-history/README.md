# Local History for Gemini CLI

This feature allows you to store all the terminal output of `gemini-cli`. A service runs locally to record all `gemini-cli` output to a local SQLite database.

## Configuration

To enable this feature, you need to add the following to your `settings.json` file:

```json
{
  "history": true
}
```

By default, the database is stored in `~/.gemini/history.db`.

## Usage

To view the history of all the commands that you have run, you can use the `history` command:

```bash
gemini history
```

This will output a list of all the commands that you have run, along with the session ID, the request, the response, and the timestamp.

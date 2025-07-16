/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import express from 'express';
import { executeToolCall } from './tool-executor.js';
import { ToolRegistry } from '@google/gemini-cli-core';
import { ShellTool } from './shell-tool.js';
import { Config } from '@google/gemini-cli-core';

const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;

app.post('/execute', async (req, res) => {
  const { command, description, directory, config } = req.body;

  const toolRegistry = new ToolRegistry(new Config(config));
  toolRegistry.registerTool(new ShellTool(new Config(config)));

  const toolCallRequest = {
    name: 'run_shell_command',
    args: {
      command,
      description,
      directory,
    },
    callId: '',
    prompt_id: ''
  };

  const result = await executeToolCall(
    new Config(config),
    toolCallRequest,
    toolRegistry
  );

  res.json({
    llmContent: result.responseParts[0].functionResponse.response.content,
    returnDisplay: result.resultDisplay,
  });
});

app.listen(port, () => {
  console.log(`Code execution service listening on port ${port}`);
});

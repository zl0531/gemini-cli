/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { getHistory, HistoryEntry } from '@google/gemini-cli-local-history';
import { CommandModule } from 'yargs';

export const historyCommand: CommandModule = {
  command: 'history',
  describe: 'Show command history',
  handler: () => {
    const history = getHistory() as HistoryEntry[];
    for (const entry of history) {
      console.log(`[${entry.timestamp}] session: ${entry.session_id}`);
      console.log(`> ${entry.request}`);
      console.log(`${entry.response}`);
      console.log('');
    }
  },
};

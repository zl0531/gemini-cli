/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers';
import { historyCommand } from './commands/history.js';

(async () => {
  await yargs(hideBin(process.argv))
    .command(historyCommand)
    .demandCommand()
    .help().argv;
})();

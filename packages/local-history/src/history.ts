/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { getDb } from './db.js';

export interface HistoryEntry {
  id: number;
  session_id: string;
  request: string;
  response: string;
  timestamp: string;
}

export function saveHistory(entry: Omit<HistoryEntry, 'id' | 'timestamp'>) {
  const db = getDb();
  const stmt = db.prepare(
    'INSERT INTO history (session_id, request, response) VALUES (?, ?, ?)',
  );
  stmt.run(entry.session_id, entry.request, entry.response);
}

export function getHistory() {
  const db = getDb();
  const stmt = db.prepare('SELECT * FROM history ORDER BY timestamp DESC');
  return stmt.all();
}

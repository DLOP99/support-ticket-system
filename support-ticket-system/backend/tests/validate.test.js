import test from 'node:test';
import assert from 'node:assert/strict';
import { validateTicket } from '../utils/validate.js';

test('validateTicket ok', () => {
  const { valid } = validateTicket({ title: 'ABC', date: '2025-09-01', status: 'open' });
  assert.equal(valid, true);
});

test('validateTicket bad title', () => {
  const { valid } = validateTicket({ title: 'A', date: '2025-09-01' });
  assert.equal(valid, false);
});

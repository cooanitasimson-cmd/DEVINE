#!/usr/bin/env node
import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const args = process.argv.slice(2);
function resolveCandidate(filePath) {
  return fs.existsSync(filePath) ? filePath : null;
}

function resolveFromEnv() {
  const home = process.env.PNPM_HOME;
  if (!home) return null;
  const direct = resolveCandidate(path.join(home, 'pnpm.cjs'));
  if (direct) return direct;
  const nested = resolveCandidate(path.join(home, 'pnpm', 'bin', 'pnpm.cjs'));
  return nested;
}

function resolveFromGlobalRoot() {
  try {
    const result = spawnSync('npm', ['root', '-g'], {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'inherit'],
    });
    if (result.status !== 0) return null;
    const root = result.stdout.trim();
    if (!root) return null;
    return resolveCandidate(path.join(root, 'pnpm', 'bin', 'pnpm.cjs'));
  } catch (error) {
    return null;
  }
}

const resolved = resolveFromEnv() ?? resolveFromGlobalRoot();

if (!resolved) {
  console.error('Unable to locate a preinstalled pnpm binary.');
  console.error('Install pnpm globally or expose PNPM_HOME before running this script.');
  process.exit(1);
}

const spawned = spawnSync(process.execPath, [resolved, ...args], {
  stdio: 'inherit',
});

process.exit(spawned.status ?? 1);

/**
 * @module @minions-qa-reports/sdk/schemas
 * Custom MinionType schemas for Minions Qa-reports.
 */

import type { MinionType } from 'minions-sdk';

export const qareportType: MinionType = {
  id: 'qa-reports-qa-report',
  name: 'Qa report',
  slug: 'qa-report',
  description: 'An aggregated report across multiple QA runs for a period.',
  icon: '📋',
  schema: [
    { name: 'name', type: 'string', label: 'name' },
    { name: 'clawspace', type: 'string', label: 'clawspace' },
    { name: 'periodStart', type: 'string', label: 'periodStart' },
    { name: 'periodEnd', type: 'string', label: 'periodEnd' },
    { name: 'totalRuns', type: 'number', label: 'totalRuns' },
    { name: 'overallPassRate', type: 'number', label: 'overallPassRate' },
    { name: 'failedSuites', type: 'string', label: 'failedSuites' },
    { name: 'regressions', type: 'string', label: 'regressions' },
    { name: 'recommendations', type: 'string', label: 'recommendations' },
    { name: 'generatedAt', type: 'string', label: 'generatedAt' },
  ],
};

export const healthscoreType: MinionType = {
  id: 'qa-reports-health-score',
  name: 'Health score',
  slug: 'health-score',
  description: 'A computed health score for a clawspace or toolbox.',
  icon: '❤️',
  schema: [
    { name: 'targetType', type: 'select', label: 'targetType' },
    { name: 'targetName', type: 'string', label: 'targetName' },
    { name: 'score', type: 'number', label: 'score' },
    { name: 'grade', type: 'select', label: 'grade' },
    { name: 'breakdown', type: 'string', label: 'breakdown' },
    { name: 'previousScore', type: 'number', label: 'previousScore' },
    { name: 'trend', type: 'select', label: 'trend' },
    { name: 'computedAt', type: 'string', label: 'computedAt' },
  ],
};

export const regressionalertType: MinionType = {
  id: 'qa-reports-regression-alert',
  name: 'Regression alert',
  slug: 'regression-alert',
  description: 'A detected quality regression between report periods.',
  icon: '🚨',
  schema: [
    { name: 'reportId', type: 'string', label: 'reportId' },
    { name: 'clawspace', type: 'string', label: 'clawspace' },
    { name: 'toolboxId', type: 'string', label: 'toolboxId' },
    { name: 'metric', type: 'string', label: 'metric' },
    { name: 'previousValue', type: 'number', label: 'previousValue' },
    { name: 'currentValue', type: 'number', label: 'currentValue' },
    { name: 'severity', type: 'select', label: 'severity' },
    { name: 'detectedAt', type: 'string', label: 'detectedAt' },
    { name: 'resolved', type: 'boolean', label: 'resolved' },
  ],
};

export const trendsnapshotType: MinionType = {
  id: 'qa-reports-trend-snapshot',
  name: 'Trend snapshot',
  slug: 'trend-snapshot',
  description: 'A point-in-time snapshot for tracking quality trends over time.',
  icon: '📈',
  schema: [
    { name: 'targetType', type: 'select', label: 'targetType' },
    { name: 'targetName', type: 'string', label: 'targetName' },
    { name: 'passRate', type: 'number', label: 'passRate' },
    { name: 'healthScore', type: 'number', label: 'healthScore' },
    { name: 'testCount', type: 'number', label: 'testCount' },
    { name: 'failCount', type: 'number', label: 'failCount' },
    { name: 'capturedAt', type: 'string', label: 'capturedAt' },
  ],
};

export const customTypes: MinionType[] = [
  qareportType,
  healthscoreType,
  regressionalertType,
  trendsnapshotType,
];


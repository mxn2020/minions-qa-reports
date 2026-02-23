/**
 * Minions Qa-reports SDK
 *
 * Aggregated test reports, health dashboards, trend analysis, and regression alerts
 *
 * @module @minions-qa-reports/sdk
 */

export const VERSION = '0.1.0';

/**
 * Example: Create a client instance for Minions Qa-reports.
 * Replace this with your actual SDK entry point.
 */
export function createClient(options = {}) {
    return {
        version: VERSION,
        ...options,
    };
}

export * from './schemas/index.js';

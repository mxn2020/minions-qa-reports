"""
Minions Qa-reports SDK — Type Schemas
Custom MinionType schemas for Minions Qa-reports.
"""

from minions.types import FieldDefinition, FieldValidation, MinionType

qa_report_type = MinionType(
    id="qa-reports-qa-report",
    name="Qa report",
    slug="qa-report",
    description="An aggregated report across multiple QA runs for a period.",
    icon="📋",
    schema=[
        FieldDefinition(name="name", type="string", label="name"),
        FieldDefinition(name="clawspace", type="string", label="clawspace"),
        FieldDefinition(name="periodStart", type="string", label="periodStart"),
        FieldDefinition(name="periodEnd", type="string", label="periodEnd"),
        FieldDefinition(name="totalRuns", type="number", label="totalRuns"),
        FieldDefinition(name="overallPassRate", type="number", label="overallPassRate"),
        FieldDefinition(name="failedSuites", type="string", label="failedSuites"),
        FieldDefinition(name="regressions", type="string", label="regressions"),
        FieldDefinition(name="recommendations", type="string", label="recommendations"),
        FieldDefinition(name="generatedAt", type="string", label="generatedAt"),
    ],
)

health_score_type = MinionType(
    id="qa-reports-health-score",
    name="Health score",
    slug="health-score",
    description="A computed health score for a clawspace or toolbox.",
    icon="❤️",
    schema=[
        FieldDefinition(name="targetType", type="select", label="targetType"),
        FieldDefinition(name="targetName", type="string", label="targetName"),
        FieldDefinition(name="score", type="number", label="score"),
        FieldDefinition(name="grade", type="select", label="grade"),
        FieldDefinition(name="breakdown", type="string", label="breakdown"),
        FieldDefinition(name="previousScore", type="number", label="previousScore"),
        FieldDefinition(name="trend", type="select", label="trend"),
        FieldDefinition(name="computedAt", type="string", label="computedAt"),
    ],
)

regression_alert_type = MinionType(
    id="qa-reports-regression-alert",
    name="Regression alert",
    slug="regression-alert",
    description="A detected quality regression between report periods.",
    icon="🚨",
    schema=[
        FieldDefinition(name="reportId", type="string", label="reportId"),
        FieldDefinition(name="clawspace", type="string", label="clawspace"),
        FieldDefinition(name="toolboxId", type="string", label="toolboxId"),
        FieldDefinition(name="metric", type="string", label="metric"),
        FieldDefinition(name="previousValue", type="number", label="previousValue"),
        FieldDefinition(name="currentValue", type="number", label="currentValue"),
        FieldDefinition(name="severity", type="select", label="severity"),
        FieldDefinition(name="detectedAt", type="string", label="detectedAt"),
        FieldDefinition(name="resolved", type="boolean", label="resolved"),
    ],
)

trend_snapshot_type = MinionType(
    id="qa-reports-trend-snapshot",
    name="Trend snapshot",
    slug="trend-snapshot",
    description="A point-in-time snapshot for tracking quality trends over time.",
    icon="📈",
    schema=[
        FieldDefinition(name="targetType", type="select", label="targetType"),
        FieldDefinition(name="targetName", type="string", label="targetName"),
        FieldDefinition(name="passRate", type="number", label="passRate"),
        FieldDefinition(name="healthScore", type="number", label="healthScore"),
        FieldDefinition(name="testCount", type="number", label="testCount"),
        FieldDefinition(name="failCount", type="number", label="failCount"),
        FieldDefinition(name="capturedAt", type="string", label="capturedAt"),
    ],
)

custom_types: list[MinionType] = [
    qa_report_type,
    health_score_type,
    regression_alert_type,
    trend_snapshot_type,
]


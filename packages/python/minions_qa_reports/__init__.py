"""
Minions Qa-reports Python SDK

Aggregated test reports, health dashboards, trend analysis, and regression alerts
"""

__version__ = "0.1.0"


def create_client(**kwargs):
    """Create a client for Minions Qa-reports.

    Args:
        **kwargs: Configuration options.

    Returns:
        dict: Client configuration.
    """
    return {
        "version": __version__,
        **kwargs,
    }

from .schemas import *

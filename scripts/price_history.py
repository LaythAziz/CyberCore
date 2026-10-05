from __future__ import annotations
from typing import Any


def append_price_observation(history: list[dict[str, Any]] | None, price_iqd: int, checked_at: str, limit: int = 24) -> list[dict[str, Any]]:
    """Append a source observation only when the observed price changes."""
    rows = list(history or [])
    price = int(price_iqd or 0)
    if price <= 0:
        return rows[-limit:]
    last = next((int(row.get("priceIqd", 0)) for row in reversed(rows) if isinstance(row, dict)), 0)
    if last != price:
        rows.append({"priceIqd": price, "checkedAt": checked_at})
    return rows[-limit:]

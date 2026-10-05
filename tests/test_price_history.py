from scripts.price_history import append_price_observation


def test_records_first_observation_with_timestamp():
    history = append_price_observation([], 1575000, "2026-10-05T06:00:00+00:00")
    assert history == [{"priceIqd": 1575000, "checkedAt": "2026-10-05T06:00:00+00:00"}]


def test_records_only_changed_price_and_keeps_timestamp():
    history = [{"priceIqd": 1575000, "checkedAt": "2026-10-05T06:00:00+00:00"}]
    history = append_price_observation(history, 1575000, "2026-10-05T12:00:00+00:00")
    history = append_price_observation(history, 1499000, "2026-10-05T18:00:00+00:00")
    assert history == [
        {"priceIqd": 1575000, "checkedAt": "2026-10-05T06:00:00+00:00"},
        {"priceIqd": 1499000, "checkedAt": "2026-10-05T18:00:00+00:00"},
    ]


def test_ignores_unknown_prices():
    history = [{"priceIqd": 1575000, "checkedAt": "2026-10-05T06:00:00+00:00"}]
    assert append_price_observation(history, 0, "2026-10-05T12:00:00+00:00") == history

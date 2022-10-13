""" An example of test """

from ls_pytest import total

def test_total_empty() -> None:
    assert total([]) == 0.0
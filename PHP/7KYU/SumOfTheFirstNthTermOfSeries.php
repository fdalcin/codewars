function series_sum($n) {
  return number_format(series_sum_recursive($n, 1), 2);
}

function series_sum_recursive($n, $d) {
  return $n === 0 ? 0 : 1 / $d + series_sum_recursive($n - 1, $d + 3);
}
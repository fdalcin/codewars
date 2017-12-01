function get_score(int $n): int {
  $factor = get_triangular_number($n);
  
  return $factor * 50;
}

function get_triangular_number(int $n): int {
  return $n * ($n + 1) / 2;
}
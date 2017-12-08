function balance(string $l, string $r): string {
  $left_weight = (2 * substr_count($l, '!')) + (3 * substr_count($l, '?'));
  $right_weight = (2 * substr_count($r, '!')) + (3 * substr_count($r, '?'));
  
  if ($left_weight > $right_weight) return 'Left';
  else if ($right_weight > $left_weight) return 'Right';
  else return 'Balance';
}
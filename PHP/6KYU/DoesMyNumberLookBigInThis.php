function narcissistic(int $value): bool {
  $digits = str_split($value);
  $exponent = count($digits);
  
  $number = array_reduce($digits, function($carry, $item) use($exponent) {
    return $carry + intval($item) ** $exponent;
  }, 0);
  
  return $number === $value;
}
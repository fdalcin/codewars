function alphabet_position(string $s): string {
  $positions = [];
  
  $letters = str_split(getLowerCaseLetters($s));
  
  foreach($letters as $character) {
    array_push($positions, getAlphabetPosition($character));
  }
  
  return implode(' ', $positions);
}

function getLowerCaseLetters($string): string {
  return strtolower(preg_replace('/[^a-z]/i', '', $string));
}

function getAlphabetPosition($character): int {
  return ord($character) - ord('a') + 1;
}
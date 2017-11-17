function getCount($str) {
  $regexp = '/[aeiou]/i';
  
  return preg_match_all($regexp, $str);
}
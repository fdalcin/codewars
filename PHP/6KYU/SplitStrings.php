function solution($str) {
  if (isLengthOdd($str)) $str .= '_';
  
  return splitIntoPairs($str);
}

function isLengthOdd($string) {
  return strlen($string) % 2;
}

function splitIntoPairs($string) {
  return str_split($string, 2);
}
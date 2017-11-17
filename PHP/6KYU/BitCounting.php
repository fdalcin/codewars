function countBits($n) 
{
   $binary = (string)decbin($n);
   
   return substr_count($binary, '1');
}
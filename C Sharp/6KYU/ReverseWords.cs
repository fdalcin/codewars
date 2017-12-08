using System;
using System.Linq;

public static class Kata
{
  public static string ReverseWords(string str)
  {
    var reversed = str.Split(' ').Select(word => new String(word.Reverse().ToArray()));
	
	return string.Join(" ", reversed);
  }
}
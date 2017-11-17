using System;
using System.Linq;

public static class Kata
{
    private static readonly char[] vowels = new char[] { 'a', 'e', 'i', 'o', 'u' };
    
    public static int GetVowelCount(string str)
    {
        return str.ToLower().Count(c => vowels.Contains(c));
    }
}
using System;
using System.Collections.Generic;
using System.Linq;

public class IQ
{
    public static int Test(string numbers)
    { 
         List<int> integers = getNumberList(numbers);
         
         return integers.FindIndex(n => n == getUniqueNumber(integers)) + 1;
    }
    
    private static List<int> getNumberList(string numbers) {
      return numbers.Split(' ').Select(int.Parse).ToList();
    }
    
    private static int getUniqueNumber(List<int> integers) {
      var simpleOcurrence = integers.GroupBy(n => n % 2).OrderBy(c => c.Count()).First();
      
      return simpleOcurrence.First();
    }
}
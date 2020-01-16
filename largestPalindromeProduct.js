//A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

//Find the largest palindrome made from the product of two n-digit numbers.

function largestPalindromeProduct(n) {

  let num = Math.pow(10,n); //num - 1 is max number
  let polindrome;
  let result = 0;
  
  for(let i=num - 1; i>0; i--){
    for(let j=num - 1; j>0; j--){
        polindrome = i * j;
        if(polindrome === parseInt(polindrome.toString().split("").reverse().join(""))){
          if(polindrome > result){
            result = polindrome;
          }
        }
        
    }
  }
 return result;
}

largestPalindromeProduct(3); //906609

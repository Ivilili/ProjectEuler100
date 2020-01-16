//Project Euler: Problem 5: Smallest multiple

//2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

//What is the smallest positive number that is evenly divisible by all of the numbers from 1 to n?

function smallestMult(n) {
  function lcm(a,b){
    return a * b /gcd(a,b)
  }
 //Basic Euclidean Algorithm for GCD
  function gcd(a,b){
    if (b === 0) return a;
    return gcd(b, a % b);
  }

  let result = 1;
  for(let i=2; i<=n; i++){
    result = lcm(result, i);
  }
  return result;
}

smallestMult(20); //232792560

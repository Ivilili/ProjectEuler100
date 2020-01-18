//Project Euler: Problem 7: 10001st prime

//By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
//What is the nth prime number?

//Rules of prime: 
// An integer is prime if it is not divisible by any prime less than or equal to its square root

function nthPrime(n) {
 let primes = [2];
 let num = 3;
 let isPrime = true;
  while (primes.length < n){
    let max = Math.ceil(Math.sqrt(num));
    for (let i = 0; primes[i] <= max; i++){
      if (num % primes[i] == 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) primes.push(num);
    isPrime = true;
    num+=2;
  }
  return primes[primes.length-1];
}

nthPrime(10); //29


//Check if number is prime (not part of the problem above)
function isPrime(n){
  if(n < 2) return false;

  let sq = Math.floor(Math.sqrt(n));
  for(let i=2; i<=sq; i++){
    if(n % i === 0){
      return false;
    }
  }
return true;
}

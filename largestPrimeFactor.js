//Project Euler: Problem 3: Largest prime factor

//The prime factors of 13195 are 5, 7, 13 and 29.

//What is the largest prime factor of the given number?

//Prime factor is any of the prime numbers that can be multiplied to give the original number.

function largestPrimeFactor(number) {
  let prime = [];
  let maxNum;
  for(let i=2; i<=number; i++){
    if(number % i === 0){
      number = number / i;
      prime.push(i);
    }
  }

 return maxNum = Math.max(...prime);

}

largestPrimeFactor(13195); //29

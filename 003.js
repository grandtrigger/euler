// Question 003

// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?

function bigPrime(number) {
    console.time('timeend');

    // divide number until its odd
    while (number % 2 == 0) {
        number /= 2;
    }

    // divide number by odds
    for (var i = 3; i < Math.sqrt(number); i += 2) {
        // divide number as much as possible
        while (number % i == 0) {
            number /= i;
        }
    }
    
    console.timeEnd('timeend');
    return number;
}

console.log(bigPrime(600851475143));
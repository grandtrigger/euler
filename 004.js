// Problem 004

// A palindromic number reads the same both ways.The largest palindrome made from the product of two 2 - digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3 - digit numbers.

function highPalindrome() {
    console.time('timeend');

    var palindrome = [];

    for (i = 100; i < 1000; i++) {
        for (j = 100; j < 1000; j++) {
            number = i * j;
            
            if (checkPalindrome(number)) palindrome.push(number);
        }
    }

    console.timeEnd('timeend');
    return Math.max.apply(Math, palindrome);

    function checkPalindrome(number) {
        return number.toString() === number.toString().split('').reverse().join('');
    }
}

console.log(highPalindrome());
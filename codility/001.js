/* <div id="task_description"><div id="standard_task_description" class="protected"><div class="task-description-content">

<meta http-equiv="content-type" content="text/html; charset=utf-8">


<div id="brinza-task-description">
<p>You are playing a game with N cards. On each side of each card a positive integer is written. The score of the game is smallest positive integer that doesn't appear on the cards' front faces. You may decide which cards you want to flip over. Having flipped them, you then read the numbers on the front faces of all the cards. What is the minimum game score you can achieve?</p>
<p>Write a function:</p>
<blockquote><p style="font-family: monospace; font-size: 9pt; display: block; white-space: pre-wrap"><tt>class Solution { public int solution(int[] A, int[] B); }</tt></p></blockquote>
<p>that, given two arrays of integers A and B, both of length N, describing the numbers written on the fronts and backs of all the cards, returns the minimum possible game score.</p>
<p>For example, given A = [1, 2, 4, 3] and B = [1, 3, 2, 3], your function should return 2, as we could flip second card such that the front-facing numbers were [1, 3, 4, 3] and the smallest positive integer excluded from this sequence is 2.</p>
<p>Given A = [3, 2, 1, 6, 5] and B = [4, 2, 1, 3, 3], your function should return 3, as we could flip first card such that the front-facing numbers were [4, 2, 1, 6, 5].</p>
<p>Given A = [1, 2] and B = [1, 2] your function should return 3, as no matter how we flip the cards the front-facing numbers will be [1, 2].</p>
<p>Assume that:</p>
<blockquote><ul style="margin: 10px;padding: 0px;"><li>N is an integer within the range [<span class="number">1</span>..<span class="number">100,000</span>];</li>
<li>each element of arrays A, B is an integer within the range [<span class="number">1</span>..<span class="number">100,000</span>];</li>
<li>input arrays are of equal size.</li>
</ul>
</blockquote><p>Complexity:</p>
<blockquote><ul style="margin: 10px;padding: 0px;"><li>expected worst-case time complexity is O(N);</li>
<li>expected worst-case space complexity is O(N) (not counting the storage required for input arguments).</li>
</ul>
</blockquote></div>
<div style="margin-top:5px">
<small>Copyright 2009–2018 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.</small>
</div>

</div></div></div> */



// 81 minutes to resolution (26/06/2018)

function solution(a, b) {
    var smallestB = 100000;

    var i = 0;
    var n = a.length

    while(i < n) {
        if (a[i] < b[i]) {
            var c = a[i];

            a[i] = b[i];
            b[i] = c;
        }

        console.log(a);
        console.log(b);
        console.log('-----------------------')

        i++;
    }

    for (var i = 0; i < b.length; i++) {
        if (b[i] < smallestB && !a.find(number => number === b[i])) smallestB = b[i];
    }

    if (smallestB < 100000) {
        return smallestB;
    } else {
        var highestB = 0;
        for (var i = 0; i < b.length; i++) {
            if (b[i] > highestB) highestB = b[i];
        }

        return highestB + 1;
    }

}

console.log(solution([3, 2, 1, 6, 5], [4, 2, 1, 3, 3]));
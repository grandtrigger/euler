{/* <div id="task_description"><div id="standard_task_description" class="protected"><div class="task-description-content">

<meta http-equiv="content-type" content="text/html; charset=utf-8">


<div id="brinza-task-description">
<p>A network consisting of M cities and M − 1 roads connecting them is given. Cities are labeled with distinct integers within the range [0..(M − 1)].</p>
<p>Roads connect cities in such a way that each pair of distinct cities is connected either by a direct road or along a path consisting of direct roads. There is exactly one way to reach any city from any other city. In other words, cities and direct roads form a <i>tree</i>. The number of direct roads that must be traversed is called the <i>distance</i> between these two cities.</p>
<p>For example, consider the following network consisting of ten cities and nine roads:</p>
<p><img class="inline-description-image" src="https://codility-frontend-prod.s3.amazonaws.com/media/task_static/cities_distances/static/images/auto/db61fff0cf314729adfe7f8e57d7ddc5.png"></p>
<p>Cities 2 and 4 are connected directly, so the distance between them is 1. Cities 4 and 7 are connected by a path consisting of the direct roads 4−0, 0−9 and 9−7; hence the distance between them is 3.</p>
<p>One of the cities is the capital, and the goal is to count the number of cities positioned away from it at each of the distances 1, 2, 3, ..., M − 1.</p>
<p>If city number 1 is the capital, then the cities positioned at the various distances from the capital would be as follows:</p>
<blockquote><ul style="margin: 10px;padding: 0px;"><li>9 is at a distance of 1;</li>
<li>0, 3, 7 are at a distance of 2;</li>
<li>8, 4 are at a distance of 3;</li>
<li>2, 5, 6 are at a distance of 4.</li>
</ul>
</blockquote><p>Write a function:</p>
<blockquote><p style="font-family: monospace; font-size: 9pt; display: block; white-space: pre-wrap"><tt>function solution(T);</tt></p></blockquote>
<p>that, given a non-empty array T consisting of M integers describing a network of M cities and M − 1 roads, returns an array consisting of M − 1 integers, specifying the number of cities positioned at each distance 1, 2, ..., M − 1.</p>
<p>Array T describes a network of cities as follows:</p>
<blockquote><ul style="margin: 10px;padding: 0px;"><li>if T[P] = Q and P = Q, then P is the capital;</li>
<li>if T[P] = Q and P ≠ Q, then there is a direct road between cities P and Q.</li>
</ul>
</blockquote><p>For example, given the following array T consisting of ten elements:</p>
<tt style="white-space:pre-wrap"> T[0] = 9    T[1] = 1    T[2] = 4
 T[3] = 9    T[4] = 0    T[5] = 4
 T[6] = 8    T[7] = 9    T[8] = 0
 T[9] = 1</tt>
<p>the function should return [1, 3, 2, 3, 0, 0, 0, 0, 0], as explained above.</p>
<p>Assume that:</p>
<blockquote><ul style="margin: 10px;padding: 0px;"><li>M is an integer within the range [<span class="number">1</span>..<span class="number">100,000</span>];</li>
<li>each element of array T is an integer within the range [<span class="number">0</span>..<span class="number">M−1</span>];</li>
<li>there is exactly one (possibly indirect) connection between any two distinct cities.</li>
</ul>
</blockquote><p>Complexity:</p>
<blockquote><ul style="margin: 10px;padding: 0px;"><li>expected worst-case time complexity is O(M);</li>
<li>expected worst-case space complexity is O(M) (not counting the storage required for input arguments).</li>
</ul>
</blockquote></div>
<div style="margin-top:5px">
<small>Copyright 2009–2018 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.</small>
</div>

</div></div></div> */}
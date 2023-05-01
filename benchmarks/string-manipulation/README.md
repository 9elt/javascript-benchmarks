# String manipulation
Comparing string manipulation methods



## Results

<table>
<thead>
<tr>
<th>tested code</th>
<th><a href="available-code/simple.js">simple</a></th>
<th><a href="available-code/realistic.js">realistic</a></th>
<th><a href="available-code/edge-case.js">edge case</a></th>
</tr>
</thead>
<tbody>


<tr></tr><tr>

<td>

[**array join**](/benchmarks/string-manipulation/array-join.js)

```javascript
[string, other_string].join("")
```

</td>

<td>
    <b>3.44 ms </b><br>
    (std. 46 μs, o. 13%)
</td>

<td>
    <b>3.62 ms </b><br>
    (std. 96 μs, o. 11%)
</td>

<td>
    <b>4.15 ms </b><br>
    (std. 339 μs, o. 9%)
</td>

</tr>
<tr></tr><tr>

<td>

[**backticks**](/benchmarks/string-manipulation/backticks.js)

```javascript
`${string}${other_string}`
```

</td>

<td>
    <b>267 μs </b><br>
    (std. 4 μs, o. 15%)
</td>

<td>
    <b>262 μs </b><br>
    (std. 8 μs, o. 5%)
</td>

<td>
    <b>263 μs </b><br>
    (std. 9 μs, o. 5%)
</td>

</tr>
<tr></tr><tr>

<td>

[**concatenation**](/benchmarks/string-manipulation/concatenation.js)

```javascript
string + other_string
```

</td>

<td>
    <b>15 μs </b><br>
    (std. 0 μs, o. 6%)
</td>

<td>
    <b>15 μs </b><br>
    (std. 0 μs, o. 5%)
</td>

<td>
    <b>15 μs </b><br>
    (std. 0 μs, o. 5%)
</td>

</tr>

</tbody>
</table>

**std.** standard deviation, **o.** outliers 

## Chart

<img src=".data/chart.svg" width="100%"/>

## Metadata

#### benchmark

<sup>normal distrubution is calculated without outliers</sup>
<br>
<b>Normal distribution samples: </b> 1000
<br>
<b>Average outliers percentage: </b> 8%
<br><br>
<sup>results are measured over multiple iterations of a code snippet</sup>
<br>
<b>Result measured over: </b> 50000 iterations

#### system

<b>Node: </b> v19.8.1
<br>
<b>CPU: </b> Intel(R) Core(TM) i7-5820K CPU @ 3.30GHz, 3900 MHz (12)

# String manipulation
Comparing string manipulation methods



## Results

<table>
<thead>
<tr>
<th>tested code</th>
<th><a href=".code/simple.js">simple</a></th>
<th><a href=".code/realistic.js">realistic</a></th>
<th><a href=".code/edge-case.js">edge case</a></th>
</tr>
</thead>
<tbody>


<tr></tr><tr>

<td>

[**array join**](/benchmarks/string-manipulation/array-join.js)

```javascript
let s = [string, other_string].join("")
```

</td>

<td>
    <b>3.57 ms </b><br>
    (std. 209 μs, o. 9%)
</td>

<td>
    <b>3.84 ms </b><br>
    (std. 419 μs, o. 5%)
</td>

<td>
    <b>4.09 ms </b><br>
    (std. 259 μs, o. 5%)
</td>

</tr>
<tr></tr><tr>

<td>

[**backticks**](/benchmarks/string-manipulation/backticks.js)

```javascript
let s = `${string}${other_string}`
```

</td>

<td>
    <b>277 μs </b><br>
    (std. 7 μs, o. 11%)
</td>

<td>
    <b>275 μs </b><br>
    (std. 4 μs, o. 16%)
</td>

<td>
    <b>271 μs </b><br>
    (std. 10 μs, o. 10%)
</td>

</tr>
<tr></tr><tr>

<td>

[**concatenation**](/benchmarks/string-manipulation/concatenation.js)

```javascript
let s = string + other_string
```

</td>

<td>
    <b>16 μs </b><br>
    (std. 0 μs, o. 9%)
</td>

<td>
    <b>16 μs </b><br>
    (std. 0 μs, o. 8%)
</td>

<td>
    <b>16 μs </b><br>
    (std. 0 μs, o. 13%)
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
<b>Average outliers percentage: </b> 10%
<br><br>
<sup>results are measured over multiple iterations of a code snippet</sup>
<br>
<b>Result measured over: </b> 50000 iterations

#### system

<b>Node: </b> v19.8.1
<br>
<b>CPU: </b> Intel(R) Core(TM) i7-5820K CPU @ 3.30GHz, 3900 MHz (12)

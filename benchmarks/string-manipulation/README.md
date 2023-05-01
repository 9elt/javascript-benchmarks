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
    <b>3.55 ms </b><br>
    (std. 225 μs, o. 9%)
</td>

<td>
    <b>3.55 ms </b><br>
    (std. 71 μs, o. 20%)
</td>

<td>
    <b>3.91 ms </b><br>
    (std. 60 μs, o. 15%)
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
    <b>258 μs </b><br>
    (std. 1 μs, o. 23%)
</td>

<td>
    <b>231 μs </b><br>
    (std. 0 μs, o. 10%)
</td>

<td>
    <b>218 μs </b><br>
    (std. 0 μs, o. 17%)
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
    (std. 0 μs, o. 14%)
</td>

<td>
    <b>15 μs </b><br>
    (std. 0 μs, o. 9%)
</td>

<td>
    <b>15 μs </b><br>
    (std. 0 μs, o. 4%)
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
<b>Average outliers percentage: </b> 13%
<br><br>
<sup>results are measured over multiple iterations of a code snippet</sup>
<br>
<b>Result measured over: </b> 50000 iterations

#### system

<b>Node: </b> v19.8.1
<br>
<b>CPU: </b> Intel(R) Core(TM) i7-5820K CPU @ 3.30GHz, 3900 MHz (12)

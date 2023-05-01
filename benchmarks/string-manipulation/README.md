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
    <b>3.51 ms </b><br>
    (std. 175 μs, o. 12%)
</td>

<td>
    <b>3.72 ms </b><br>
    (std. 151 μs, o. 12%)
</td>

<td>
    <b>3.89 ms </b><br>
    (std. 67 μs, o. 14%)
</td>

</tr>
<tr></tr><tr>

<td>

[**backticks**](/benchmarks/string-manipulation/backticks.js)

```javascript
`string_`
```

</td>

<td>
    <b>216 μs </b><br>
    (std. 5 μs, o. 4%)
</td>

<td>
    <b>210 μs </b><br>
    (std. 8 μs, o. 7%)
</td>

<td>
    <b>205 μs </b><br>
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
    <b>0 μs </b><br>
    (std. 0 μs, o. 6%)
</td>

<td>
    <b>0 μs </b><br>
    (std. 0 μs, o. 7%)
</td>

<td>
    <b>0 μs </b><br>
    (std. 0 μs, o. 7%)
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

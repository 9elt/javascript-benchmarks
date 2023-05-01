# String manipulation
Comparing string manipulation methods



### Results table

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
[other_string, string, other_string].join()
```

</td>

<td>
    <b>1.20 ms </b>
    (std. 146 μs)
</td>

<td>
    <b>1.23 ms </b>
    (std. 149 μs)
</td>

<td>
    <b>1.32 ms </b>
    (std. 167 μs)
</td>

</tr>
<tr></tr><tr>

<td>

[**backticks**](/benchmarks/string-manipulation/backticks.js)

```javascript
`${other_string}${string}${other_string}`
```

</td>

<td>
    <b>187 μs </b>
    (std. 73 μs)
</td>

<td>
    <b>119 μs </b>
    (std. 58 μs)
</td>

<td>
    <b>142 μs </b>
    (std. 78 μs)
</td>

</tr>
<tr></tr><tr>

<td>

[**concatenation**](/benchmarks/string-manipulation/concatenation.js)

```javascript
other_string + string + other_string
```

</td>

<td>
    <b>8 μs </b>
    (std. 64 μs)
</td>

<td>
    <b>11 μs </b>
    (std. 66 μs)
</td>

<td>
    <b>10 μs </b>
    (std. 61 μs)
</td>

</tr>

</tbody>
</table>


### Chart

<img src=".data/chart.svg" width="100%"/>

<sub>
config
<br>
<b>Normal Distribution Samples: </b> 1000
<b>Snippet code measured iterations: </b> 10000
</sub>
<br>
<sub>
system
<br>
<b>Node: </b> v19.8.1
<br>
<b>CPU: </b>Intel(R) Core(TM) i7-5820K CPU @ 3.30GHz, 3900 MHz (12)
</sub>

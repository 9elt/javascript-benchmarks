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
[string, other_string].join("")
```

</td>

<td>
    <b>3.53 ms </b>
    (std. 60 μs)
</td>

<td>
    <b>3.63 ms </b>
    (std. 37 μs)
</td>

<td>
    <b>3.96 ms </b>
    (std. 124 μs)
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
    <b>273 μs </b>
    (std. 0 μs)
</td>

<td>
    <b>263 μs </b>
    (std. 8 μs)
</td>

<td>
    <b>231 μs </b>
    (std. 0 μs)
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
    <b>15 μs </b>
    (std. 0 μs)
</td>

<td>
    <b>13 μs </b>
    (std. 0 μs)
</td>

<td>
    <b>15 μs </b>
    (std. 0 μs)
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
<br>
<b>Measured iterations: </b> 50000
</sub>
<br>
<sub>
system
<br>
<b>Node: </b> v19.8.1
<br>
<b>CPU: </b>Intel(R) Core(TM) i7-5820K CPU @ 3.30GHz, 3900 MHz (12)
</sub>

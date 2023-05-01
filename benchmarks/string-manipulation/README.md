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
    <b>3.62 ms </b>
    (std. 313 μs)
</td>

<td>
    <b>3.68 ms </b>
    (std. 366 μs)
</td>

<td>
    <b>4.17 ms </b>
    (std. 615 μs)
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
    <b>299 μs </b>
    (std. 158 μs)
</td>

<td>
    <b>278 μs </b>
    (std. 114 μs)
</td>

<td>
    <b>289 μs </b>
    (std. 114 μs)
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
    <b>24 μs </b>
    (std. 129 μs)
</td>

<td>
    <b>22 μs </b>
    (std. 98 μs)
</td>

<td>
    <b>23 μs </b>
    (std. 104 μs)
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

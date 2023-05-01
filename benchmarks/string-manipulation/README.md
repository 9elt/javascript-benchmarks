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
    <b>1 μs </b>
    (std. 4 μs)
</td>

<td>
    <b>2 μs </b>
    (std. 26 μs)
</td>

<td>
    <b>2 μs </b>
    (std. 30 μs)
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
    <b>1 μs </b>
    (std. 27 μs)
</td>

<td>
    <b>1 μs </b>
    (std. 24 μs)
</td>

<td>
    <b>1 μs </b>
    (std. 4 μs)
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
    <b>1 μs </b>
    (std. 4 μs)
</td>

<td>
    <b>1 μs </b>
    (std. 26 μs)
</td>

<td>
    <b>1 μs </b>
    (std. 27 μs)
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
</sub>
<br>
<sub>
system
<br>
<b>Node: </b> v19.8.1
<br>
<b>CPU: </b>Intel(R) Core(TM) i7-5820K CPU @ 3.30GHz, 3900 MHz (12)
</sub>

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
[other_string, string, other_string].join("")
```

</td>

<td>
    <b>4.46 ms </b>
    (std. 619 μs)
</td>

<td>
    <b>4.61 ms </b>
    (std. 693 μs)
</td>

<td>
    <b>4.98 ms </b>
    (std. 473 μs)
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
    <b>824 μs </b>
    (std. 159 μs)
</td>

<td>
    <b>585 μs </b>
    (std. 157 μs)
</td>

<td>
    <b>590 μs </b>
    (std. 152 μs)
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
    <b>25 μs </b>
    (std. 162 μs)
</td>

<td>
    <b>27 μs </b>
    (std. 154 μs)
</td>

<td>
    <b>34 μs </b>
    (std. 182 μs)
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

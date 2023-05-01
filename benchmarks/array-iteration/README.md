# Array iteration
Comparing different ways of iterating arrays



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

[**filter**](/benchmarks/array-iteration/filter.js)

```javascript
array.filter(v => {})
```

</td>

<td>
    <b>61 μs </b>
    (std. 169 μs)
</td>

<td>
    <b>396 μs </b>
    (std. 955 μs)
</td>

<td>
    <b>3.40 ms </b>
    (std. 8.50 ms)
</td>

</tr>
<tr></tr><tr>

<td>

[**foreach**](/benchmarks/array-iteration/foreach.js)

```javascript
array.forEach(v => {})
```

</td>

<td>
    <b>60 μs </b>
    (std. 155 μs)
</td>

<td>
    <b>383 μs </b>
    (std. 850 μs)
</td>

<td>
    <b>3.30 ms </b>
    (std. 8.00 ms)
</td>

</tr>
<tr></tr><tr>

<td>

[**for in**](/benchmarks/array-iteration/for-in.js)

```javascript

```

</td>

<td>
    <b>10 μs </b>
    (std. 32 μs)
</td>

<td>
    <b>8 μs </b>
    (std. 5 μs)
</td>

<td>
    <b>9 μs </b>
    (std. 5 μs)
</td>

</tr>
<tr></tr><tr>

<td>

[**for**](/benchmarks/array-iteration/for.js)

```javascript
for (let i = 0; i < array.length; i++) {}
```

</td>

<td>
    <b>43 μs </b>
    (std. 70 μs)
</td>

<td>
    <b>334 μs </b>
    (std. 461 μs)
</td>

<td>
    <b>2.62 ms </b>
    (std. 228 μs)
</td>

</tr>
<tr></tr><tr>

<td>

[**for of**](/benchmarks/array-iteration/for-of.js)

```javascript
for (const v of array) {}
```

</td>

<td>
    <b>82 μs </b>
    (std. 211 μs)
</td>

<td>
    <b>602 μs </b>
    (std. 658 μs)
</td>

<td>
    <b>5.22 ms </b>
    (std. 650 μs)
</td>

</tr>
<tr></tr><tr>

<td>

[**map**](/benchmarks/array-iteration/map.js)

```javascript
array.map(v => {})
```

</td>

<td>
    <b>187 μs </b>
    (std. 192 μs)
</td>

<td>
    <b>1.50 ms </b>
    (std. 878 μs)
</td>

<td>
    <b>15.01 ms </b>
    (std. 8.77 ms)
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
<b>Measured iterations: </b> 1000
</sub>
<br>
<sub>
system
<br>
<b>Node: </b> v19.8.1
<br>
<b>CPU: </b>Intel(R) Core(TM) i7-5820K CPU @ 3.30GHz, 3900 MHz (12)
</sub>

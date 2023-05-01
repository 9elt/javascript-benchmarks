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
    <b>41 μs </b>
    (std. 0 μs, o. 9%)
</td>

<td>
    <b>314 μs </b>
    (std. 0 μs, o. 28%)
</td>

<td>
    <b>2.60 ms </b>
    (std. 30 μs, o. 4%)
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
    <b>41 μs </b>
    (std. 0 μs, o. 14%)
</td>

<td>
    <b>314 μs </b>
    (std. 0 μs, o. 21%)
</td>

<td>
    <b>2.58 ms </b>
    (std. 2 μs, o. 16%)
</td>

</tr>
<tr></tr><tr>

<td>

[**for in**](/benchmarks/array-iteration/for-in.js)

```javascript
// removed... too slow
```

</td>

<td>
    <b>9 μs </b>
    (std. 0 μs, o. 3%)
</td>

<td>
    <b>7 μs </b>
    (std. 0 μs, o. 25%)
</td>

<td>
    <b>8 μs </b>
    (std. 0 μs, o. 2%)
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
    <b>42 μs </b>
    (std. 0 μs, o. 19%)
</td>

<td>
    <b>267 μs </b>
    (std. 0 μs, o. 34%)
</td>

<td>
    <b>2.58 ms </b>
    (std. 4 μs, o. 14%)
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
    <b>83 μs </b>
    (std. 0 μs, o. 4%)
</td>

<td>
    <b>816 μs </b>
    (std. 63 μs, o. 0%)
</td>

<td>
    <b>5.16 ms </b>
    (std. 10 μs, o. 4%)
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
    <b>193 μs </b>
    (std. 18 μs, o. 2%)
</td>

<td>
    <b>1.52 ms </b>
    (std. 6 μs, o. 25%)
</td>

<td>
    <b>15.34 ms </b>
    (std. 174 μs, o. 8%)
</td>

</tr>

</tbody>
</table>


### Chart

<img src=".data/chart.svg" width="100%"/>

<sub>
config
<br>
<b>Normal Distribution Samples: </b> 871 / 1000
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

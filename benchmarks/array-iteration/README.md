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
    (std. 0 μs)
</td>

<td>
    <b>266 μs </b>
    (std. 0 μs)
</td>

<td>
    <b>2.60 ms </b>
    (std. 24 μs)
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
    (std. 0 μs)
</td>

<td>
    <b>314 μs </b>
    (std. 0 μs)
</td>

<td>
    <b>2.58 ms </b>
    (std. 13 μs)
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
    <b>8 μs </b>
    (std. 6 μs)
</td>

<td>
    <b>8 μs </b>
    (std. 1 μs)
</td>

<td>
    <b>8 μs </b>
    (std. 6 μs)
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
    <b>37 μs </b>
    (std. 1 μs)
</td>

<td>
    <b>266 μs </b>
    (std. 0 μs)
</td>

<td>
    <b>2.59 ms </b>
    (std. 18 μs)
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
    (std. 0 μs)
</td>

<td>
    <b>584 μs </b>
    (std. 51 μs)
</td>

<td>
    <b>5.19 ms </b>
    (std. 46 μs)
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
    <b>164 μs </b>
    (std. 16 μs)
</td>

<td>
    <b>1.52 ms </b>
    (std. 5 μs)
</td>

<td>
    <b>15.27 ms </b>
    (std. 63 μs)
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

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
    (std. 167 μs)
</td>

<td>
    <b>390 μs </b>
    (std. 930 μs)
</td>

<td>
    <b>3.36 ms </b>
    (std. 8.66 ms)
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
    <b>53 μs </b>
    (std. 140 μs)
</td>

<td>
    <b>330 μs </b>
    (std. 705 μs)
</td>

<td>
    <b>3.25 ms </b>
    (std. 7.34 ms)
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
    (std. 27 μs)
</td>

<td>
    <b>7 μs </b>
    (std. 5 μs)
</td>

<td>
    <b>7 μs </b>
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
    <b>49 μs </b>
    (std. 77 μs)
</td>

<td>
    <b>334 μs </b>
    (std. 369 μs)
</td>

<td>
    <b>2.91 ms </b>
    (std. 639 μs)
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
    <b>94 μs </b>
    (std. 238 μs)
</td>

<td>
    <b>587 μs </b>
    (std. 697 μs)
</td>

<td>
    <b>5.26 ms </b>
    (std. 741 μs)
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
    <b>209 μs </b>
    (std. 186 μs)
</td>

<td>
    <b>1.57 ms </b>
    (std. 1.15 ms)
</td>

<td>
    <b>14.94 ms </b>
    (std. 7.87 ms)
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

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
    <b>411 μs </b>
    (std. 1.15 ms)
</td>

<td>
    <b>3.23 ms </b>
    (std. 8.93 ms)
</td>

<td>
    <b>22.37 ms </b>
    (std. 62.46 ms)
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
    <b>402 μs </b>
    (std. 1.10 ms)
</td>

<td>
    <b>3.01 ms </b>
    (std. 7.98 ms)
</td>

<td>
    <b>21.69 ms </b>
    (std. 60.98 ms)
</td>

</tr>
<tr></tr><tr>

<td>

[**for in**](/benchmarks/array-iteration/for-in.js)

```javascript
for (const i in array) {}
```

</td>

<td>
    <b>11.97 ms </b>
    (std. 1.23 ms)
</td>

<td>
    <b>106.58 ms </b>
    (std. 2.09 ms)
</td>

<td>
    <b>1.04 s </b>
    (std. 5.07 ms)
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
    <b>403 μs </b>
    (std. 889 μs)
</td>

<td>
    <b>1.76 ms </b>
    (std. 1.12 ms)
</td>

<td>
    <b>13.59 ms </b>
    (std. 1.78 ms)
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
    <b>605 μs </b>
    (std. 1.38 ms)
</td>

<td>
    <b>2.93 ms </b>
    (std. 1.81 ms)
</td>

<td>
    <b>26.60 ms </b>
    (std. 3.26 ms)
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
    <b>1.52 ms </b>
    (std. 1.71 ms)
</td>

<td>
    <b>8.98 ms </b>
    (std. 7.73 ms)
</td>

<td>
    <b>84.74 ms </b>
    (std. 60.03 ms)
</td>

</tr>

</tbody>
</table>


### Chart

<img src=".data/chart.svg" width="100%"/>

<sub>
config
<br>
<b>Normal Distribution Samples: </b> 100
<br>
<b>Measured iterations: </b> 5000
</sub>
<br>
<sub>
system
<br>
<b>Node: </b> v19.8.1
<br>
<b>CPU: </b>Intel(R) Core(TM) i7-5820K CPU @ 3.30GHz, 3900 MHz (12)
</sub>

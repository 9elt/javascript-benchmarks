# Array iteration
Comparing different ways of iterating arrays



## Results

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
    <b>41 μs </b><br>
    (std. 0 μs, o. 6%)
</td>

<td>
    <b>266 μs </b><br>
    (std. 0 μs, o. 10%)
</td>

<td>
    <b>2.58 ms </b><br>
    (std. 3 μs, o. 14%)
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
    <b>35 μs </b><br>
    (std. 0 μs, o. 12%)
</td>

<td>
    <b>314 μs </b><br>
    (std. 0 μs, o. 34%)
</td>

<td>
    <b>2.58 ms </b><br>
    (std. 8 μs, o. 12%)
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
    <b>7 μs </b><br>
    (std. 0 μs, o. 4%)
</td>

<td>
    <b>6 μs </b><br>
    (std. 0 μs, o. 4%)
</td>

<td>
    <b>8 μs </b><br>
    (std. 0 μs, o. 8%)
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
    <b>42 μs </b><br>
    (std. 0 μs, o. 14%)
</td>

<td>
    <b>267 μs </b><br>
    (std. 0 μs, o. 31%)
</td>

<td>
    <b>2.58 ms </b><br>
    (std. 8 μs, o. 14%)
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
    <b>70 μs </b><br>
    (std. 0 μs, o. 3%)
</td>

<td>
    <b>586 μs </b><br>
    (std. 49 μs, o. 0%)
</td>

<td>
    <b>5.15 ms </b><br>
    (std. 2 μs, o. 18%)
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
    <b>165 μs </b><br>
    (std. 17 μs, o. 2%)
</td>

<td>
    <b>1.51 ms </b><br>
    (std. 4 μs, o. 25%)
</td>

<td>
    <b>15.45 ms </b><br>
    (std. 250 μs, o. 12%)
</td>

</tr>

</tbody>
</table>

**std.** standard deviation, **o.** outliers 

## Chart

<img src=".data/chart.svg" width="100%"/>

## Metadata

#### benchmark

<sup>normal distrubution is calculated without outliers</sup>
<br>
<b>Normal distribution samples: </b> 1000
<br>
<b>Average outliers percentage: </b> 12%
<br><br>
<sup>results are measured over multiple iterations of a code snippet</sup>
<br>
<b>Result measured over: </b> 1000 iterations

#### system

<b>Node: </b> v19.8.1
<br>
<b>CPU: </b> Intel(R) Core(TM) i7-5820K CPU @ 3.30GHz, 3900 MHz (12)

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
    <b>42 μs </b><br>
    (std. 0 μs, o. 10%)
</td>

<td>
    <b>301 μs </b><br>
    (std. 22 μs, o. 1%)
</td>

<td>
    <b>2.61 ms </b><br>
    (std. 61 μs, o. 14%)
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
    <b>42 μs </b><br>
    (std. 0 μs, o. 11%)
</td>

<td>
    <b>280 μs </b><br>
    (std. 22 μs, o. 1%)
</td>

<td>
    <b>2.58 ms </b><br>
    (std. 1 μs, o. 14%)
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
    <b>9 μs </b><br>
    (std. 0 μs, o. 6%)
</td>

<td>
    <b>5 μs </b><br>
    (std. 3 μs, o. 1%)
</td>

<td>
    <b>8 μs </b><br>
    (std. 2 μs, o. 2%)
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
    <b>43 μs </b><br>
    (std. 0 μs, o. 37%)
</td>

<td>
    <b>269 μs </b><br>
    (std. 4 μs, o. 10%)
</td>

<td>
    <b>2.59 ms </b><br>
    (std. 12 μs, o. 23%)
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
    <b>77 μs </b><br>
    (std. 0 μs, o. 14%)
</td>

<td>
    <b>579 μs </b><br>
    (std. 54 μs, o. 1%)
</td>

<td>
    <b>5.20 ms </b><br>
    (std. 71 μs, o. 7%)
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
    <b>189 μs </b><br>
    (std. 22 μs, o. 2%)
</td>

<td>
    <b>1.41 ms </b><br>
    (std. 21 μs, o. 16%)
</td>

<td>
    <b>14.14 ms </b><br>
    (std. 281 μs, o. 10%)
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
<b>Average outliers percentage: </b> 10%
<br><br>
<sup>results are measured over multiple iterations of a code snippet</sup>
<br>
<b>Result measured over: </b> 1000 iterations

#### system

<b>Node: </b> v19.8.1
<br>
<b>CPU: </b> Intel(R) Core(TM) i7-5820K CPU @ 3.30GHz, 3900 MHz (12)

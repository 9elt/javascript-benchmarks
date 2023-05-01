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
    (std. 0 μs, o. 4%)
</td>

<td>
    <b>289 μs </b><br>
    (std. 24 μs, o. 1%)
</td>

<td>
    <b>2.58 ms </b><br>
    (std. 11 μs, o. 6%)
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
    <b>41 μs </b><br>
    (std. 0 μs, o. 17%)
</td>

<td>
    <b>315 μs </b><br>
    (std. 1 μs, o. 15%)
</td>

<td>
    <b>2.58 ms </b><br>
    (std. 12 μs, o. 17%)
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
    (std. 0 μs, o. 3%)
</td>

<td>
    <b>8 μs </b><br>
    (std. 0 μs, o. 9%)
</td>

<td>
    <b>8 μs </b><br>
    (std. 0 μs, o. 4%)
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
    <b>44 μs </b><br>
    (std. 2 μs, o. 2%)
</td>

<td>
    <b>293 μs </b><br>
    (std. 26 μs, o. 3%)
</td>

<td>
    <b>2.58 ms </b><br>
    (std. 5 μs, o. 19%)
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
    (std. 0 μs, o. 5%)
</td>

<td>
    <b>531 μs </b><br>
    (std. 0 μs, o. 23%)
</td>

<td>
    <b>5.15 ms </b><br>
    (std. 6 μs, o. 13%)
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
    <b>163 μs </b><br>
    (std. 15 μs, o. 3%)
</td>

<td>
    <b>1.52 ms </b><br>
    (std. 12 μs, o. 18%)
</td>

<td>
    <b>15.22 ms </b><br>
    (std. 56 μs, o. 16%)
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

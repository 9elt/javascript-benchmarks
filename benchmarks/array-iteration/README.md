# Array iteration
Comparing different ways of iterating arrays



## Results

<table>
<thead>
<tr>
<th>tested code</th>
<th><a href=".code/simple.js">simple</a></th>
<th><a href=".code/realistic.js">realistic</a></th>
<th><a href=".code/edge-case.js">edge case</a></th>
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
    (std. 0 μs, o. 11%)
</td>

<td>
    <b>317 μs </b><br>
    (std. 0 μs, o. 40%)
</td>

<td>
    <b>2.59 ms </b><br>
    (std. 22 μs, o. 13%)
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
    (std. 0 μs, o. 8%)
</td>

<td>
    <b>314 μs </b><br>
    (std. 0 μs, o. 27%)
</td>

<td>
    <b>2.59 ms </b><br>
    (std. 26 μs, o. 17%)
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
    <b>6 μs </b><br>
    (std. 4 μs, o. 1%)
</td>

<td>
    <b>7 μs </b><br>
    (std. 0 μs, o. 8%)
</td>

<td>
    <b>8 μs </b><br>
    (std. 0 μs, o. 14%)
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
    <b>40 μs </b><br>
    (std. 3 μs, o. 10%)
</td>

<td>
    <b>268 μs </b><br>
    (std. 3 μs, o. 15%)
</td>

<td>
    <b>2.65 ms </b><br>
    (std. 123 μs, o. 16%)
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
    <b>76 μs </b><br>
    (std. 0 μs, o. 9%)
</td>

<td>
    <b>583 μs </b><br>
    (std. 66 μs, o. 4%)
</td>

<td>
    <b>5.24 ms </b><br>
    (std. 98 μs, o. 8%)
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
    <b>158 μs </b><br>
    (std. 17 μs, o. 3%)
</td>

<td>
    <b>1.43 ms </b><br>
    (std. 41 μs, o. 12%)
</td>

<td>
    <b>14.27 ms </b><br>
    (std. 298 μs, o. 7%)
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

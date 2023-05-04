# Array iteration
Comparing different ways of iterating arrays

> related: 

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

[**filter**](/benchmarks//array-iteration/filter.js)

```javascript
array.filter(v => {})
```

</td>

<td>
    <b>42 μs </b><br>
    (std. 0 μs, o. 10%)
</td>

<td>
    <b>314 μs </b><br>
    (std. 0 μs, o. 34%)
</td>

<td>
    <b>2.58 ms </b><br>
    (std. 5 μs, o. 11%)
</td>

</tr>
<tr></tr><tr>

<td>

[**foreach**](/benchmarks//array-iteration/foreach.js)

```javascript
array.forEach(v => {})
```

</td>

<td>
    <b>35 μs </b><br>
    (std. 0 μs, o. 7%)
</td>

<td>
    <b>266 μs </b><br>
    (std. 0 μs, o. 17%)
</td>

<td>
    <b>2.58 ms </b><br>
    (std. 2 μs, o. 19%)
</td>

</tr>
<tr></tr><tr>

<td>

[**for in**](/benchmarks//array-iteration/for-in.js)

```javascript
// removed... too slow
```

</td>

<td>
    <b>8 μs </b><br>
    (std. 0 μs, o. 7%)
</td>

<td>
    <b>8 μs </b><br>
    (std. 0 μs, o. 9%)
</td>

<td>
    <b>8 μs </b><br>
    (std. 0 μs, o. 12%)
</td>

</tr>
<tr></tr><tr>

<td>

[**for**](/benchmarks//array-iteration/for.js)

```javascript
for (let i = 0; i < array.length; i++) {}
```

</td>

<td>
    <b>43 μs </b><br>
    (std. 0 μs, o. 15%)
</td>

<td>
    <b>315 μs </b><br>
    (std. 0 μs, o. 16%)
</td>

<td>
    <b>2.58 ms </b><br>
    (std. 2 μs, o. 14%)
</td>

</tr>
<tr></tr><tr>

<td>

[**for of**](/benchmarks//array-iteration/for-of.js)

```javascript
for (const v of array) {}
```

</td>

<td>
    <b>65 μs </b><br>
    (std. 0 μs, o. 6%)
</td>

<td>
    <b>527 μs </b><br>
    (std. 0 μs, o. 20%)
</td>

<td>
    <b>5.16 ms </b><br>
    (std. 10 μs, o. 8%)
</td>

</tr>
<tr></tr><tr>

<td>

[**map**](/benchmarks//array-iteration/map.js)

```javascript
array.map(v => {})
```

</td>

<td>
    <b>184 μs </b><br>
    (std. 18 μs, o. 1%)
</td>

<td>
    <b>1.39 ms </b><br>
    (std. 12 μs, o. 19%)
</td>

<td>
    <b>14.01 ms </b><br>
    (std. 47 μs, o. 6%)
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
<b>Average outliers percentage: </b> 13%
<br><br>
<sup>results are measured over multiple iterations of a code snippet</sup>
<br>
<b>Result measured over: </b> 1000 iterations

#### system

<b>Node: </b> v19.8.1
<br>
<b>CPU: </b> Intel(R) Core(TM) i7-5820K CPU @ 3.30GHz, 3900 MHz (12)


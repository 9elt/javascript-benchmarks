# Array concatenation
Comparing ways to concatenate arrays



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

[**concat**](/benchmarks/array-concatenation/concat.js)

```javascript
arr_1.concat(arr_2)
```

</td>

<td>
    <b>3.86 ms </b><br>
    (std. 12 μs, o. 7%)
</td>

<td>
    <b>12.67 ms </b><br>
    (std. 27 μs, o. 5%)
</td>

<td>
    <b>64.01 ms </b><br>
    (std. 574 μs, o. 13%)
</td>

</tr>
<tr></tr><tr>

<td>

[**mutation**](/benchmarks/array-concatenation/mutation.js)

```javascript
for (let i = 0; i < arr_2.length; i++) {
    arr_1.push(arr_2[i])
}
```

</td>

<td>
    <b>7 μs </b><br>
    (std. 0 μs, o. 4%)
</td>

<td>
    <b>7 μs </b><br>
    (std. 0 μs, o. 4%)
</td>

<td>
    <b>7 μs </b><br>
    (std. 0 μs, o. 6%)
</td>

</tr>
<tr></tr><tr>

<td>

[**spread**](/benchmarks/array-concatenation/spread.js)

```javascript
[...arr_1, ...arr_2]
```

</td>

<td>
    <b>2.47 ms </b><br>
    (std. 16 μs, o. 15%)
</td>

<td>
    <b>8.68 ms </b><br>
    (std. 82 μs, o. 13%)
</td>

<td>
    <b>55.84 ms </b><br>
    (std. 66 μs, o. 4%)
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
<b>Average outliers percentage: </b> 8%
<br><br>
<sup>results are measured over multiple iterations of a code snippet</sup>
<br>
<b>Result measured over: </b> 10000 iterations

#### system

<b>Node: </b> v19.8.1
<br>
<b>CPU: </b> Intel(R) Core(TM) i7-5820K CPU @ 3.30GHz, 3900 MHz (12)

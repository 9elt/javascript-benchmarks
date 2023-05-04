# Array concatenation
Comparing ways to concatenate arrays

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

[**concat**](/benchmarks//array-concatenation/concat.js)

```javascript
arr_1.concat(arr_2)
```

</td>

<td>
    <b>4.06 ms </b><br>
    (std. 140 μs, o. 8%)
</td>

<td>
    <b>13.97 ms </b><br>
    (std. 718 μs, o. 7%)
</td>

<td>
    <b>63.32 ms </b><br>
    (std. 194 μs, o. 19%)
</td>

</tr>
<tr></tr><tr>

<td>

[**mutation**](/benchmarks//array-concatenation/mutation.js)

```javascript
for (let i = 0; i < arr_2.length; i++) {
    arr_1.push(arr_2[i])
}
```

</td>

<td>
    <b>7 μs </b><br>
    (std. 0 μs, o. 6%)
</td>

<td>
    <b>7 μs </b><br>
    (std. 0 μs, o. 4%)
</td>

<td>
    <b>7 μs </b><br>
    (std. 0 μs, o. 8%)
</td>

</tr>
<tr></tr><tr>

<td>

[**spread**](/benchmarks//array-concatenation/spread.js)

```javascript
[...arr_1, ...arr_2]
```

</td>

<td>
    <b>2.50 ms </b><br>
    (std. 21 μs, o. 10%)
</td>

<td>
    <b>8.88 ms </b><br>
    (std. 42 μs, o. 3%)
</td>

<td>
    <b>56.89 ms </b><br>
    (std. 116 μs, o. 4%)
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


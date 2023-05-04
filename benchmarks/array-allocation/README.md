# Array allocation
Array dynamic allocation vs pre-allocation



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

[**dynamic**](/benchmarks/array-allocation/dynamic.js)

```javascript
let array = [];

for (let i = 0; i < size; i++) {
    array.push(i)
}
```

</td>

<td>
    <b>390 μs </b><br>
    (std. 35 μs, o. 1%)
</td>

<td>
    <b>4.54 ms </b><br>
    (std. 394 μs, o. 1%)
</td>

<td>
    <b>44.47 ms </b><br>
    (std. 1.03 ms, o. 9%)
</td>

</tr>
<tr></tr><tr>

<td>

[**pre allocated**](/benchmarks/array-allocation/pre-allocated.js)

```javascript
let array = Array(size);

for (let i = 0; i < size; i++) {
    array[i] = i
}
```

</td>

<td>
    <b>139 μs </b><br>
    (std. 18 μs, o. 1%)
</td>

<td>
    <b>1.01 ms </b><br>
    (std. 17 μs, o. 24%)
</td>

<td>
    <b>9.90 ms </b><br>
    (std. 15 μs, o. 3%)
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
<b>Average outliers percentage: </b> 6%
<br><br>
<sup>results are measured over multiple iterations of a code snippet</sup>
<br>
<b>Result measured over: </b> 1000 iterations

#### system

<b>Node: </b> v19.8.1
<br>
<b>CPU: </b> Intel(R) Core(TM) i7-5820K CPU @ 3.30GHz, 3900 MHz (12)


# Object values mapping
Mapping object values

> related: [**Object keys mapping**](/benchmarks/object-keys-mapping), [**Array iteration**](/benchmarks/array-iteration)

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

[**for key**](/benchmarks/object-values-mapping/for-key.js)

```javascript
let values = [];

for (const key in object) {
    values.push(object[key])
}
```

</td>

<td>
    <b>503 μs </b><br>
    (std. 39 μs, o. 5%)
</td>

<td>
    <b>703 μs </b><br>
    (std. 77 μs, o. 2%)
</td>

<td>
    <b>2.04 ms </b><br>
    (std. 73 μs, o. 12%)
</td>

</tr>
<tr></tr><tr>

<td>

[**object values**](/benchmarks/object-values-mapping/object-values.js)

```javascript
let values = Object.values(object)
```

</td>

<td>
    <b>1.48 ms </b><br>
    (std. 130 μs, o. 4%)
</td>

<td>
    <b>1.85 ms </b><br>
    (std. 161 μs, o. 4%)
</td>

<td>
    <b>3.53 ms </b><br>
    (std. 84 μs, o. 16%)
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
<b>Average outliers percentage: </b> 7%
<br><br>
<sup>results are measured over multiple iterations of a code snippet</sup>
<br>
<b>Result measured over: </b> 10000 iterations

#### system

<b>Node: </b> v19.8.1
<br>
<b>CPU: </b> Intel(R) Core(TM) i7-5820K CPU @ 3.30GHz, 3900 MHz (12)

# Object values mapping
Mapping object values

> related: [**Object keys mapping**](/benchmarks/object-keys-mapping), [**Array iteration**](/benchmarks/array-iteration)

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

[**for key**](/benchmarks/object-values-mapping/for-key.js)

```javascript
let values = [];

for (const key in object) {
    values.push(object[key])
}
```

</td>

<td>
    <b>467 μs </b><br>
    (std. 42 μs, o. 2%)
</td>

<td>
    <b>777 μs </b><br>
    (std. 73 μs, o. 8%)
</td>

<td>
    <b>1.95 ms </b><br>
    (std. 41 μs, o. 18%)
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
    <b>1.36 ms </b><br>
    (std. 30 μs, o. 8%)
</td>

<td>
    <b>1.78 ms </b><br>
    (std. 32 μs, o. 10%)
</td>

<td>
    <b>3.45 ms </b><br>
    (std. 59 μs, o. 12%)
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
<b>Result measured over: </b> 10000 iterations

#### system

<b>Node: </b> v19.8.1
<br>
<b>CPU: </b> Intel(R) Core(TM) i7-5820K CPU @ 3.30GHz, 3900 MHz (12)

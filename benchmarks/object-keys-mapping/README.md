# Object keys mapping
Mapping object keys

> related: [**Object values mapping**](/benchmarks/object-values-mapping)

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

[**for key**](/benchmarks//object-keys-mapping/for-key.js)

```javascript
let keys = []

for (const key in object) {
    keys.push(key)
}
```

</td>

<td>
    <b>293 μs </b><br>
    (std. 12 μs, o. 21%)
</td>

<td>
    <b>287 μs </b><br>
    (std. 26 μs, o. 2%)
</td>

<td>
    <b>451 μs </b><br>
    (std. 42 μs, o. 1%)
</td>

</tr>
<tr></tr><tr>

<td>

[**object keys**](/benchmarks//object-keys-mapping/object-keys.js)

```javascript
let keys = Object.keys(object)
```

</td>

<td>
    <b>133 μs </b><br>
    (std. 19 μs, o. 6%)
</td>

<td>
    <b>111 μs </b><br>
    (std. 16 μs, o. 6%)
</td>

<td>
    <b>196 μs </b><br>
    (std. 19 μs, o. 5%)
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


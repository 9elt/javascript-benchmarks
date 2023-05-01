# Object values_mapping
Mapping object values

> related: [**Object keys-mapping**](/benchmarks/object-keys-mapping), [**Array iteration**](/benchmarks/array-iteration)

### Results table

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
    <b>598 μs </b>
    (std. 165 μs)
</td>

<td>
    <b>728 μs </b>
    (std. 189 μs)
</td>

<td>
    <b>2.12 ms </b>
    (std. 480 μs)
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
    <b>1.45 ms </b>
    (std. 151 μs)
</td>

<td>
    <b>1.93 ms </b>
    (std. 355 μs)
</td>

<td>
    <b>3.60 ms </b>
    (std. 354 μs)
</td>

</tr>

</tbody>
</table>


### Chart

<img src=".data/chart.svg" width="100%"/>

<sub>
config
<br>
<b>Normal Distribution Samples: </b> 1000
<br>
<b>Measured iterations: </b> 10000
</sub>
<br>
<sub>
system
<br>
<b>Node: </b> v19.8.1
<br>
<b>CPU: </b>Intel(R) Core(TM) i7-5820K CPU @ 3.30GHz, 3900 MHz (12)
</sub>

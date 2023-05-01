# Object values mapping
Mapping object values

> related: [**Object keys mapping**](/benchmarks/object-keys-mapping), [**Array iteration**](/benchmarks/array-iteration)

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
    <b>551 μs </b>
    (std. 129 μs)
</td>

<td>
    <b>691 μs </b>
    (std. 149 μs)
</td>

<td>
    <b>1.95 ms </b>
    (std. 259 μs)
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
    (std. 137 μs)
</td>

<td>
    <b>1.85 ms </b>
    (std. 230 μs)
</td>

<td>
    <b>3.68 ms </b>
    (std. 482 μs)
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

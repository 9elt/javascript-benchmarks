# Test
A test benchmark

> related: [**Test**](/benchmarks/test), [**Test2**](/benchmarks/test2)

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

[**snippet 1**](/benchmarks/test/snippet-1.js)

```javascript
for (let i = 0; i < 1_000; i++) {
    JSON.stringify(object)
}
```

</td>

<td>
    <b>422 μs </b>
    (std. 343 μs)
</td>

<td>
    <b>715 μs </b>
    (std. 345 μs)
</td>

<td>
    <b>1.97 ms </b>
    (std. 303 μs)
</td>

</tr>
<tr></tr><tr>

<td>

[**snippet 2**](/benchmarks/test/snippet-2.js)

```javascript
for (let i = 0; i < 1_000; i++) {
    JSON.parse(json)
    JSON.parse(json)
    JSON.parse(json)
    JSON.parse(json)
    JSON.parse(json)
}
```

</td>

<td>
    <b>2.12 ms </b>
    (std. 318 μs)
</td>

<td>
    <b>3.43 ms </b>
    (std. 384 μs)
</td>

<td>
    <b>11.04 ms </b>
    (std. 528 μs)
</td>

</tr>

</tbody>
</table>


### Chart

<img src=".data/chart.svg" width="100%"/>

<sub>
config
<br>
<b>Normal Distribution Samples: </b> 10
</sub>
<br>
<sub>
system
<br>
<b>Node: </b> v19.8.1
<br>
<b>CPU: </b>Intel(R) Core(TM) i7-5820K CPU @ 3.30GHz, 3900 MHz (12)
</sub>

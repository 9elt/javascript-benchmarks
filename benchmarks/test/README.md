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
    <b>393 μs </b>
    (std. 257 μs)
</td>

<td>
    <b>678 μs </b>
    (std. 292 μs)
</td>

<td>
    <b>1.90 ms </b>
    (std. 230 μs)
</td>

</tr>,
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
    <b>2.15 ms </b>
    (std. 280 μs)
</td>

<td>
    <b>3.37 ms </b>
    (std. 313 μs)
</td>

<td>
    <b>12.95 ms </b>
    (std. 385 μs)
</td>

</tr>

</tbody>
</table>


### Chart

![chart](.data/chart.svg)

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

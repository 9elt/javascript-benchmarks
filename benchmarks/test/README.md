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
    <b>401 μs </b>
    (std. 277 μs)
</td>

<td>
    <b>666 μs </b>
    (std. 226 μs)
</td>

<td>
    <b>1.90 ms </b>
    (std. 251 μs)
</td>

</tr>
<tr></tr><tr>

<td>

[**snippet 2**](/benchmarks/test/snippet-2.js)

```javascript
for (let i = 0; i < 1_000; i++) {
    JSON.parse(json)
}
```

</td>

<td>
    <b>489 μs </b>
    (std. 293 μs)
</td>

<td>
    <b>731 μs </b>
    (std. 282 μs)
</td>

<td>
    <b>2.40 ms </b>
    (std. 292 μs)
</td>

</tr>
<tr></tr><tr>

<td>

[**snippet 3**](/benchmarks/test/snippet-3.js)

```javascript
for (let i = 0; i < 1_000; i++) {
    Object.values(object)
}
```

</td>

<td>
    <b>243 μs </b>
    (std. 286 μs)
</td>

<td>
    <b>384 μs </b>
    (std. 414 μs)
</td>

<td>
    <b>395 μs </b>
    (std. 334 μs)
</td>

</tr>
<tr></tr><tr>

<td>

[**snippet 4**](/benchmarks/test/snippet-4.js)

```javascript
for (let i = 0; i < 1_000; i++) {
    Object.keys(object)
}
```

</td>

<td>
    <b>118 μs </b>
    (std. 255 μs)
</td>

<td>
    <b>123 μs </b>
    (std. 265 μs)
</td>

<td>
    <b>113 μs </b>
    (std. 217 μs)
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

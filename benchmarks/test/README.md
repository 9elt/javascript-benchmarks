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
    <b>420 μs </b>
    (std. 337 μs)
</td>

<td>
    <b>698 μs </b>
    (std. 300 μs)
</td>

<td>
    <b>1.95 ms </b>
    (std. 269 μs)
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
    <b>499 μs </b>
    (std. 300 μs)
</td>

<td>
    <b>771 μs </b>
    (std. 350 μs)
</td>

<td>
    <b>2.55 ms </b>
    (std. 378 μs)
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
    <b>283 μs </b>
    (std. 328 μs)
</td>

<td>
    <b>380 μs </b>
    (std. 382 μs)
</td>

<td>
    <b>384 μs </b>
    (std. 328 μs)
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
    <b>131 μs </b>
    (std. 293 μs)
</td>

<td>
    <b>135 μs </b>
    (std. 295 μs)
</td>

<td>
    <b>141 μs </b>
    (std. 274 μs)
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

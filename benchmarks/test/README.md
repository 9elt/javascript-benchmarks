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
    <b>427 μs </b>
    (std. 321 μs)
</td>

<td>
    <b>789 μs </b>
    (std. 352 μs)
</td>

<td>
    <b>2.11 ms </b>
    (std. 398 μs)
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
    <b>564 μs </b>
    (std. 445 μs)
</td>

<td>
    <b>811 μs </b>
    (std. 328 μs)
</td>

<td>
    <b>2.57 ms </b>
    (std. 307 μs)
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
    <b>316 μs </b>
    (std. 388 μs)
</td>

<td>
    <b>330 μs </b>
    (std. 297 μs)
</td>

<td>
    <b>381 μs </b>
    (std. 292 μs)
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
    <b>145 μs </b>
    (std. 336 μs)
</td>

<td>
    <b>137 μs </b>
    (std. 288 μs)
</td>

<td>
    <b>135 μs </b>
    (std. 270 μs)
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

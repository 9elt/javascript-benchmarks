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
    <b>405 μs </b>
    (std. 287 μs)
</td>

<td>
    <b>720 μs </b>
    (std. 308 μs)
</td>

<td>
    <b>2.16 ms </b>
    (std. 369 μs)
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
    <b>520 μs </b>
    (std. 301 μs)
</td>

<td>
    <b>1.76 ms </b>
    (std. 626 μs)
</td>

<td>
    <b>2.71 ms </b>
    (std. 570 μs)
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
    <b>477 μs </b>
    (std. 524 μs)
</td>

<td>
    <b>333 μs </b>
    (std. 325 μs)
</td>

<td>
    <b>421 μs </b>
    (std. 353 μs)
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
    <b>140 μs </b>
    (std. 323 μs)
</td>

<td>
    <b>136 μs </b>
    (std. 276 μs)
</td>

<td>
    <b>145 μs </b>
    (std. 292 μs)
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

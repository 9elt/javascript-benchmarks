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
    <b>421 μs </b>
    (std. 319 μs)
</td>

<td>
    <b>709 μs </b>
    (std. 260 μs)
</td>

<td>
    <b>1.99 ms </b>
    (std. 365 μs)
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
    <b>515 μs </b>
    (std. 320 μs)
</td>

<td>
    <b>850 μs </b>
    (std. 398 μs)
</td>

<td>
    <b>2.53 ms </b>
    (std. 356 μs)
</td>

</tr>
<tr></tr><tr>

<td>

[**snippet 3**](/benchmarks/test/snippet-3.js)

```javascript
for (let i = 0; i < 1_000; i++) {
    JSON.parse(json)
}
```

</td>

<td>
    <b>486 μs </b>
    (std. 267 μs)
</td>

<td>
    <b>980 μs </b>
    (std. 459 μs)
</td>

<td>
    <b>2.50 ms </b>
    (std. 355 μs)
</td>

</tr>
<tr></tr><tr>

<td>

[**snippet 4**](/benchmarks/test/snippet-4.js)

```javascript
for (let i = 0; i < 1_000; i++) {
    JSON.parse(json)
}
```

</td>

<td>
    <b>506 μs </b>
    (std. 272 μs)
</td>

<td>
    <b>782 μs </b>
    (std. 303 μs)
</td>

<td>
    <b>2.45 ms </b>
    (std. 381 μs)
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

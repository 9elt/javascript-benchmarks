# Array iteration
Comparing different ways of iterating arrays

> related: [**undefined**](/benchmarks/)

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

[**filter**](/benchmarks/array-iteration/filter.js)

```javascript
array.filter(v => {})
```

</td>

<td>
    <b>2 μs </b>
    (std. 4 μs)
</td>

<td>
    <b>10 μs </b>
    (std. 5 μs)
</td>

<td>
    <b>91 μs </b>
    (std. 10 μs)
</td>

</tr>
<tr></tr><tr>

<td>

[**foreach**](/benchmarks/array-iteration/foreach.js)

```javascript
array.forEach(v => {})
```

</td>

<td>
    <b>3 μs </b>
    (std. 24 μs)
</td>

<td>
    <b>9 μs </b>
    (std. 4 μs)
</td>

<td>
    <b>95 μs </b>
    (std. 11 μs)
</td>

</tr>
<tr></tr><tr>

<td>

[**for in**](/benchmarks/array-iteration/for-in.js)

```javascript
for (const i in array) {}
```

</td>

<td>
    <b>5 μs </b>
    (std. 29 μs)
</td>

<td>
    <b>28 μs </b>
    (std. 15 μs)
</td>

<td>
    <b>263 μs </b>
    (std. 34 μs)
</td>

</tr>
<tr></tr><tr>

<td>

[**for**](/benchmarks/array-iteration/for.js)

```javascript
for (let i = 0; i < array.length; i++) {}
```

</td>

<td>
    <b>2 μs </b>
    (std. 4 μs)
</td>

<td>
    <b>9 μs </b>
    (std. 8 μs)
</td>

<td>
    <b>15 μs </b>
    (std. 33 μs)
</td>

</tr>
<tr></tr><tr>

<td>

[**for of**](/benchmarks/array-iteration/for-of.js)

```javascript
for (const v of array) {}
```

</td>

<td>
    <b>5 μs </b>
    (std. 29 μs)
</td>

<td>
    <b>15 μs </b>
    (std. 42 μs)
</td>

<td>
    <b>12 μs </b>
    (std. 50 μs)
</td>

</tr>
<tr></tr><tr>

<td>

[**map**](/benchmarks/array-iteration/map.js)

```javascript
array.map(v => {})
```

</td>

<td>
    <b>3 μs </b>
    (std. 21 μs)
</td>

<td>
    <b>12 μs </b>
    (std. 13 μs)
</td>

<td>
    <b>124 μs </b>
    (std. 25 μs)
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
</sub>
<br>
<sub>
system
<br>
<b>Node: </b> v19.8.1
<br>
<b>CPU: </b>Intel(R) Core(TM) i7-5820K CPU @ 3.30GHz, 3900 MHz (12)
</sub>

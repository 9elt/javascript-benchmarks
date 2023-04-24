## Array iteration
Comparing different ways of iterating arrays
<table><thead><tr><th>tested code</th><th>result <sub><sup>(1_000_000 times)</sup></sub></th><th>std <sub><sup>(10 samples)</sup></sub></th></tr></thead><tbody>
<tr></tr><tr><td>

[**filter**](/benchmarks/array-iteration/filter.js)

```javascript
array.filter(v => {})
```

</td><td><b>47.9 ms</b></td><td>4.0 ms</td></tr>
<tr></tr><tr><td>

[**foreach**](/benchmarks/array-iteration/foreach.js)

```javascript
array.forEach(v => {})
```

</td><td><b>46.0 ms</b></td><td>5.4 ms</td></tr>
<tr></tr><tr><td>

[**for in**](/benchmarks/array-iteration/for-in.js)

```javascript
for (const i in array) {}
```

</td><td><b>2.38 s</b></td><td>111.8 ms</td></tr>
<tr></tr><tr><td>

[**for**](/benchmarks/array-iteration/for.js)

```javascript
for (let i = 0; i < array.length; i++) {}
```

</td><td><b>36.5 ms</b></td><td>3.7 ms</td></tr>
<tr></tr><tr><td>

[**for of**](/benchmarks/array-iteration/for-of.js)

```javascript
for (const v of array) {}
```

</td><td><b>65.9 ms</b></td><td>0.8 ms</td></tr>
<tr></tr><tr><td>

[**map**](/benchmarks/array-iteration/map.js)

```javascript
array.map(v => {})
```

</td><td><b>185.2 ms</b></td><td>16.5 ms</td></tr>
</tbody></table>

related:

<sub>system<br><b>Node: </b> v19.8.1 <br><b>CPU: </b>Intel(R) Core(TM) i7-5820K CPU @ 3.30GHz, 3900 MHz (12)</sub>

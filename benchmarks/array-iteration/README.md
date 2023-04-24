## Array iteration
Comparing different ways of iterating arrays
<table><thead><tr><th>tested code</th><th>result <sub><sup>(1_000_000 times)</sup></sub></th><th>std <sub><sup>(10 samples)</sup></sub></th></tr></thead><tbody>
<tr></tr><tr><td>

[**filter**](/benchmarks/array-iteration/filter.js)

```javascript
array.filter(() => {})
```

</td><td><b>49.6 ms</b></td><td>3.0 ms</td></tr>
<tr></tr><tr><td>

[**foreach**](/benchmarks/array-iteration/foreach.js)

```javascript
array.forEach(() => {})
```

</td><td><b>49.6 ms</b></td><td>0.4 ms</td></tr>
<tr></tr><tr><td>

[**for in**](/benchmarks/array-iteration/for-in.js)

```javascript
for (const i in array) {}
```

</td><td><b>2.40 s</b></td><td>70.6 ms</td></tr>
<tr></tr><tr><td>

[**for**](/benchmarks/array-iteration/for.js)

```javascript
for (let i = 0; i < array.length; i++) {}
```

</td><td><b>41.6 ms</b></td><td>3.5 ms</td></tr>
<tr></tr><tr><td>

[**for of**](/benchmarks/array-iteration/for-of.js)

```javascript
for (const v of array) {}
```

</td><td><b>79.8 ms</b></td><td>4.1 ms</td></tr>
<tr></tr><tr><td>

[**map**](/benchmarks/array-iteration/map.js)

```javascript
array.map(() => {})
```

</td><td><b>179.1 ms</b></td><td>15.2 ms</td></tr>
</tbody></table>
<sub>system<br><b>Node: </b> v19.8.1 <br><b>CPU: </b>Intel(R) Core(TM) i7-5820K CPU @ 3.30GHz, 3900 MHz (12)</sub>

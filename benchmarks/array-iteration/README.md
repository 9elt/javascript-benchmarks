## Array iteration
Comparing array iteration methods
<table><thead><tr><th>tested code</th><th>result <sub><sup>(1_000_000 times)</sup></sub></th><th>std <sub><sup>(10 samples)</sup></sub></th></tr></thead><tbody>
<tr></tr><tr><td>

[**foreach**](/benchmarks/array-iteration/foreach.js)

```javascript
array.forEach(v => v * 2)
```

</td><td><b>347.6 ms</b></td><td>24.2 ms</td></tr>
<tr></tr><tr><td>

[**for in**](/benchmarks/array-iteration/for-in.js)

```javascript
for (const i in array) {
    array[i] * 2
}
```

</td><td><b>26.96 s</b></td><td>411.5 ms</td></tr>
<tr></tr><tr><td>

[**for**](/benchmarks/array-iteration/for.js)

```javascript
for (let i = 0; i < array.length; i++) {
    array[i] * 2
}
```

</td><td><b>309.7 ms</b></td><td>26.6 ms</td></tr>
<tr></tr><tr><td>

[**for of**](/benchmarks/array-iteration/for-of.js)

```javascript
for (const v of array) {
    v * 2
}
```

</td><td><b>1.10 s</b></td><td>43.2 ms</td></tr>
</tbody></table>
<sub>system<br><b>Node: </b> v19.8.1 <br><b>CPU: </b>Intel(R) Core(TM) i7-5820K CPU @ 3.30GHz, 3900 MHz (12)</sub>

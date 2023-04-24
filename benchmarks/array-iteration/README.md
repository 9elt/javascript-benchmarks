## Array iteration
Comparing array iteration methods
<table><thead><tr><th>tested code</th><th>result <sub><sup>(1_000_000 times)</sup></sub></th><th>std <sub><sup>(10 samples)</sup></sub></th></tr></thead><tbody>
<tr></tr><tr><td>

[**foreach**](/benchmarks//array-iteration/foreach.js)

```javascript
array.forEach(v => v * 2)
```

</td><td><b>357.5 ms</b></td><td>25.8 ms</td></tr>
<tr></tr><tr><td>

[**for in**](/benchmarks//array-iteration/for-in.js)

```javascript
for (const i in array) {
    array[i] * 2
}
```

</td><td><b>27.65 s</b></td><td>261.9 ms</td></tr>
<tr></tr><tr><td>

[**for**](/benchmarks//array-iteration/for.js)

```javascript
for (let i = 0; i < array.length; i++) {
    array[i] * 2
}
```

</td><td><b>308.3 ms</b></td><td>21.6 ms</td></tr>
<tr></tr><tr><td>

[**for of**](/benchmarks//array-iteration/for-of.js)

```javascript
for (const v of array) {
    v * 2
}
```

</td><td><b>1.13 s</b></td><td>19.2 ms</td></tr>
</tbody></table>
<sub>system<br><b>Node: </b> v19.8.1 <br><b>CPU: </b>Intel(R) Core(TM) i7-5820K CPU @ 3.30GHz, 3900 MHz (12)</sub>

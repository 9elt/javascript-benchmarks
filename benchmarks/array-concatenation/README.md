## Array concatenation
Comparing array concat method to spread operator
<table><thead><tr><th>tested code</th><th>result <sub><sup>(1_000_000 times)</sup></sub></th><th>std <sub><sup>(100 samples)</sup></sub></th></tr></thead><tbody>
<tr></tr><tr><td>

[**concat**](/benchmarks/array-concatenation/concat.js)

```javascript
arr_1.concat(arr_2)
```

</td><td><b>182.7 ms</b></td><td>15.9 ms</td></tr>
<tr></tr><tr><td>

[**mutation**](/benchmarks/array-concatenation/mutation.js)

```javascript
for (let i = 0; i < arr_2.length; i++) {
    arr_1.push(arr_2[i])
}
```

</td><td><b>59.2 ms</b></td><td>7.0 ms</td></tr>
<tr></tr><tr><td>

[**spread**](/benchmarks/array-concatenation/spread.js)

```javascript
[...arr_1, ...arr_2]
```

</td><td><b>44.4 ms</b></td><td>4.3 ms</td></tr>
</tbody></table>
<sub>system<br><b>Node: </b> v19.8.1 <br><b>CPU: </b>Intel(R) Core(TM) i7-5820K CPU @ 3.30GHz, 3900 MHz (12)</sub>

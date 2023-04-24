## Big array concatenation
Comparing array concat method to spread operator
<table><thead><tr><th>tested code</th><th>result <sub><sup>(1_000_000 times)</sup></sub></th><th>std <sub><sup>(10 samples)</sup></sub></th></tr></thead><tbody>
<tr></tr><tr><td>

[**concat**](/benchmarks/big-array-concatenation/concat.js)

```javascript
arr_1.concat(arr_2)
```

</td><td><b>453.0 ms</b></td><td>39.3 ms</td></tr>
<tr></tr><tr><td>

[**mutation**](/benchmarks/big-array-concatenation/mutation.js)

```javascript
for (let i = 0; i < arr_2.length; i++) {
    arr_1.push(arr_2[i])
}
```

</td><td><b>1.4 ms</b></td><td>1.1 ms</td></tr>
<tr></tr><tr><td>

[**spread**](/benchmarks/big-array-concatenation/spread.js)

```javascript
[...arr_1, ...arr_2]
```

</td><td><b>296.1 ms</b></td><td>23.7 ms</td></tr>
</tbody></table>

related: [**Array concatenation**](/benchmarks/array-concatenation) 

<sub>system<br><b>Node: </b> v19.8.1 <br><b>CPU: </b>Intel(R) Core(TM) i7-5820K CPU @ 3.30GHz, 3900 MHz (12)</sub>

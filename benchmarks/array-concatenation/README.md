## Array concatenation
Comparing array concat method to spread operator
<table><thead><tr><th>tested code</th><th>result <sub><sup>(1_000_000 times)</sup></sub></th><th>std <sub><sup>(100 samples)</sup></sub></th></tr></thead><tbody>
<tr></tr><tr><td>

[**concat**](/benchmarks/array-concatenation/concat.js)

```javascript
arr_1.concat(arr_2)
```

</td><td><b>195.5 ms</b></td><td>13.0 ms</td></tr>
<tr></tr><tr><td>

[**spread**](/benchmarks/array-concatenation/spread.js)

```javascript
[...arr_1, ...arr_2]
```

</td><td><b>47.9 ms</b></td><td>3.2 ms</td></tr>
</tbody></table>
<sub>system<br><b>Node: </b> v19.8.1 <br><b>CPU: </b>Intel(R) Core(TM) i7-5820K CPU @ 3.30GHz, 3900 MHz (12)</sub>

## Array methods
Comparing array iterating methods
<table><thead><tr><th>tested code</th><th>result <sub><sup>(1_000_000 times)</sup></sub></th><th>std <sub><sup>(10 samples)</sup></sub></th></tr></thead><tbody>
<tr></tr><tr><td>

[**filter**](/benchmarks/array-methods/filter.js)

```javascript
array.filter(() => true)
```

</td><td><b>322.6 ms</b></td><td>29.7 ms</td></tr>
<tr></tr><tr><td>

[**foreach**](/benchmarks/array-methods/foreach.js)

```javascript
array.forEach(v => v)
```

</td><td><b>48.7 ms</b></td><td>0.7 ms</td></tr>
<tr></tr><tr><td>

[**map**](/benchmarks/array-methods/map.js)

```javascript
array.map(v => v)
```

</td><td><b>200.4 ms</b></td><td>9.0 ms</td></tr>
</tbody></table>
<sub>system<br><b>Node: </b> v19.8.1 <br><b>CPU: </b>Intel(R) Core(TM) i7-5820K CPU @ 3.30GHz, 3900 MHz (12)</sub>

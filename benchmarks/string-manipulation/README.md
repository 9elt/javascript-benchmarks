## String manipulation
Comparing string manipulation methods
<table><thead><tr><th>tested code</th><th>result <sub><sup>(10_000_000 times)</sup></sub></th><th>std <sub><sup>(100 samples)</sup></sub></th></tr></thead><tbody>
<tr></tr><tr><td>

[**array join**](/benchmarks/string-manipulation/array-join.js)

```javascript
["_", iteration, "_"].join()
```

</td><td><b>1.70 s</b></td><td>53.1 ms</td></tr>
<tr></tr><tr><td>

[**backticks**](/benchmarks/string-manipulation/backticks.js)

```javascript
`_${iteration}_`
```

</td><td><b>378.5 ms</b></td><td>26.4 ms</td></tr>
<tr></tr><tr><td>

[**concatenation**](/benchmarks/string-manipulation/concatenation.js)

```javascript
"_" + iteration + "_"
```

</td><td><b>472.2 ms</b></td><td>30.3 ms</td></tr>
</tbody></table>
<sub>system<br><b>Node: </b> v19.8.1 <br><b>CPU: </b>Intel(R) Core(TM) i7-5820K CPU @ 3.30GHz, 3900 MHz (12)</sub>

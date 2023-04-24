## String manipulation
Comparing string manipulation methods
<table><thead><tr><th>tested code</th><th>result <sub><sup>(10_000_000 times)</sup></sub></th><th>std <sub><sup>(100 samples)</sup></sub></th></tr></thead><tbody>
<tr></tr><tr><td>

[**array join**](/benchmarks/string-manipulation/array-join.js)

```javascript
["_", iteration, "_"].join()
```

</td><td><b>1.70 s</b></td><td>66.1 ms</td></tr>
<tr></tr><tr><td>

[**backticks**](/benchmarks/string-manipulation/backticks.js)

```javascript
`_${iteration}_`
```

</td><td><b>356.0 ms</b></td><td>27.3 ms</td></tr>
<tr></tr><tr><td>

[**concatenation**](/benchmarks/string-manipulation/concatenation.js)

```javascript
"_" + iteration + "_"
```

</td><td><b>461.2 ms</b></td><td>29.2 ms</td></tr>
</tbody></table>
<sub>system<br><b>Node: </b> v19.8.1 <br><b>CPU: </b>Intel(R) Core(TM) i7-5820K CPU @ 3.30GHz, 3900 MHz (12)</sub>

## Dynamic assignment
Comparing ternary operator dynamic assignment to if statement reassignment
<table><thead><tr><th>tested code</th><th>result <sub><sup>(100_000_000 times)</sup></sub></th><th>std <sub><sup>(100 samples)</sup></sub></th></tr></thead><tbody>
<tr></tr><tr><td>

[**if statement**](/benchmarks/dynamic-assignment/if-statement.js)

```javascript
let object = { foo: "bar" }

if (iteration > 5_000_000) {
  object.foo = "foo"
}
```

</td><td><b>13.4 ms</b></td><td>5.5 ms</td></tr>
<tr></tr><tr><td>

[**ternary operator**](/benchmarks/dynamic-assignment/ternary-operator.js)

```javascript
let object = { 
  foo: iteration > 5_000_000 ? "foo" : "bar"
}
```

</td><td><b>7.8 ms</b></td><td>4.3 ms</td></tr>
</tbody></table>
<sub>system<br><b>Node: </b> v19.8.1 <br><b>CPU: </b>Intel(R) Core(TM) i7-5820K CPU @ 3.30GHz, 3900 MHz (12)</sub>

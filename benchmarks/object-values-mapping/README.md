## Object values mapping
Mapping object values
<table><thead><tr><th>tested code</th><th>result <sub><sup>(1_000_000 times)</sup></sub></th><th>std <sub><sup>(100 samples)</sup></sub></th></tr></thead><tbody>
<tr></tr><tr><td>

[**for key**](/benchmarks/object-values-mapping/for-key.js)

```javascript
let values = []

for (const key in obj) {
    values.push(obj[key])
}
```

</td><td><b>51.5 ms</b></td><td>4.7 ms</td></tr>
<tr></tr><tr><td>

[**object values**](/benchmarks/object-values-mapping/object-values.js)

```javascript
let values = Object.values(obj)
```

</td><td><b>158.6 ms</b></td><td>13.2 ms</td></tr>
</tbody></table>

related: [**Object keys mapping**](/benchmarks/object-keys-mapping)  [**Array iteration**](/benchmarks/array-iteration) 

<sub>system<br><b>Node: </b> v19.8.1 <br><b>CPU: </b>Intel(R) Core(TM) i7-5820K CPU @ 3.30GHz, 3900 MHz (12)</sub>

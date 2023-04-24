## Object keys mapping
Mapping object keys
<table><thead><tr><th>tested code</th><th>result <sub><sup>(1_000_000 times)</sup></sub></th><th>std <sub><sup>(100 samples)</sup></sub></th></tr></thead><tbody>
<tr></tr><tr><td>

[**for key**](/benchmarks/object-keys-mapping/for-key.js)

```javascript
let keys = []

for (const key in obj) {
    keys.push(key)
}
```

</td><td><b>31.6 ms</b></td><td>3.1 ms</td></tr>
<tr></tr><tr><td>

[**object keys**](/benchmarks/object-keys-mapping/object-keys.js)

```javascript
let keys = Object.keys(obj)
```

</td><td><b>14.3 ms</b></td><td>2.1 ms</td></tr>
</tbody></table>

related: [**Object values mapping**](/benchmarks/object-values-mapping) 

<sub>system<br><b>Node: </b> v19.8.1 <br><b>CPU: </b>Intel(R) Core(TM) i7-5820K CPU @ 3.30GHz, 3900 MHz (12)</sub>

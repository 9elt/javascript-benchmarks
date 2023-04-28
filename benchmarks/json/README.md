## Json
testing JSON methods with objects of different size
<table><thead><tr><th>tested code</th><th>result <sub><sup>(1_000_000 times)</sup></sub></th><th>std <sub><sup>(10 samples)</sup></sub></th></tr></thead><tbody>
<tr></tr><tr><td>

[**json parse**](/benchmarks/json/json-parse.js)

```javascript
JSON.parse(json_obj)
```

</td><td><b>351.5 ms</b></td><td>24.3 ms</td></tr>
<tr></tr><tr><td>

[**json parse realistic**](/benchmarks/json/json-parse-realistic.js)

```javascript
JSON.parse(json_user)
```

</td><td><b>1.49 s</b></td><td>27.4 ms</td></tr>
<tr></tr><tr><td>

[**json stringify**](/benchmarks/json/json-stringify.js)

```javascript
JSON.stringify(obj)
```

</td><td><b>273.2 ms</b></td><td>14.4 ms</td></tr>
<tr></tr><tr><td>

[**json stringify realistic**](/benchmarks/json/json-stringify-realistic.js)

```javascript
JSON.stringify(user)
```

</td><td><b>1.41 s</b></td><td>26.7 ms</td></tr>
</tbody></table>


<sub>system<br><b>Node: </b> v19.8.1 <br><b>CPU: </b>Intel(R) Core(TM) i7-5820K CPU @ 3.30GHz, 3900 MHz (12)</sub>

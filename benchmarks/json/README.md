# Json
testing JSON methods

> related: 

## Results

<table>
<thead>
<tr>
<th>tested code</th>
<th><a href=".code/simple.js">simple</a></th>
<th><a href=".code/realistic.js">realistic</a></th>
<th><a href=".code/edge-case.js">edge case</a></th>
</tr>
</thead>
<tbody>


<tr></tr><tr>

<td>

[**json parse**](/benchmarks//json/json-parse.js)

```javascript
JSON.parse(json)
```

</td>

<td>
    <b>3.16 ms </b><br>
    (std. 20 μs, o. 9%)
</td>

<td>
    <b>14.72 ms </b><br>
    (std. 97 μs, o. 2%)
</td>

<td>
    <b>38.27 ms </b><br>
    (std. 109 μs, o. 5%)
</td>

</tr>
<tr></tr><tr>

<td>

[**json stringify**](/benchmarks//json/json-stringify.js)

```javascript
JSON.stringify(object)
```

</td>

<td>
    <b>2.33 ms </b><br>
    (std. 22 μs, o. 13%)
</td>

<td>
    <b>13.80 ms </b><br>
    (std. 52 μs, o. 3%)
</td>

<td>
    <b>38.77 ms </b><br>
    (std. 495 μs, o. 8%)
</td>

</tr>

</tbody>
</table>

**std.** standard deviation, **o.** outliers 

## Chart

<img src=".data/chart.svg" width="100%"/>

## Metadata

#### benchmark

<sup>normal distrubution is calculated without outliers</sup>
<br>
<b>Normal distribution samples: </b> 1000
<br>
<b>Average outliers percentage: </b> 7%
<br><br>
<sup>results are measured over multiple iterations of a code snippet</sup>
<br>
<b>Result measured over: </b> 10000 iterations

#### system

<b>Node: </b> v19.8.1
<br>
<b>CPU: </b> Intel(R) Core(TM) i7-5820K CPU @ 3.30GHz, 3900 MHz (12)


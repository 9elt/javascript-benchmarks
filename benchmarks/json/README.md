# Json
testing JSON methods



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
    <b>30.73 ms </b><br>
    (std. 496 μs, o. 4%)
</td>

<td>
    <b>151.11 ms </b><br>
    (std. 2.26 ms, o. 8%)
</td>

<td>
    <b>380.85 ms </b><br>
    (std. 3.24 ms, o. 9%)
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
    <b>23.67 ms </b><br>
    (std. 300 μs, o. 3%)
</td>

<td>
    <b>139.17 ms </b><br>
    (std. 798 μs, o. 3%)
</td>

<td>
    <b>384.94 ms </b><br>
    (std. 2.02 ms, o. 6%)
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
<b>Average outliers percentage: </b> 6%
<br><br>
<sup>results are measured over multiple iterations of a code snippet</sup>
<br>
<b>Result measured over: </b> 100000 iterations

#### system

<b>Node: </b> v19.8.1
<br>
<b>CPU: </b> Intel(R) Core(TM) i7-5820K CPU @ 3.30GHz, 3900 MHz (12)

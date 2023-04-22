## Array iteration
Comparing array iteration methods
| tested code | mean <sub><sup>(1_000_000 iter.)</sup></sub> | std <sub><sup>(10 runs)</sup></sub> |
|-|-|-|
[**foreach**](/benchmarks/array-iteration/foreach.js)|339.3 ms|24.1 ms|
[**for in**](/benchmarks/array-iteration/for-in.js)|26.61 s|221.1 ms|
[**for**](/benchmarks/array-iteration/for.js)|302.6 ms|17.5 ms|
[**for of**](/benchmarks/array-iteration/for-of.js)|1.07 s|27.6 ms|

<sub>system<br><b>Node: </b> v19.8.1 <br><b>CPU: </b>Intel(R) Core(TM) i7-5820K CPU @ 3.30GHz, 3900 MHz (12)</sub>

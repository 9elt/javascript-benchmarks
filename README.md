
# JavaScript Benchmarks

A bash script to repeatedly and consistently benchmark javascript code 

## benchmarks

* [**Array concatenation**](/benchmarks/array-concatenation)
* [**Array iteration**](/benchmarks/array-iteration)
* [**Json**](/benchmarks/json)
* [**Object keys mapping**](/benchmarks/object-keys-mapping)
* [**Object values mapping**](/benchmarks/object-values-mapping)
* [**String manipulation**](/benchmarks/string-manipulation)

## usage

```
$ git clone https://github.com/9elt/js-benchmarks
$ cd js-benchmarks
$ bash benchmark --new my-benchmark
```

create some **code snippets** inside *benchmarks/my-benchmark* and a `config` like in [**this example**](/benchmarks/string-manipulation)

```
$ bash benchmark my-benchmark
```

`README.md`, `results.csv` files will be auto-generated

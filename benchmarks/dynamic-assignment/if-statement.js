let object = { 
  value: "bar"
}

if (iteration > 5_000_000) {
  object.value = "foo"
}
import { snd } from "./snd.mjs"

//$AVAILABLE_CODE

let _snd_samples = 0;

let _results = [];

for (let _i = 0; _i < _snd_samples ; _i++) {

    let _start = performance.now();

    //$CODE

    let _end = performance.now();

    _results.push(_end - _start);
}

console.clear();
console.log(JSON.stringify(snd(_results)));

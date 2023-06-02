/**
 * @return {Generator<number>}
 */
var fibGenerator = function*() {
    const arr = [0, 1];
    let idx = 0;
    while (true) {
        if (arr[idx] !== undefined) yield arr[idx];
        else {
            arr[idx] = arr[idx-2] + arr[idx-1];
            yield arr[idx]; 
        }
        idx++;
    }
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */
const cancelFn = cancellable((x) => x * 5, [2], 20);
setTimeout(cancelFn, 50);
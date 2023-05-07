class FrequencyTracker {
    constructor() {
        this.elements = {};
        this.count = {};
    }

    _incrementCount(counts, n) {
        counts[n] = (counts[n] || 0) + 1;
    }
    
    add(n) {
        if (this.elements[n] === undefined) {
            this.elements[n] = 1;
            this._incrementCount(this.count, 1);
        }
        else {
            this.elements[n] += 1;
            this._incrementCount(this.count, this.elements[n]);
            this.count[this.elements[n]-1] -= 1;
        }
    }
    
    deleteOne(n) {
        if (this.elements[n]) {
            if (this.elements[n] === 1) {
                delete this.elements[n];
                this.count[1] -= 1;
            }
            else {
                this.elements[n] -= 1;
                this._incrementCount(this.count, this.elements[n]);
                this.count[this.elements[n] + 1] -= 1;
            }
        }
    }
    
    hasFrequency(n) {
        if (this.count[n] && this.count[n] !== 0) return true;
        return false;
    }
}
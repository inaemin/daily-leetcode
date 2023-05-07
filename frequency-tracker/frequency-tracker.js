class FrequencyTracker {
    constructor() {
        this.elements = {};
        this.count = {};
    }
    
    add(n) {
        if (this.elements[n] === undefined) {
            this.elements[n] = 1;
            this.count[1] = this.count[1] === undefined ? 1 : this.count[1] + 1;
        }
        else {
            this.elements[n] += 1;
            this.count[this.elements[n]] = this.count[this.elements[n]] === undefined ? 1 : this.count[this.elements[n]] + 1;
            this.count[this.elements[n]-1] = this.count[this.elements[n]-1] - 1;
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
                this.count[this.elements[n]] = this.count[this.elements[n]] === undefined ? 1 : this.count[this.elements[n]] + 1;
                this.count[this.elements[n] + 1] -= 1;
            }
        }
    }
    
    hasFrequency(n) {
        if (this.count[n] && this.count[n] !== 0) return true;
        return false;
    }
}
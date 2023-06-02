var UndergroundSystem = function() {
    this.record = {};
    this.passenger = new Map();
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
    this.passenger.set(id, [stationName, t]);
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function(id, stationName, end_time) {
    const [startStation, start_time] = this.passenger.get(id);
    const time = end_time - start_time;
    if (!this.record[startStation]) this.record[startStation] = {[stationName]: [time]};
    else if (!this.record[startStation][stationName]) this.record[startStation][stationName] = [time];
    else if (this.record[startStation][stationName]) this.record[startStation][stationName].push(time);
};

/** 
 * @param {string} startStation 
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
    const times = this.record[startStation][endStation];
    const avg = times.reduce((res, ele) => res + ele, 0) / times.length;
    return avg;
};

/** 
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */
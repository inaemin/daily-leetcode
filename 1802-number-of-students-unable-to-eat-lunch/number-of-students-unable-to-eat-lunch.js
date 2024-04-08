/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
    let prev_cnt = students.length;
    while (true) {
        for (let i=0; i<students.length; i++) {
            if (students[0] === sandwiches[0]) {
                students.shift();
                sandwiches.shift();
            } else {
                const front = students.shift();
                students.push(front);
            }
        }
        if (prev_cnt > students.length) {
            prev_cnt = students.length
        } else break;
    }
    return students.length;
};
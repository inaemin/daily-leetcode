/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var kthSmallestProduct = function (nums1, nums2, k) {
    const min = Math.min(nums1[0] * nums2[0],
        nums1[0] * nums2[nums2.length - 1],
        nums1[nums1.length - 1] * nums2[0],
        nums1[nums1.length - 1] * nums2[nums2.length - 1])
    const max = Math.max(nums1[0] * nums2[0],
        nums1[0] * nums2[nums2.length - 1],
        nums1[nums1.length - 1] * nums2[0],
        nums1[nums1.length - 1] * nums2[nums2.length - 1])

    let left = min;
    let right = max + 1;
    while (left < right) {
        let mid = Math.floor((left + right) / 2); // 정수오버플로우 방지
        let counts = countPairs(mid, nums1, nums2)
        if (counts < k) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return left
};

function countPairs(target, nums1, nums2) {
    let counts = 0;
    for (let num1 of nums1) {
        if (num1 === 0) {
            if (target >= 0) {
                counts += nums2.length;
            }
        } else if (num1 > 0) { // 양수인 경우
            counts += countLessEqual(nums2, Math.floor(target / num1))
        } else { // 음수인 경우
            counts += countGreaterEqual(nums2, Math.ceil(target / num1)) // 버림이 아니라 올림해야 함.
        }
    }
    return counts; // target 이하의 수를 만들 수 있는 경우의 수
}

// target보다 작거나 같은 요소의 개수
function countLessEqual(arr, target) {
    let start = 0;
    let end = arr.length;
    while (start < end) {
        let mid = (start + end) / 2 | 0;
        if (arr[mid] <= target) {
            start = mid + 1;
        } else {
            end = mid;
        }
    }
    return start;
}

// target보다 크거나 같은 요소의 개수
function countGreaterEqual(arr, target) {
    let start = 0;
    let end = arr.length;
    while (start < end) {
        let mid = (start + end) / 2 | 0;
        if (arr[mid] < target) {
            start = mid + 1
        } else {
            end = mid;
        }
    }
    return arr.length - start;
}
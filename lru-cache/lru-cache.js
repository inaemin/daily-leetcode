/**
 * @param {number} capacity
 */
function DoublyListNode(key, val, prev, next) {
    this.key = key;
    this.val = val;
    this.prev = prev;
    this.next = next;
}

var LRUCache = function(capacity) {
    this.map = new Map();
    this.size = capacity;
    this.head = new DoublyListNode(null, null, null, null)
    this.tail = new DoublyListNode(null, null, this.head, null)
    this.head.next = this.tail;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (!this.map.has(key)) return -1;
    else {
        // 끝으로 업데이트하고
        const node = this.map.get(key);
        node.prev.next = node.next;
        node.next.prev = node.prev;
        node.prev = this.tail.prev;
        this.tail.prev.next = node;
        node.next = this.tail;
        this.tail.prev = node;
        return this.map.get(key).val;
    }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.map.has(key)) {
        // node를 마지막으로 업데이트하고
        const node = this.map.get(key);
        node.val = value; // value update
        node.prev.next = node.next;
        node.next.prev = node.prev;
        node.prev = this.tail.prev;
        this.tail.prev.next = node;
        node.next = this.tail;
        this.tail.prev = node;
        this.map.set(key, node);
    }
    else if (this.size === this.map.size) {
        // map에 없으면서 이미 cache가 모두 차있다면
        const newNode = new DoublyListNode(key, value, this.tail.prev, this.tail);
        const leastUsedNode = this.head.next;
        this.head.next = leastUsedNode.next;
        leastUsedNode.next.prev = this.head;
        this.tail.prev.next = newNode;
        this.tail.prev = newNode;
        this.map.delete(leastUsedNode.key);
        this.map.set(key, newNode);
    } else {
        // map에 없으면서 cache에 공간이 있다면
        const newNode = new DoublyListNode(key, value, this.tail.prev, this.tail)
        this.tail.prev.next = newNode;
        this.tail.prev = newNode;
        this.map.set(key, newNode);
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
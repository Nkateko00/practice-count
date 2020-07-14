function allCount() {
    let incrementBy = 1000000;
    let total = 0;

    function increment() {
        total += incrementBy;
    }
    function decrement() {
        if (total > 0) {
            total -= incrementBy;

        }
    }
    function getTotal() {
        return total;
    }
    function setIncrementaion(value) {
        incrementBy = value; 
    }
    return {
        increment,
        decrement,
        getTotal,
        setIncrementaion
    }
}

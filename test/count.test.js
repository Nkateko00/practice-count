describe("Increase or Decrease",function(){
    it("it should be able to increase",function(){
        const increaseCount = allCount();
        
        increaseCount.increment();
        increaseCount.increment();
        increaseCount.increment();
        assert.eqaul(3000000,increaseCount.getTotal());

    });
        it("it should be able to decrease",function(){
            const increaseCount = allCount();
            
            increaseCount.increment();
            increaseCount.increment();
            increaseCount.increment();
            increaseCount.increment();
            increaseCount.increment();
            increaseCount.decrement();
            increaseCount.decrement();
            assert.eqaul(3000000,increaseCount.getTotal());
    
        });

        it("it should be able to set new Number to increment by",function(){
            const increaseCount = allCount();
            
            increaseCount.setIncrementaion(20);
            increaseCount.increment();
            increaseCount.increment();
            increaseCount.increment();
            increaseCount.decrement();
            increaseCount.decrement();
            assert.eqaul(20,increaseCount.getTotal());
});
function stringCalculator(param) {
    return param;
}

describe('first test', function() {
    
    it('should be fine', function() {
        expect(true).toBe(true);
    })

    it('dummy test', function() {
        var result = stringCalculator('test')

        expect(result).toEqual('test')
    })
})
var stringCalculator = {
    Add: function (stringNumbers) {
        var result = 0;
        var delimiter = ',';
        var matchDelimiter = stringNumbers.match(/^\/{2}(.)\n/);
        if (matchDelimiter && matchDelimiter.length >= 2) {
            var delimiter = matchDelimiter[1];
            stringNumbers = stringNumbers.replace(matchDelimiter[0], "");
        }
        var regEx = new RegExp(delimiter + "|\n", ['g']);
        var numbers = stringNumbers.split(regEx);
        for (var i in numbers) {
            if (numbers[i]) {
                if (parseInt(numbers[i]) < 0) {
                    throw new Error('negatives not allowed');
                }
                if (parseInt(numbers[i]) <= 1000){
                    result += parseInt(numbers[i]);
                }
            }
        }

        return result;
    }
}

describe('Calculator add', function () {
    it('Should return 0', function () {
        expect(stringCalculator.Add("")).toBe(0);
    })

    it('Should add 1 number, return the same', function () {
        expect(stringCalculator.Add("2")).toBe(2);
    })

    it('should add 2 numbers', function () {
        expect(stringCalculator.Add("2,2")).toBe(4);
    })

    it('should add more than 2 numbers', function () {
        expect(stringCalculator.Add("2,2,2,2,2")).toBe(10);
    })

    it('should add numbers separeted new lines', function () {
        expect(stringCalculator.Add("1\n2,3")).toBe(6);
    })

    it('Should add with different delimiter', function () {
        expect(stringCalculator.Add("//;\n1;2")).toBe(3);
    })

    it('Should throw error if negation', function () {
        function bar() {
            stringCalculator.Add("-2,2");
        }
        expect(bar).toThrowError('negatives not allowed');
    })
    
    it('Should add 2 number border', function () {
        expect(stringCalculator.Add("//;\n2;1000")).toBe(1002);
    })
    
    it('Should add 2 number more then border', function () {
        expect(stringCalculator.Add("//;\n2;1001")).toBe(2);
    })
    
    it('Should add with any delimiter', function () {
        expect(stringCalculator.Add("//***\n2***1001")).toBe(2);
    })
})
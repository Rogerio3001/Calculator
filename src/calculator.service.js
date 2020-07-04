function CalculatorService(){
    const SUM = '+'
    const SUBS = '-'
    const DIV = '/'
    const MULT = '*'
    function calculate(num1, num2, op){
        let resultado
        switch (op) {
            case SUM:
                resultado = num1 + num2
                break;
            case SUBS:
                resultado = num1 - num2
                break;
            case DIV:
                resultado = num1 / num2
                break;
            case MULT:
                resultado = num1 * num2
                break;
            default:
                resultado = 0
                break
        }
        return resultado
    }

    function concatNumber(actualNumber, numberToConcat){
        //* caso contenha apenas 0 ou null, reinicia o valor
        if(actualNumber === '0' || actualNumber === null){
            actualNumber =  ''
        }
        
        //* primeiro digito for "." concatena o "0" antes do ponto
        if(numberToConcat === '.' && actualNumber === ''){
            return '0.'
        }
        
        //* caso "." for digitado e já tenha um "." apenas retornar sem fazer nada
        if(numberToConcat === '.' && actualNumber.indexOf('.') > -1){
            return actualNumber
        }

        return actualNumber + numberToConcat
    }

    return [ calculate, concatNumber, SUM, SUBS, DIV, MULT ]
}

export default CalculatorService
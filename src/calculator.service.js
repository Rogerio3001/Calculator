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

    return [ calculate, SUM, SUBS, DIV, MULT ]
}

export default CalculatorService
import React, { useState } from 'react';
import './calculator.css';
import { 
  Jumbotron, 
  Container, 
  Row, 
  Col,
  Button,
  Form
} from 'react-bootstrap'

import CalculatorService from './calculator.service'

function Calculator() {

  const [ calculate, concatNumber, SUM, SUBS, DIV, MULT ] = CalculatorService()
  const [ txtNumber, setTxtNumber ] = useState('0')
  const [ num1, setNum1 ] = useState('0')
  const [ num2, setNum2 ] = useState(null)
  const [ operation, setOperation ] = useState(null)

  function addNumber(number){
    let result
    if(operation === null){
      result = concatNumber(num1, number)
      setNum1(result)
      console.log('result1: ' + result)
    }else{
      result = concatNumber(num2, number)
      setNum2(result)
      console.log('result2: ' + result)
    }

    setTxtNumber(result)
  }

  function defOperation(op){
    //* define a operação padrao
    if(operation === null){
      setOperation(op)
      return
    }
   
    //* caso a operação esteja definida realiza o calculo
    if(num2 !== null){
      const result = calculate(parseFloat(num1), parseFloat(num2), operation)
      setOperation(op)
      setNum1(result.toString())
      setNum2(null)
      setTxtNumber(result.toString())
    }
  }

  function actionCalculate(){
    if(num2 === null){
      return
    }
    const result = calculate(parseFloat(num1), parseFloat(num2), operation)
    setTxtNumber(result)
  }

  function clear(){
    setTxtNumber('0')
    setNum1('0')
    setNum2(null)
    setOperation(null)
  }

  return (
    <Jumbotron style={{
      background: 'transparent !important',
      backgroundColor: '#007bff',
      padding: '5px',
      width: '400px'
    }}>
      <Container>
        <Row>
          <Col xs='3'>
            <Button 
              variant='danger'
              onClick={clear}>C</Button>
          </Col>
          <Col xs='9'>
            <Form.Control type='text'
              name='txtNumber'
              className='text-right'
              readOnly='readonly'
              value={txtNumber}
              data-testid='txtNumber'
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Button 
              variant='light'
              onClick={() => addNumber('7')}>7</Button>
          </Col>
          <Col>
            <Button 
              variant='light'
              onClick={() => addNumber('8')}>8</Button>
          </Col>
          <Col>
            <Button 
              variant='light'
              onClick={() => addNumber('9')}>9</Button>
          </Col>
          <Col>
            <Button 
              variant='warning'
              onClick={() => defOperation(DIV)}>{DIV}</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button 
              variant='light'
              onClick={() => addNumber('4')}>4</Button>
          </Col>
          <Col>
            <Button 
              variant='light'
              onClick={() => addNumber('5')}>5</Button>
          </Col>
          <Col>
            <Button 
              variant='light'
              onClick={() => addNumber('6')}>6</Button>
          </Col>
          <Col>
            <Button 
              variant='warning'
              onClick={() => defOperation(MULT)}>{MULT}</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button 
              variant='light'
              onClick={() => addNumber('1')}>1</Button>
          </Col>
          <Col>
            <Button 
              variant='light'
              onClick={() => addNumber('2')}>2</Button>
          </Col>
          <Col>
            <Button 
              variant='light'
              onClick={() => addNumber('3')}>3</Button>
          </Col>
          <Col>
            <Button 
              variant='warning'
              onClick={() => defOperation(SUBS)}>{SUBS}</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button 
              variant='light'
              onClick={() => addNumber('0')}>0</Button>
          </Col>
          <Col>
            <Button 
              variant='light'
              onClick={() => addNumber('.')}>.</Button>
          </Col>
          <Col>
            <Button 
              variant='success'
              onClick={actionCalculate}>=</Button>
          </Col>
          <Col>
            <Button 
              variant='warning'
              onClick={() => defOperation(SUM)}>{SUM}</Button>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default Calculator;

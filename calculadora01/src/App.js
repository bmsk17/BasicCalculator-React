import  Input from "./components/Input";
import  Button from "./components/Button";

import { Container,Content,Row,Column } from './styles';
import { ButtonContainer } from "./components/Button/styles";
import { useState } from "react";

const  App= () => {
  const [currentNumber, setCurrentNumber] = useState(0);
  const [firstNumber, setFirstNumber] = useState(0);
  const [operation, setOperation] = useState();

  const handleAddNumber = (num) => {
    setCurrentNumber(prev => `${prev === '0' ? '': prev}${num}`)
  }

  const handleClearDisplay = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('')
  }

  const handleSumNumbers = () => {
    if(firstNumber === '0'){
        setFirstNumber(currentNumber);
        setCurrentNumber('0')
        setOperation('+')
    }else{
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
    }
  }

  const handleSubtractionNumbers = () => {
    if(firstNumber === '0'){
        setFirstNumber(currentNumber);
        setCurrentNumber('0')
        setOperation('-')
    }else{
      const subtraction = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(subtraction));
    }
  }

  const handleDivisionNumbers = () => {
    if(firstNumber === '0'){
        setFirstNumber(currentNumber);
        setCurrentNumber('0')
        setOperation('/')
    }else{
      const divison = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(divison));
    }
  }

  const handleMultiplicationNumbers = () => {
    if(firstNumber === '0'){
        setFirstNumber(currentNumber);
        setCurrentNumber('0')
        setOperation('*')
    }else{
      const multiplication = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(multiplication));
    }
  }

  const handleMultiplicationQuadraNumbers = () => {
    const multiplicationQuad = Number(currentNumber) * Number(currentNumber);
    setCurrentNumber(String(multiplicationQuad));
    
  }
  
  const handleEquals = () => {
    if(firstNumber !== '0' && operation !== ''  && currentNumber !== '0'){
        switch(operation){
          case '+':
            handleSumNumbers();
            break;
          case '-':
            handleSubtractionNumbers();
            break;
          case '/':
            handleDivisionNumbers();
            break;  
          case '*':
            handleMultiplicationNumbers();
            break;
          case '**':
            handleMultiplicationQuadraNumbers();
            break;        
          default: 
            break;
        }
    }
  }
  
  return (
    <Container> 
        <Content>
          <Input value={currentNumber}/>
          <Row>
            <Button label = 'C' onClick={handleClearDisplay}/>
            <Button label = '√' onClick={() => handleAddNumber('')}/>
            <Button label = '/' onClick={handleDivisionNumbers}/>
            <Button label = 'x²' onClick={handleMultiplicationQuadraNumbers}/>            
          </Row>
          <Row>
            <Button label = '7' onClick={() => handleAddNumber('7')}/>
            <Button label = '8' onClick={() => handleAddNumber('8')}/>
            <Button label = '9' onClick={() => handleAddNumber('9')}/>
            <Button label = 'x' onClick={handleMultiplicationNumbers}/>            
          </Row>
          <Row>
            <Button label = '4' onClick={() => handleAddNumber('4')}/>
            <Button label = '5' onClick={() => handleAddNumber('5')}/>
            <Button label = '6' onClick={() => handleAddNumber('6')}/>
            <Button label = '-' onClick={handleSubtractionNumbers}/>
          </Row>
          <Row>
            <Button label = '1' onClick={() => handleAddNumber('1')}/>
            <Button label = '2' onClick={() => handleAddNumber('2')}/>
            <Button label = '3' onClick={() => handleAddNumber('3')}/>
            <Button label = '+' onClick={handleSumNumbers}/>
          </Row>
          <Row>
            <Button label = '+/-' onClick={() => handleAddNumber('')}/>
            <Button label = '0' onClick={() => handleAddNumber('0')}/>
            <Button label = ',' onClick={() => handleAddNumber('')}/>
            <Button label = '=' onClick={handleEquals}/>
          </Row>

        </Content>
    </Container>
  );
}

export default App;

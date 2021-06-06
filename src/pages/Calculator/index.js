import { useState } from 'react';
import Button from '../../components/Button';
import Display from '../../components/Display';
import * as S from './styles';

const Calculator = () =>{
    const initialState = {
        displayValue: '0',
        clearDisplay: false,
        operation: null,
        values: [0, 0],
        current: 0
    }
    const [initial, setInitial] = useState(initialState);

    const clearMemory = () =>{
        setInitial({ ...initialState });
    }

    function addDigit(n){
        if(n === '.' && initial.displayValue.includes('.')){
            return
        }
        const clearDisplay = initial.displayValue === '0' || initial.clearDisplay;
        const currentValue = clearDisplay ? '' : initial.displayValue;
        const displayValue = currentValue + n;
        setInitial({...initial, displayValue, clearDisplay: false });
        if(n !== '.'){
            const i = initial.current;
            const newValue = parseFloat(displayValue);
            const values = [initial.values];
            values[i] = newValue;
            setInitial({...initial, displayValue, values})          
        }
    };

    function setOperation(operation){
        if(initial.current === 0){
            setInitial({ ...initial, displayValue: '0', operation, current: 1, clearDisplay: true });
        }else{
            
        }
    };

    return(
        <S.Calculator>  
            <Display value={initial.displayValue} />
            <Button label="AC" handle={ clearMemory } />
            <Button label="+/-" />
            <Button label="%" handle={ setOperation } />
            <Button label="/" classes={ 'operation' } handle={ setOperation } />
            <Button label="7" handle={ addDigit } />
            <Button label="8" handle={ addDigit } />
            <Button label="9" handle={ addDigit } />
            <Button label="*" classes={ 'operation' } handle={ setOperation } />
            <Button label="4" handle={ addDigit } />
            <Button label="5" handle={ addDigit } />
            <Button label="6" handle={ addDigit } />
            <Button label="-" classes={ 'operation' } handle={ setOperation } />
            <Button label="1" handle={ addDigit } />
            <Button label="2" handle={ addDigit } />
            <Button label="3" handle={ addDigit } />
            <Button label="+" classes={ 'operation' } handle={ setOperation } />
            <Button label="0" classes={ 'double' } handle={ addDigit } />
            <Button label="." handle={ addDigit } />
            <Button label="=" classes={ 'operation' } handle={ setOperation } />
        </S.Calculator>
    )
};

export default Calculator;
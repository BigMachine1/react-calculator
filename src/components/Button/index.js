import * as S from './styles';

const Button = ({ label, classes, handle}) =>{
   return(
    <S.Button 
        className={classes}
        onClick={() => handle(label)}
    >
        {label}
    </S.Button>
   ) 
};

export default Button;
import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  width: 100%;
  justify-content: center;
  margin-bottom: 125px;
`;

export const Title = styled.h1`
  color: #28201A;
  font-size: 36px;
  margin-bottom: 30px;
  width: 50%;
  text-align:center;
  @media (max-width: 1024px) {
    & {
      font-size: 24px;
      width: 80%;
      margin-bottom: 10px;
    }
  }
`;
export const LogoContainer = styled.img`
  width:350px;
  height: 350px;
  @media (max-width: 1024px) {
    & {
      width:250px;
      height: 250px;
    }
  }
`;
export const ImageContainer = styled.div`
@media (max-width: 1024px) {
    & {
      width:100%;
      display: flex;
      justify-content: center;
      margin-bottom: 50px;
    }
  }`;
export const FormContainer = styled.div`
 @media (max-width: 1024px) {
    & {
      width:100%;
    }
  }

.box {
  align-self: flex-end;

  width: 445px;
  height: 456px;
  margin-top: 10px;
  box-sizing: border-box;
  opacity: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;

}

.box input,
.box select,
.box button {
  padding: 10px 0px;
  margin-bottom: 30px;
}

.box select, .box input, .box textarea {
  background: transparent;
}

.box textarea {
  height: 90px;
  padding: 10px 0;
  margin-bottom: 40px;
  resize: none;
}

.test {
  width: 100%;
}

.box input,
.box select,
.box textarea {
  width: 340px;
  box-sizing: border-box;
  box-shadow: none;
  outline: none;
  border: none;
  border-bottom: 2px solid #000000;
  @media (max-width: 1024px) {
    & {
      width: 100%;  
    }
  }
}

.box input:focus, .box select:focus, .box textarea:focus, .box input:valid, .box select:valid, .box textarea:valid {
  font-family: BalooExtraBold;
}

.box button {
  margin-left: 29%;
  background-color:transparent;
  box-shadow: 0px 3px 8px #CCCCCC;
  border-radius: 8px;
  border: 2px solid #28201A;
  opacity: 1;
  cursor: pointer;
  font-family: BalooBold;

  font-size: 16px/24px;
  font-weight: bold;
  color: #28201A;
  text-align: center;
  letter-spacing: 1px;
  opacity: 1;
  padding: 5px 10px;

  width: 128px;
  /* height: 35px; */

  transition: .5s;
  
}

select option {
  font-family: BalooExtraBold;
  font-weight: normal;
  font-size: 16px;
}

.box button:hover {
  box-shadow: 0px 5px 8px #B3B3B3;
}

.box form div {
  position: relative;
}
@media (max-width: 1024px) {
.box form{
  width: 80%;
}
}

.box form div label {
  position: absolute;
  top: 10px;
  display: flex;
  justify-self: self-end;
  pointer-events: none;
  transition: .5s;
  padding-left: 7px;

  font-family: BalooExtraBold;
  font-size: 16px;
  font-weight: normal;
  color: #262626;
  text-align: center;
  letter-spacing: 0px;
  opacity: 1;
  @media (max-width: 1024px) {
    & {
      font-size: 14px;
    }
  }
}

.box input:focus ~ label,
.box select:focus ~ label,
.box textarea:focus ~ label,
.box input:valid ~ label,
.box select:valid ~ label,
.box textarea:valid ~ label {
  top: -12px;
  color: #F7022D;
  font-size: 12px;
  font-weight: bold;
  padding-left: 0px;

}

.box input:focus,
.box select:focus,
.box textarea:focus,
.box input:valid,
.box select:valid,
.box textarea:valid {
  border-bottom: 1px solid #F7022D;
}
@media (max-width: 1024px) {
    .box {
      width: 100%;  
      height: 320px ;
    }
  }
`;
export const Input = styled.input`
  background-color:transparent;
  border:none;
  outline: none;
  border-bottom: 1px solid black;
`;

export const Select = styled.select`
  background-color:transparent;
  border:none;
  outline: none;
  border-bottom: 1px solid black;
`;

export const TextArea = styled.textarea`
  background-color:transparent;
  border:none;
  outline: none;
  border-bottom: 1px solid black;
`;

export const Label = styled.label`


`;
export const ImageFormContainer = styled.div`
  width: 80%;
  display:flex;
  flex-direction:row;
  justify-content: space-between;
  @media (max-width: 1024px) {
    & {
      width: 100%;
      flex-direction:column;
      align-items: center;
    }
  }
`;
export const MainContainer = styled.div`
  display:flex;
  width: 100%;
  flex-direction:column;
  align-items: center;
`;

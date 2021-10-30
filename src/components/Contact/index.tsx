/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import {
  MainContainer,
  ImageContainer,
  FormContainer,
  LogoContainer,
  Container,
  Title,
  ImageFormContainer,
  Input,
  Label,
  Select,
  TextArea,
} from './style';
import { LogoHacka } from '../../assets';
import { OutsideContainer } from '../../styles/globalComponents';

export const Contact: React.FC = () => {
  const list = [
    { name: '' },
    { name: 'Dúvidas' },
    { name: 'Parceria' },
    { name: 'Estrutura' },
    { name: 'Outros' },
  ];
  return (
    <Container>
      <OutsideContainer>
        <MainContainer>
          <Title>
            Não saia sem mandar
            <br />
            uma mensagem para a gente!

          </Title>
          <ImageFormContainer>
            <ImageContainer>
              <LogoContainer src={LogoHacka} />
            </ImageContainer>
            <FormContainer>
              <div className="box">
                <form>
                  <div>
                    <input name="form_txt" type="text" required />
                    <label>Nome</label>
                  </div>
                  <div>
                    <input name="form_txt" type="text" required />
                    <label>Telefone</label>
                  </div>
                  <div>
                    <select name="form_txt" required>
                      {list.map((item, index) => (
                        <option value={item.name}>{item.name}</option>
                      ))}
                    </select>
                    <label>Assunto</label>
                  </div>
                  <div>
                    <textarea name="form_txt" required />
                    <label>Messagem</label>
                  </div>
                  <button type="submit" value="submit">
                    ENVIAR
                  </button>
                </form>
              </div>
            </FormContainer>
          </ImageFormContainer>
        </MainContainer>
      </OutsideContainer>
    </Container>
  );
};

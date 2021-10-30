/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import url from '../api/apiURL';

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

toast.configure();

export const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [dados, setDados] = useState('');
  const [link, setLink] = useState('');
  const [subject, setSubject] = React.useState(0);
  const list = [
    { name: '' },
    { name: 'Dúvidas' },
    { name: 'Parceria' },
    { name: 'Estrutura' },
    { name: 'Outros' },
  ];
  const nameChange = (event:any) => {
    setName(event.target.value);
  };

  const phoneChange = (event:any) => {
    setPhone(event.target.value);
  };

  const messageChange = (event:any) => {
    setMessage(event.target.value);
  };

  const subjectChange = (event:any) => {
    setSubject(event.target.value);
  };

  const sendMaile = async () => {
    try {
      const db = await axios.post(`${url.url}/api/contato`, {
        name,
        phone,
        subject,
        message,
      });
      console.log(name, phone, subject, message);
      if (db.status === 200) { toast('Mensagem enviada!'); limpaCampos(); }
    } catch (err) {
      toast.warn('Erro ao enviar, tente novamente!');
    }
  };

  const notify = (event:Event) => {
    sendMaile();
    event.preventDefault();
  };

  const handleSubmit = (event:Event) => {
    event.preventDefault();
    sendMaile();
  };

  const loadInfo = async () => {
    const res = await axios.get(`${url.url}/api/social`);
    setDados(res.data);
    const link2 = await axios.get(`${url.url}/api/ticket`);
    setLink(link2.data);
  };

  function limpaCampos() {
    const elements = document.getElementsByName('form_txt');
    elements.forEach((element:any) => {
      // eslint-disable-next-line no-param-reassign
      element.value = '';
    });
  }

  useEffect(() => {
    loadInfo();
  }, []);

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
                <form onSubmit={(event:any) => handleSubmit(event)}>
                  <div>
                    <input name="form_txt" type="text" required value={name} onChange={(event) => nameChange(event)} />
                    <label>Nome</label>
                  </div>
                  <div>
                    <input name="form_txt" type="text" required value={phone} onChange={(event) => phoneChange(event)} />
                    <label>Telefone</label>
                  </div>
                  <div>
                    <select name="form_txt" required value={subject} onChange={(event) => subjectChange(event)}>
                      {list.map((item, index) => (
                        <option value={item.name}>{item.name}</option>
                      ))}
                    </select>
                    <label>Assunto</label>
                  </div>
                  <div>
                    <textarea name="form_txt" required value={message} onChange={(event) => messageChange(event)} />
                    <label>Messagem</label>
                  </div>
                  <button type="submit" value="submit" onSubmit={(e:any) => notify(e)}>
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

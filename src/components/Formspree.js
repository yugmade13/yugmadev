import React from 'react';
import styled from 'styled-components';
import { useForm, ValidationError } from '@formspree/react';
import Button from './styled/Button';

const FormSubmit = styled.form`
  margin: 24px 0;
  padding: 24px 16px;
  border: ${(props) => props.theme.border};
  border-radius: 1rem;
  box-shadow: 0 16px 32px -16px rgba(0,0,0,.1),0 0 0 1px rgba(0,0,0,.1);
  
  .validate {
    color: red;
    font-size: 14px;
    font-family: ${(props) => props.theme.fontFamily};
    margin-left: 14px;
  }
`;

const Input = styled.input`
  outline: none;
  border: ${(props) => props.theme.border};
  border-radius: 1rem;
  display: block;
  font-family: ${(props) => props.theme.fontFamily[0]};
  font-size: 16px;
  width: 100%;
  margin-bottom: 16px;
  padding: 6px 14px;
  background: ${(props) => props.theme.colors.bgSecondary};
  color: ${(props) => props.theme.colors.textSecondary};
`;

const Textarea = styled.textarea`
  outline: none;
  border: ${(props) => props.theme.border};
  border-radius: 1rem;
  display: block;
  font-family: ${(props) => props.theme.fontFamily[0]};
  width: 100%;
  margin-bottom: 16px;
  padding: 14px;
  height: 150px;
  background: ${(props) => props.theme.colors.bgSecondary};
  color: ${(props) => props.theme.colors.textSecondary};
`;

function Formspree() {
  const [state, handleSubmit] = useForm('xeqwvknw');

  if (state.succeeded) {
    alert('Thanks for joining!');
  }

  return (
    <FormSubmit aria-label="contact-form" onSubmit={handleSubmit}>
      <ValidationError
        className="validate"
        prefix="Email"
        field="email"
        errors={state.errors}
      />
      <Input
        type="text"
        placeholder="Your email"
        name="email"
      />
      <ValidationError
        className="validate"
        prefix="Message"
        field="message"
        errors={state.errors}
      />
      <Textarea
        name="message"
        placeholder="Tell me"
      />
      <Button
        fontSize="14px"
        padding="15px 18px"
        borderRadius="15px"
        bgColor
        color="#fff"
        type="submit"
        disabled={state.submitting}
      >
        Submit
      </Button>
    </FormSubmit>
  );
}

export default Formspree;

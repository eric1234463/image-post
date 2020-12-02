import React from 'react'
import { useForm } from 'react-hook-form';
import { IUser } from '../../interfaces/api/user';
import styled from '../../utils/styled';
import Input from '../../components/Input';
import Button from '../../components/Button';

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.WHITE};
  padding: 2rem;
  border-radius: 8px;

  > div {
    padding: 0.5rem 0;
    display: flex;
  }

  > button {
    margin-top: 1rem;
  }
`;

const LoginPage: React.FC = () => {
  const { register, handleSubmit, watch } = useForm<IUser>({
    defaultValues: {
      email: '',
      password: '',
    }
  });

  const onSubmit = (value: IUser) => {
    console.log(value)
  }

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Input ref={register} name="email" label="Email" value={watch('email')}></Input>
      </div>
      <div>
        <Input type="password" ref={register} name="password" label="Password" value={watch('password')}></Input>
      </div>
      <Button type="submit">Login</Button>
    </FormContainer>
  )
}

export default LoginPage;

import React from 'react'
import { useForm } from 'react-hook-form';
import { IUser } from '../../interfaces/api/user';
import styled from '../../utils/styled';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { useDispatch } from '../../application/store/effects';
import { useSelector } from 'react-redux';
import { State } from '../../interfaces/state';
import StyledLink from '../../components/StyledLink';

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

const SignupPage: React.FC = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector<State, State['user']>(state => state.user);
  const { register, handleSubmit, watch } = useForm<IUser>({
    defaultValues: {
      email: '',
      password: '',
    }
  });

  const onSubmit = (value: IUser) => {
    dispatch({
      type: 'CREATE_USER_REQUEST',
      payload: value,
    })
  }

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Input ref={register} name="email" label="Email" value={watch('email')}></Input>
      </div>
      <div>
        <Input type="password" ref={register} name="password" label="Password" value={watch('password')}></Input>
      </div>
      <Button type="submit" isLoading={isLoading}>Signup</Button>
      <StyledLink to="/users/sign_in">Back to Login</StyledLink>
    </FormContainer>
  )
}

export default SignupPage;

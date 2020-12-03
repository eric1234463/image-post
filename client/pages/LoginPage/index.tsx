import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import * as yup from "yup";
import { IUser } from '../../interfaces/api/user';
import styled from '../../utils/styled';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { useSelector } from 'react-redux';
import { State } from '../../interfaces/state';
import { useDispatch } from '../../application/store/effects';
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

const schema = yup.object().shape({
  email: yup.string().email('Please enter a valid email address').required('Required Field'),
  password: yup.string().min(8, 'Password at least need 6 digits').required('Required Field'),
});


const LoginPage: React.FC = () => {
  const dispatch = useDispatch();
  const { isLoading, error: { isLoginError } } = useSelector<State, State['user']>(state => state.user);

  const { register, handleSubmit, watch, errors, formState } = useForm<IUser>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const onSubmit = (value: IUser) => {
    dispatch({
      type: 'LOGIN_USER_REQUEST',
      payload: value,
    })
  }

  useEffect(() => {
    if (isLoginError) {
      toast.error("Password Or Email is not correct");
    }
  }, [isLoginError])

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Input ref={register} name="email" label="Email" value={watch('email')} error={errors.email?.message}></Input>
      </div>
      <div>
        <Input type="password" ref={register} name="password" label="Password" value={watch('password')} error={errors.password?.message}></Input>
      </div>
      <Button type="submit" isLoading={isLoading} disabled={Object.keys(errors).length > 0 || !formState.isDirty}>Login</Button>
      <StyledLink to="/users/sign_up">Sign up</StyledLink>
    </FormContainer>
  )
}

export default LoginPage;

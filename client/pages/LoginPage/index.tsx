import React from 'react'
import { useForm } from 'react-hook-form';
import { IUser } from '../../interfaces/api/user';

const LoginPage: React.FC = () => {
  const { register, handleSubmit } = useForm<IUser>({
    defaultValues: {
      email: '',
      password: '',
    }
  });

  const onSubmit = (value: IUser) => {
    console.log(value)
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Email</label>
      <input ref={register} name="email" placeholder="Email"></input>
      <input type="password" ref={register} name="password" placeholder="Password"></input>
      <button type="submit">Submit</button>
    </form>
  )
}

export default LoginPage;

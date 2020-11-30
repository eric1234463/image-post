import React from 'react'
import { useForm } from 'react-hook-form';

interface IFrom {
  email: string;
  password: string;
}
const LoginPage: React.FC = () => {
  const { register, handleSubmit } = useForm<IFrom>({
    defaultValues: {
      email: '',
      password: '',
    }
  });

  const onSubmit = (value: IFrom) => {
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

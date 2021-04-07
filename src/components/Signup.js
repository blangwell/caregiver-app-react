import { useForm } from 'react-hook-form';

export default function Signup () {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const submitForm = data => console.log(data);

  console.log(watch('email'))

  return (

      <form onSubmit={handleSubmit(submitForm)}>
        <input name="email" type="email" placeholder="Email" {...register('email', { required : true, validate: true })}/>
        <input name="password" type="password" placeholder="Password" {...register('password', { required : true })}/>
        <input name="confirmPassword" type="password" placeholder="Password" {...register('password', { required : true })}/>
        {errors.email && <span>Please enter a valid email</span>}
        <input type="submit"/>
      </form>
  )
};
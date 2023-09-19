import { useForm } from 'react-hook-form';
import { RotatingLines } from 'react-loader-spinner';


const SignIn = () => {
	const {
		handleSubmit,
		formState: { errors },
	} = useForm();

  return (
    <form className='space-y-4 tablet:space-y-6' onSubmit={handleSubmit(handleSignIn)}>
    <div>
      <label className='block mb-2 text-base font-semibold text-gray-600 dark:text-white'>E-mail</label>
      <input
        disabled={loading}
        type='email'
        id='email'
        {...register('email', {
          required: 'Please enter your email',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Please enter a valid email address',
          },
        })}
        className={`bg-gray-50 border  text-gray-900 sm:text-sm rounded-lg focus:border-my-primary focus:border-2 focus:outline-none focus:ring-0 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
        placeholder='E-mail'
        onFocus={handleFocus}
      />
      {errors?.email && <span className='text-red-500 text-sm'>{errors?.email?.message}</span>}
    </div>

    <div>
      <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Password</label>
      <input
        disabled={loading}
        type='password'
        {...register('password', {
          required: 'Please enter your password',
          minLength: {
            value: 7,
            message: 'Password must be at least 7 characters long',
          },
        })}
        id='password'
        placeholder='••••••••'
        className={`bg-gray-50 border  text-gray-900 sm:text-sm rounded-lg focus:border-my-primary focus:border-2 focus:outline-none focus:ring-0 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
        onFocus={handleFocus}
      />
      {errors?.password  && <span className='text-red-500 text-sm'>{errors?.password?.message}</span>}
    </div>

    <button disabled={loading} type='submit' className='w-full text-white bg-my-primary hover:bg-my-primary-hover focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg flex justify-center items-center px-5 py-3 tracking-wider text-xl text-center dark:bg-primary-600 transition-all duration-300 ease-linear dark:hover:bg-primary-700 dark:focus:ring-primary-800'>
      {loading ? <RotatingLines strokeColor='white' strokeWidth='5' animationDuration='0.75' width='30' visible={true} /> : <span> Sign In</span>}
    </button>

  </form>
  )
}

export default SignIn
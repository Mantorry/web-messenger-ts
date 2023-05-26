import Image from 'next/image'
import AuthForm from './components/AuthForm'

const Auth = () => {
	return (
		<div
			className='
        flex 
        min-h-full 
        flex-col 
        justify-center 
        py-12 
        sm:px-6 
        lg:px-8 
        bg-cyan-100
      '
		>
			<div className='sm:mx-auto sm:w-full sm:max-w-md'>
				<Image
					height='68'
					width='68'
					className='mx-auto w-auto'
					src='/images/logo.jpg'
					alt='Logo'
				/>
				<h2
					className='
            mt-6 
            text-center 
            text-3xl 
            font-bold 
            tracking-tight 
            text-gray-900
          '
				>
					WebMessenger
				</h2>
			</div>
			<AuthForm />
		</div>
	)
}

export default Auth

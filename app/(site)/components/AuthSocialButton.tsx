import { IconType } from 'react-icons'

interface AuthSocialButtonProps {
	icon: IconType
	onClick: () => void
}

const AuthSocialButton: React.FC<AuthSocialButtonProps> = ({
	icon: Icon,
	onClick,
}) => {
	return (
		<button
			type='button'
			onClick={onClick}
			className='
        inline-flex
        w-full 
        justify-center 
        rounded-md 
        bg-green-400
        px-4 
        py-2 
        text-black
        shadow-sm 
        border-b-4
        border-e-4
        border-green-900
        border-opacity-30
        hover:bg-green-500 
        focus:border-opacity-70
      '
		>
			<Icon />
		</button>
	)
}

export default AuthSocialButton

import clsx from 'clsx'

interface ButtonProps {
	type?: 'button' | 'submit' | 'reset' | undefined
	fullWidth?: boolean
	children?: React.ReactNode
	onClick?: () => void
	secondary?: boolean
	danger?: boolean
	disabled?: boolean
}

const Button: React.FC<ButtonProps> = ({
	type = 'button',
	fullWidth,
	children,
	onClick,
	secondary,
	danger,
	disabled,
}) => {
	return (
		<button
			onClick={onClick}
			type={type}
			disabled={disabled}
			className={clsx(
				`
        flex 
        justify-center 
        rounded-md 
        px-3 
        py-2 
        text-sm 
        font-semibold 
        focus-visible:outline 
        focus-visible:outline-2 
        focus-visible:outline-offset-2 
        border-b-4
        border-e-4
        border-opacity-30
        border-green-900
        `,
				disabled && 'opacity-50 cursor-default',
				fullWidth && 'w-full',
				secondary ? 'text-gray-900' : 'text-white',
				danger &&
					'bg-rose-500 hover:bg-rose-600 focus-visible:outline-rose-600',
				!secondary &&
					!danger &&
					'bg-green-400 hover:bg-green-500 focus-visible:outline-green-300'
			)}
		>
			{children}
		</button>
	)
}

export default Button

import clsx from 'clsx'
import Link from 'next/link'

interface DesktopItemProps {
	label: string
	icon: any
	href: string
	onClick?: () => void
	active?: boolean
}

const DesktopItem: React.FC<DesktopItemProps> = ({
	label,
	href,
	icon: Icon,
	active,
	onClick,
}) => {
	const handleClick = () => {
		if (onClick) {
			return onClick()
		}
	}

	return (
		<li onClick={handleClick} key={label}>
			<Link
				href={href}
				className={clsx(
					`
            group 
            flex 
            gap-x-3 
            rounded-md 
            p-3 
            text-sm 
            leading-6 
            font-semibold 
            text-gray-500 
            hover:text-black 
            hover:bg-green-300
          `,
					active &&
						'bg-green-300 text-black border-solid border-green-900 border-opacity-30 border-b-4 border-e-4'
				)}
			>
				<Icon className='h-6 w-6 shrink-0' aria-hidden='true' />
				<span className='sr-only'>{label}</span>
			</Link>
		</li>
	)
}

export default DesktopItem

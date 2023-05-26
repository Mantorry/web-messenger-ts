import Link from 'next/link'

import clsx from 'clsx'

interface MobileItemProps {
	href: string
	icon: any
	active?: boolean
	onClick?: () => void
}

const MobileItem: React.FC<MobileItemProps> = ({
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
		<Link
			onClick={handleClick}
			href={href}
			className={clsx(
				`
        group 
        flex 
        gap-x-3 
        text-sm 
        leading-6 
        font-semibold 
        w-full 
        justify-center 
        p-4 
        text-gray-500 
        hover:text-black 
        hover:bg-green-300
      `,
				active &&
					'bg-green-300 text-black border-solid border-green-900 border-opacity-30 border-t-4'
			)}
		>
			<Icon className='h-6 w-6' />
		</Link>
	)
}

export default MobileItem

'use client'

import useConversation from '@/app/hooks/useConversation'
import axios from 'axios'
import { CldUploadButton } from 'next-cloudinary'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { HiPaperAirplane, HiPhoto } from 'react-icons/hi2'
import MessageInput from './MessageInput'

const Form = () => {
	const { conversationId } = useConversation()

	const {
		register,
		handleSubmit,
		setValue,
		formState: { errors },
	} = useForm<FieldValues>({
		defaultValues: {
			message: '',
		},
	})

	const onSubmit: SubmitHandler<FieldValues> = data => {
		setValue('message', '', { shouldValidate: true })
		axios.post('/api/messages', {
			...data,
			conversationId: conversationId,
		})
	}

	const handleUpload = (result: any) => {
		axios.post('/api/messages', {
			image: result.info.secure_url,
			conversationId: conversationId,
		})
	}

	return (
		<div
			className='
        py-4 
        px-4 
        bg-green-100 
        border-t 
        flex 
        items-center 
        gap-2 
        lg:gap-4 
        w-full
      '
		>
			<CldUploadButton
				options={{ maxFiles: 1 }}
				onUpload={handleUpload}
				uploadPreset='wwlkuoir'
			>
				<HiPhoto size={30} className='text-green-500 ' />
			</CldUploadButton>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='flex items-center gap-2 lg:gap-4 w-full'
			>
				<div className=' flex items-center gap-2 lg:gap-4 w-full rounded-full border-4 border-green-400 border-opacity-20 border-solid hover:border-green-500 hover:border-opacity-30'>
					<MessageInput
						id='message'
						register={register}
						errors={errors}
						required
						placeholder='Отправить сообщение'
					/>
				</div>
				<button
					type='submit'
					className='
            rounded-full 
            p-2 
            bg-green-400
            cursor-pointer 
            hover:bg-green-500 
            transition
						border-e-4
						border-b-4
						border-opacity-50
						border-green-900
          '
				>
					<HiPaperAirplane size={18} className='text-white' />
				</button>
			</form>
		</div>
	)
}

export default Form

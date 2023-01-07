import React, { useRef, useState } from 'react'
import { Button, Container, Grid, Text } from '@nextui-org/react'
import Quill from '../../ui/quill/Quill'

const CreateLecture = () => {
	const [desc, setDesc] = useState<string>('')
	const [content, setContent] = useState<string>('')
	const [title, setTitle] = useState<string>('')

	const handleClick = () => {
		console.log()
	}

	return (
		<Grid.Container
			style={{ width: '100%' }}
			gap={4}
		>
			<Grid xs={12}>
				<Container
					css={{
						d: 'flex',
						ai: 'center',
						jc: 'space-between'
					}}
				>
					<Text h2>Create Lecture</Text>
					<Button
						onPress={handleClick}
						shadow
					>
						Create
					</Button>
				</Container>
			</Grid>
			<Grid xs={12}>
				<Quill
					type='Title'
					value={title}
					setValue={setTitle}
				/>
			</Grid>
			<Grid xs={12}>
				<Quill
					type='Description'
					value={desc}
					setValue={setDesc}
				/>
			</Grid>
			<Grid xs={12}>
				<Quill
					type='Content'
					value={content}
					setValue={setContent}
				/>
			</Grid>
		</Grid.Container>
	)
}

export default CreateLecture


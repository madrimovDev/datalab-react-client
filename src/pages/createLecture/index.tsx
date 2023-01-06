import { Text } from '@nextui-org/react'
import React from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

const CreateLecture = () => {
	return (
		<div>
			<Text>Description</Text>
			<ReactQuill
				modules={{
					toolbar: [
						['bold', 'italic', 'underline'], // toggled buttons
						['blockquote', 'code-block'],

						[{ list: 'ordered' }, { list: 'bullet' }],
						[{ script: 'sub' }, { script: 'super' }], // superscript/subscript
						[{ indent: '-1' }, { indent: '+1' }], // outdent/indent
						[{ direction: 'rtl' }], // text direction

						[{ header: [1, 2, 3, 4, 5, 6, false] }],

						[{ color: [] }, { background: [] }], // dropdown with defaults from theme
						[{ font: [] }],
						[{ align: [] }],

						['clean']
					]
				}}
				style={{
					width: '100%',
					height: '200px'
				}}
				theme='snow'
			/>
		</div>
	)
}

export default CreateLecture


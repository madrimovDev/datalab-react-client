import React from 'react'
import { Container, styled, Text } from '@nextui-org/react'
import hljs from 'highlight.js'

import 'react-quill/dist/quill.snow.css'
import 'highlight.js/styles/nord.css'

import ReactQuill from 'react-quill'

hljs.configure({
	throwUnescapedHTML: true,
	languages: ['javascript', 'html', 'css']
})

interface Props {
	type: 'Content' | 'Description' | 'Title'
	value: string
	setValue: React.Dispatch<React.SetStateAction<string>>
}

const Quill = ({ type, value, setValue }: Props) => {
	return (
		<Container
			css={{
				display: 'flex',
				flexDirection: 'column',
				gap: 10
			}}
		>
			<Text b>{type}</Text>
			<StyledQuill
				value={value}
				onChange={(value, delta, source, editor) => setValue(editor.getHTML())}
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
			/>
		</Container>
	)
}

const StyledQuill = styled(ReactQuill, {
	width: '100%'
})

export default Quill


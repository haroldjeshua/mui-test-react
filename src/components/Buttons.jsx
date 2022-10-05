import { Button, Box, Stack } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import SendIcon from '@mui/icons-material/Send'

const Buttons = () => {
  return (
	<Box sx={{ '& button': { m: 1} }}>
		<Button variant="text">Hello World</Button>
		<Button variant="contained">Hello World</Button>
		<Button variant="contained" disableElevation>Hello World</Button>
		<Button variant="outlined" color="secondary" onClick={() => {alert('wassup')}}>Click me</Button>

		<div>
			<Button size="small">Small</Button>
			<Button size="medium">Medium</Button>
			<Button size="large">Large</Button>
		</div>

		<div>
			<Button variant="outlined" size="small">
				Small
			</Button>
			<Button variant="outlined" size="medium">
				Medium
			</Button>
			<Button variant="outlined" size="large">
				Large
			</Button>
		</div>

		{/* With icons */}
		<Stack direction="row" spacing={2}>
			<Button variant="outlined" startIcon={<DeleteIcon />}>
				Delete
			</Button>
			<Button variant="contained" endIcon={<SendIcon />}>
				Send
			</Button>
	</Stack>
	</Box>
  )
}

export default Buttons
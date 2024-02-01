import { Box, Button, TextField } from '@mui/material'
import { useState } from 'react'

function CustomForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()

    console.log({ name: name, email: email })

  }
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <form onSubmit={handleSubmit}>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1 }}>
          <TextField
            required
            size='small'
            label="Name"
            variant="outlined"
            margin="normal"
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            required
            size='small'
            label="Email"
            variant="outlined"
            margin="normal"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Button type="submit" variant='outlined'>Submit</Button>
        </Box>
      </form>
    </Box>
  )
}

export default CustomForm
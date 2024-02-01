import { Box, Button, Typography } from '@mui/material'
import { useState } from 'react'

function Count() {
  const [count, setCount] = useState(0)

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <Typography>Count: {count}</Typography>
      <Box sx={{ display: 'flex', gap: 1 }}>
        <Button onClick={() => setCount(count + 1)} variant="outlined">Increase</Button>
        <Button onClick={() => setCount(count - 1)} variant="outlined">Decrease</Button>
      </Box>
    </Box>
  )
}

export default Count
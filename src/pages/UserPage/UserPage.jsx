import Box from '@mui/material/Box'
import Typography  from '@mui/material/Typography'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Avatar } from '@mui/material'

function UserPage({ mockUserData }) {
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      paddingTop: '16px'
    }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Avatar</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mockUserData.map((user) => (
              <TableRow
                key={user.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell>
                  <Avatar alt={user.name} src={user.avatar} />
                </TableCell>
                <TableCell component="th" scope="row">
                  {user.name}
                </TableCell>
                <TableCell>{user.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default UserPage

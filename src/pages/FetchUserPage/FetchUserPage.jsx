import { useEffect, useState } from 'react'
import { fetchUsersAPI } from '../../apis'
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, tableCellClasses } from '@mui/material'
import styled from '@emotion/styled'

function FetchUserPage() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetchUsersAPI().then(users => setUsers(users))
  }, [])

  const StyledTableCell = styled(TableCell)(() => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: '#3b3c3d',
      color: 'white'
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14
    }
  }))

  const StyledTableRow = styled(TableRow)(() => ({
    '&:nth-of-type(odd)': {
      backgroundColor: '#f5f4f1'
    },
    '&:last-child td, &:last-child th': {
      border: 0
    }
  }))

  return (
    <Box>
      <Typography sx={{
        display: 'flex',
        justifyContent: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        paddingBottom: 3
      }}>
        List Users
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="right">Email</StyledTableCell>
              <StyledTableCell align="right">Address</StyledTableCell>
              <StyledTableCell align="right">Phone</StyledTableCell>
              <StyledTableCell align="right">Company</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users?.map((user) => (
              <StyledTableRow key={user.id}>
                <StyledTableCell component="th" scope="row">
                  {user.name}
                </StyledTableCell>
                <StyledTableCell align="right">{user.email}</StyledTableCell>
                <StyledTableCell align="right">{user.address.suite} {user.address.street} {user.address.city}</StyledTableCell>
                <StyledTableCell align="right">{user.phone}</StyledTableCell>
                <StyledTableCell align="right">{user.company.name}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default FetchUserPage
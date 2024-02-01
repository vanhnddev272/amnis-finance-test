import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import UserPage from '../UserPage/UserPage'
import { mockData } from '../../apis/mock-data'
import Count from '../Count/Count'
import CustomForm from '../CustomForm/CustomForm'
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <Box>
      <Typography sx={{
        display: 'flex',
        justifyContent: 'center',
        fontSize: 30,
        fontWeight: 'bold'
      }}>
        Amnis Finance Test
      </Typography>
      <Typography sx={{ fontWeight: 'bold', paddingTop: 5 }}>Section 1:</Typography>
      <Box sx={{
        display: 'flex',
        justifyContent: 'center'
      }}>
        <UserPage mockUserData={mockData.users}>User page</UserPage>
      </Box>
      <Typography sx={{ fontWeight: 'bold', paddingTop: 5 }}>Section 2:</Typography>
      <Count />
      <Typography sx={{ fontWeight: 'bold', paddingTop: 5 }}>Section 3:</Typography>
      <CustomForm />
      <Box sx={{ display: 'flex', flexDirection: 'row', paddingTop: 5, gap: 2 }}>
        <Typography sx={{ fontWeight: 'bold'}}>Section 4:</Typography>
        <Link to={'/users'}>Go to users page</Link>
      </Box>
    </Box>
  )
}

export default HomePage

import './App.css'
import Box from '@mui/material/Box'
import {
  TextField,
  Typography,
  Card,
  CardActions,
  CardContent,
  Checkbox,
  Button,
} from '@mui/material'

export default function App() {
  return (
    <div className='App'>
      <Card sx={{ maxWidth: 500, backgroundColor: '#fff', height: '84vh' }}>
        <CardContent>
          <Box>
            <Box sx={{ marginTop: 12 }}>
              <Typography variant='h5' component='h2'>
                MATERIO
              </Typography>
            </Box>
            <Box>
              <Typography variant='h5' component='h2'>
                Welcome to Materio! 👋🏻
              </Typography>
            </Box>
            <Box>
              <Typography
                color='text.secondary'
                sx={{
                  paddingLeft: 0.2,
                  display: 'flex',

                  flexDirection: 'row',
                }}
              >
                Please sign-in to your account and start the adventure
              </Typography>
            </Box>

            <Box
              sx={{
                marginTop: 4,
                paddingLeft: 7,
                width: 300,
                gap: 2,
                display: 'flex',

                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <TextField required fullWidth label='Email' variant='outlined' />
              <TextField
                required
                fullWidth
                label='Password'
                variant='outlined'
              />
            </Box>
            <Box
              sx={{
                marginTop: 0.2,
                paddingLeft: 5,
                width: 200,
                gap: 2,
                display: 'flex',

                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Checkbox />
              <Typography>Remember Me</Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
      {/* <Box sx={{}}>
        <Typography variant="h3" component="h2">
          h1. Heading
        </Typography>
        <TextField />
      </Box> */}
    </div>
  )
}

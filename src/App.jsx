
import './App.css'
import { Typography } from '@mui/material'
import MediaCard from './assets/card.jsx'


function App() {


  return (
    <>

    <Typography
      variant="h1"
      component="h3"
      gutterBottom
      sx={{ color: 'red' }}
    >Apfelstrudel</Typography>
    <Typography
      variant="h1"
      component="h3"
      gutterBottom
      sx={{ color: 'cream' }}
    >Apfelstrudel</Typography>
    <Typography
      variant="h1"
      component="h3"
      sx={{ color: 'red' }}
    >Apfelstrudel</Typography>
    {/*<MediaCard/>*/}
    </>


  )
}



export default App

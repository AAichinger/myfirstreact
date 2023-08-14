import { Typography } from "@mui/material"

function Hero() {
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
  </>
  )
}

export default Hero

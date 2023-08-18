import { CircularProgress, Container } from '@mui/material'

export const LoadingFullPage = () => {
  return (
    <Container maxWidth='sm'>
      <CircularProgress />
    </Container>
  )
}

export default LoadingFullPage

import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Routes from './routes'
import { BrowserRouter } from 'react-router-dom'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
      keepPreviousData: true
    }
  }
})

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <div className='App'>
          <Routes />
        </div>
      </QueryClientProvider>
    </BrowserRouter>
  )
}

export default App

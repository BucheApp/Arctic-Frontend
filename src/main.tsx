import { StrictMode,createContext } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

const apiInfo = {
  baseURL:"localhost:8080"
}

const ApiInfoContext = createContext(apiInfo);

createRoot(document.getElementById('root')!).render(
  <ApiInfoContext.Provider value={apiInfo}>
    <StrictMode>
      <App />
    </StrictMode>
  </ApiInfoContext.Provider>
)

export default ApiInfoContext
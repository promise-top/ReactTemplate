import {  ConfigProvider } from 'antd';
import theme from './theme'
import { useRoutes,useNavigate } from 'react-router-dom'
import routes from './router'

function App() {
  const element = useRoutes(routes)
  const navigate = useNavigate()
  return (
    <ConfigProvider
      theme={theme}
    >
      {element}
    </ConfigProvider>
  )
}

export default App

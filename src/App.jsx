import { Button, ConfigProvider } from 'antd';
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
      <Button type="primary" onClick={()=>navigate('/home')} >Home</Button>
      <Button style={{marginLeft:'10px'}} onClick={()=>navigate('/about')}>About</Button>
      {element}
    </ConfigProvider>
  )
}

export default App

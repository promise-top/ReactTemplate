import React from 'react'
import {Button} from 'antd'
import { useNavigate ,Outlet} from 'react-router-dom'

  export default function Layout() {
  const navigate = useNavigate()
  return (
    <div>
      <h1>Header</h1>
      <Button type="primary" onClick={()=>navigate('/')} >Home</Button>
      <Button style={{marginLeft:'10px'}} onClick={()=>navigate('/about')}>About</Button>
      <div className='p-10 h-80'>
        <Outlet />
      </div>
      <h1>Footer</h1>
    </div>
  )
}

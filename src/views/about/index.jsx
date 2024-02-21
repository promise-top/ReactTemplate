import React from 'react'
import { Button } from 'antd'
import {useNavigate,Outlet} from 'react-router-dom'
export default function About() {
  const navigate = useNavigate() 
  const navigatePage = (path)=>{
    navigate(path)
  }
  return (
    <div>
      <h1>About</h1>
      <br />
      <Button onClick={() => navigatePage('/about')}>跳转About-1</Button>
      <Button onClick={() => navigatePage('about2')}>跳转About-2</Button>
      <br />
      <Outlet />
    </div>
  )
}

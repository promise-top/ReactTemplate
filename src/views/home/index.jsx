import React, { useEffect } from 'react'
import { getTestApi } from '@/api'
import { Button } from 'antd'
import {useNavigate} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { incremented, decremented } from '@/store/slices/useCountSlice'
export default function Home() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    getData()
  }, [])

  const count = useSelector((state) => state.counter.value)

  const getData = async () => {
    const { data: res } = await getTestApi()
  }
  return (
    <>
      <br />
      <br />
      <br />
      <h1>Home</h1>
      <br />
     
      <br />
      <br />
      <br />
      <br />
      <hr />
      <br />
      <Button onClick={() => dispatch(incremented())}>Count 自增</Button>
      <Button onClick={() => dispatch(decremented())}>Count 自减</Button>
      <br />
      <br />
      <h1>Count: {count}</h1>
    </>
  )
}

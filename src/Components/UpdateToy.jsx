import React from 'react'
import { useLoaderData } from 'react-router-dom'

const UpdateToy = () => {
    const data = useLoaderData()
    console.log({data});
  return (
    <div>UpdateToy</div>
  )
}

export default UpdateToy
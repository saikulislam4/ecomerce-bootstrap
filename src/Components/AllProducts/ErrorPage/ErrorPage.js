import React from 'react'
import { Button, NavLink } from 'react-bootstrap'

const ErrorPage = () => {
  return (
    <div className='error_page'>
        <div className='text'>
        <h1>Oppos !</h1>
        <h2> sorry 404 not found</h2>
        <NavLink href='/'>

        <Button className='common_button'>home</Button>
        </NavLink>
        </div>

    </div>
  )
}

export default ErrorPage
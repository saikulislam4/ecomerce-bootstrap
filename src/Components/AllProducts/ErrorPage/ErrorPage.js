import React from 'react'
import { Button} from 'react-bootstrap'
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className='error_page'>
        <div className='text'>
        <h1>Oppos !</h1>
        <h2> sorry 404 not found</h2>
        <Link to ="/">
        <Button className='common_button'>home</Button>
        </Link>
        </div>

    </div>
  )
}

export default ErrorPage
import React from 'react'
import Spinner from 'react-bootstrap/Spinner';

const SpinnerTropical = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
        <Spinner animation="border" variant="success" /> <p>Cargando</p>
    </div>
    
  )
}

export default SpinnerTropical
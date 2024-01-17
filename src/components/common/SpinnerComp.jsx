// import React from 'react'
import Spinner from 'react-bootstrap/Spinner'

function SpinnerComp() {
  return <>
  <Spinner style={{margin:25}} animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  </>
}

export default SpinnerComp

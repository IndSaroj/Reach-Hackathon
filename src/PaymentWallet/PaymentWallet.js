import React from 'react'
import { Navigate } from 'react-router-dom'

export default function PaymentWallet() {
    function Logout(){
        sessionStorage.removeItem('token')
    }
    if (sessionStorage.getItem('token')) {
  return (
    <div>
    <div className='row mb-3'>
          <div className='d-grid gap-2 d-md-flex justify-content-md-center'>
             <a className='btn text-light' style={{ backgroundColor: "#AD1982"}} href='/login' type="submit" onClick={Logout}>Logout</a>
             </div>
             </div>
        <img src='./wallet.png' alt='home1' style={{}} height='300' width='1400' />
      <img src='./wallet1.png' alt='home' width='1400' />
      <img src='./wallet2.png' alt='home' width='1400' />
    </div>
  )

}
return <Navigate to="/login" />
}

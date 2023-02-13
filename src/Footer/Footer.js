import React from 'react'

export default function Footer () {
  return (
    <div>
        <div>
   
      <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div className="col-md-4 d-flex align-items-center">
            <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
              {/* <svg className="bi" width="30" height="24"><use xlink:href="#bootstrap" /></svg> */}
            </a>
            <span className="mb-3 mb-md-0 text-muted">&copy; 2022 Natwest, Inc</span>
          </div>

          <ul className="nav col-md-2 align-item-center list-unstyled d-flex fixed-bottom">
          <li className="ms-3"><a className="text-muted" href="https://www.facebook.com/"><img src='./facebook.png' alt='facebook' width="24" height="24"/></a></li>
            <li className="ms-3"><a className="text-muted" href="https://twitter.com/"><img src='./twitter.png' alt='twitter' width="24" height="24"/></a></li>
            <li className="ms-3"><a className="text-muted" href="https://in.linkedin.com/"><img src='./linkdin.png' alt='linkdin' width="24" height="24"/></a></li>

          </ul>
        </footer>
      </div>
    </div>
    </div>
  )
}

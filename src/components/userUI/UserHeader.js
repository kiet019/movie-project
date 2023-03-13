import React from 'react'

export default function UserHeader() {
  return (
    <div className="header">
      <a className="switch-mode" href="/home">
      <span className="material-icons logo">movie</span>
      </a>
      <div className="search-box">
        <form>
          <input className="text-input" placeholder="Search your movie..."/>
            <span className="material-icons search">search</span>
        </form>
      </div>
      <div className="login-user">
        <span className="material-icons login">account_circle</span>
      </div>
    </div>
  )
}

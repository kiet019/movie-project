import React from 'react'
import AdminBody from './AdminBody'
import AdminFooter from './AdminFooter'
import AdminHeader from './AdminHeader'


export default function AdminUI() {
  return (
    <div>
        <AdminHeader/>
        <AdminBody/>
        <AdminFooter/>
    </div>
  )
}

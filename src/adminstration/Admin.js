import React from 'react'
import { Link } from 'react-router-dom'

export default function Admin() {
  return (
    <>
      <h3>Admin</h3>
      <ul>
        <li>
          <Link to="/manage-categories">Manage categories</Link>
        </li>
        <li>
          <Link to="/manage-products">Manage products</Link>
        </li>
      </ul>
    </>
  )
}

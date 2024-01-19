import React from 'react'

import Button from './Button'

import './styles/Header.css'

export default function Header() {
  return (
    <header className='header'>
        <h1>Task List</h1>
        <Button className='btn-add' value='Add' />
    </header>
  )
}

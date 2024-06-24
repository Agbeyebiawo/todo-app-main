import React from 'react'
import Theme from '../theme/Theme'
import './style.css'
import { stylesVariable } from '../../styles'

const Header = () => {
  return (
    <div className='header'>
        <h1 style={{color: stylesVariable.Fontcolors.white}} className='title'>TODO</h1>
        <Theme />
    </div>
  )
}

export default Header
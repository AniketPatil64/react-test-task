import React from 'react'
import logoSVG from '../../../src/assets/optimas.svg'
import menuBar from '../../../src/assets/policy_top_navigation.svg'
import userIcon from '../../../src/assets/Group 40394274.svg'
import style from '../loginPage/Login.css'
import tableStyle from './Table.css'
function tableHeader() {
  return (
    <div className='menu-bar'>
    <div className='logo_image'>
        <div className='logo table-logo'>
            <img src={logoSVG} alt='Logo' />
        </div>
    </div>
    <div className='menu-bar'>
        <div className='table-logo'>
            <img src={menuBar} alt='Logo' />
        </div>
    </div>
    <div className='user-notification'>
    <div className='table-logo'>
            <img src={userIcon} alt='Logo' />
        </div>
    </div>
</div>
  )
}

export default tableHeader
import React from 'react'
import styles from '../Styles/header.module.css'
import '../Styles/GlobalStyle.css'
import clsx from 'clsx'
import { Routes, Route, Link, NavLink } from 'react-router-dom'
import { Wesushi, Wetea, Weshop, Welotto, Wecake, Westyle, Wefix, Wescan } from '../Pages/Export'
import { FaShoppingCart } from 'react-icons/fa';
import FormRegister from './FormRegister'
import FormLogin from './FormLogin'

function Header() {
    const handleClicklog = () => {
        const a = document.querySelector('.formloginparent')
        a.classList.add('open')
    }
    const handleClickres = () => {
        const a = document.querySelector('.formregisterparent')
        a.classList.add('open')
    }
    const HeaderNav = ['Wesushi', 'Wecake', 'Wetea', 'Weshop', 'Westyle', 'Wescan', 'Wefix', 'Welotto']
    return (
        <div>
            <header className={clsx(styles.header, 'd-flex')}>
                <div>
                    <Link to="/" className={clsx(styles.header_logo)}>
                        <img className={clsx(styles.header_logoimg)} src="https://www.weluck.vn/img/logo-weluck-dark.07935499.png" alt="Logo"></img>
                    </Link>
                    <div className="header_btn">
                        <button onClick={handleClicklog}className={clsx(styles.header_login)}>Đăng nhập</button>
                    </div>

                </div>
                <div className="header_nav d-flex">
                    <ul className="header_nav_list d-flex">
                        {
                            HeaderNav.map((page, index) => {
                                return (
                                    <li key={index} className={clsx(styles.header_nav_item)}>
                                        <NavLink exact="true" to={`/${page}`} className={clsx(styles.header_nav_link)} activeclassname={clsx(styles.active)}>{page.toUpperCase()}</NavLink>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className={clsx(styles.header_icon, 'd-flex')}>
                    <FaShoppingCart />
                </div>
                <div className="header_btn">
                    <button onClick={handleClickres} className={clsx(styles.header_registration)}>Đăng Ký</button>
                </div>
                <FormRegister />
                <FormLogin />
            </header>
            <div>
                <Routes>
                    <Route path="/" element={<Wesushi number="1"/>} />
                    <Route path="/Wesushi" element={<Wesushi number="1"/>} />
                    <Route path="/Wecake" element={<Wecake number="2"/>} />
                    <Route path="/Wetea" element={<Wetea number="3"/>} />
                    <Route path="/Weshop" element={<Weshop number="4"/>} />
                    <Route path="/Westyle" element={<Westyle number="5"/>} />
                    <Route path="/Wescan" element={<Wescan number="6"/>} />
                    <Route path="/Wefix" element={<Wefix number="7"/>} />
                    <Route path="/Welotto" element={<Welotto number="8"/>} />
                </Routes>
            </div>
        </div>
    )
}

export default React.memo(Header);
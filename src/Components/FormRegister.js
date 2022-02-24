import React from 'react'
import styles from '../Styles/FormRegister.module.css'
import clsx from 'clsx'
import { BsFacebook, BsGoogle } from 'react-icons/bs';
import { FaTimes} from 'react-icons/fa';

function FormRegister() {
    const handleClickres = () => {
        const a = document.querySelector('.formregisterparent')
        a.classList.remove('open')
    }
    return (
        <div className="formregisterparent">
            <div className={clsx(styles.formregister)}>
                <div className={clsx(styles.formregisterimg)}>
                    <img className={clsx(styles.formregisterimg)} src="https://www.weluck.vn/img/banner-signup.0dd5ee94.jpg" alt="img-form"></img>
                </div>
                <div className={clsx(styles.formregisterimg)}>
                    <h3 className={clsx(styles.formhead)}>ĐĂNG KÝ</h3>
                    <span onClick={handleClickres}className={clsx(styles.times)}><FaTimes /></span>
                    <h4 className={clsx(styles.formunhead)}>Đăng ký với tài khoản</h4>
                    <div className={clsx(styles.formheadbtn)}>
                        <button className={clsx(styles.formbtnfb)}>
                            <BsFacebook />
                            <p className={clsx(styles.formicon)}>FACEBOOK</p>

                        </button>
                        <button className={clsx(styles.formbtngg)}>
                            <BsGoogle />
                            <p className={clsx(styles.formicon)}>GOOGLE</p>
                        </button>
                    </div>
                    <h6 className={styles.or}>hoặc</h6>
                    <div className={clsx(styles.forminput)}>
                        <input className={clsx(styles.input)} placeholder="Số điện thoại" />
                        <input className={clsx(styles.input)} placeholder="Mật khẩu" />
                        <input className={clsx(styles.input)} placeholder="Nhập lại mật khẩu" />
                        <input className={clsx(styles.input)} placeholder="Mã giới thiệu" />
                    </div>
                    <button className={clsx(styles.footerbtn)}>ĐĂNG KÝ</button>
                    <p>Bằng cách tiếp tục, bạn sẽ đồng ý rằng đã đọc và hiểu các Chính sách quyền riêng tư.</p>
                    <h6 className={clsx(styles.footer_text)}>Bạn đã có tài khoản ?</h6>
                    <button className={clsx(styles.footerbtnacsess)}>ĐĂNG NHẬP</button>

                </div>
            </div>
        </div>
    )
}

export default FormRegister;
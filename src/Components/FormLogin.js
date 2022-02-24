import React from 'react'
import styles from '../Styles/FormRegister.module.css'
import clsx from 'clsx'
import { BsFacebook, BsGoogle } from 'react-icons/bs';
import { FaTimes } from 'react-icons/fa';

function FormRegister() {
    const handleClickres = () => {
        const a = document.querySelector('.formloginparent')
        a.classList.remove('open')
    }
    return (
        <div className="formloginparent">
            <div className={clsx(styles.formregister)}>
                <div className={clsx(styles.formregisterimg)}>
                    <img className={clsx(styles.formregisterimg)} src="https://www.weluck.vn/img/banner-signup.0dd5ee94.jpg" alt="img-form"></img>
                </div>
                <div className={clsx(styles.formregisterimg)}>
                    <h3 className={clsx(styles.formhead)}>ĐĂNG NHẬP</h3>
                    <span onClick={handleClickres} className={clsx(styles.times)}><FaTimes /></span>
                    <p className={clsx(styles.paragraph_head)}>Hãy đăng nhập để sử dụng tất cả ứng dụng có trên Welife</p>
                    <h4 className={clsx(styles.formunhead)}>Đăng nhập với tài khoản</h4>

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
                    </div>
                    <button className={clsx(styles.footerbtnacsess)}>ĐĂNG NHẬP</button>
                    <p>Bằng cách tiếp tục, bạn sẽ đồng ý rằng đã đọc và hiểu các Chính sách quyền riêng tư.</p>
                </div>
            </div>
        </div>
    )
}

export default FormRegister;
import React from 'react'
import styles from '../Styles/Infoitem.module.css'
import clsx from 'clsx'
import {FaTimes} from 'react-icons/fa';
import {useEffect, useState} from 'react'

const Pages = ['Wesushi', 'Wecake', 'Wetea', 'Weshop', 'Westyle', 'Wescan', 'Wefix', 'Welotto']

function Infoitem({i, number}) {
const [data, setdata] = useState([])
    useEffect(() => {
        fetch(`https://testapi.io/api/Heoui/https://testapi.io/api/Heoui/${Pages[number - 1]}`)
            .then((courses) => {
                return courses.json();
            })
            .then((posts) => {
                return setdata(posts[i])
            })
    },[i])

    const handleClickres = () => {

        const a = document.querySelector('.containerinfo')
        a.classList.remove('open')
    }
    const [numberI, setNumberI] = useState(1)
    const handleIncrease = () => { 
        setNumberI(numberI+1)
    }
    const handleDecrease = () => {
        if(numberI <= 0) {
            setNumberI(0)
        } else
        setNumberI(numberI-1)
    }
    return (
        
        
            <div className={clsx(styles.info)}>
           
                <div className="info_left">
                    <h1 className={styles.headinfo}>CHI TIẾT SẢN PHẨM</h1>
                    <img className={styles.infoimg} src={data.url} alt="img"></img>
                    <h1 className={styles.infotext}>Thông tin sản phẩm</h1>
                    <p className={styles.infomation}>haha</p>
                </div>
                <div className={styles.info_right}>
                    <span onClick={handleClickres}className={styles.times}><FaTimes/></span>
                    <h1 className={styles.headinfo}>{data.title}</h1>
                    <div className={styles.infomationprice}>
                        <h1 className={styles.infoprice}>Giá bán: </h1>
                        <h1 className={styles.infoprices}>{data.price}</h1>
                    </div>
                    <h1 className={styles.infonumber}>Số lượng: </h1>
                    <div className={styles.btnnumber}>
                        <button onClick={handleDecrease} className={styles.btndescrease}>-</button>
                        <p className={styles.number}>{numberI}</p>
                        <button onClick={handleIncrease} className={styles.btnincrease}>+</button>
                    </div>
                    <button className={styles.btnbuy}>CHỌN MUA</button>
                </div>
            </div>
    

    )
}

export default Infoitem;
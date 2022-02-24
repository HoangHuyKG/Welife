import React from 'react'
import { useEffect, useState} from 'react';
import Infoitem from "./Infoitem"

const Pages = ['Wesushi', 'Wecake', 'Wetea', 'Weshop', 'Westyle', 'Wescan', 'Wefix', 'Welotto']
function Item({ number }) {
    const [i, seti] = useState(0)
    useEffect(()=>{
        const h = document.querySelectorAll(".item")
        h.forEach(a => {
            a.onclick = () => {
                seti(a.dataset.index)
            }
        })
    })
    const handleClickres = () => {
        const a = document.querySelector('.containerinfo')
        a.classList.add('open')
    }
    const [data, setdata] = useState([])
    useEffect(() => {
        fetch(`https://testapi.io/api/Heoui/https://testapi.io/api/Heoui/${Pages[number - 1]}`)
            .then((courses) => {
                return courses.json();
            })
            .then((posts) => {
                return setdata(posts)
            })
    }, [number])
    return (

        <div className="row">
            <div className="containerinfo">
                <Infoitem i={i} number={number}/>
            </div>
            {data.map((data, i) => (

                <div className="col" key={data.id}>
                    
                    <div className="item" data-index={i} >
                        <div className="infoproduct">

                        </div>
                        
                        <div>
                            <img className="img" onClick={handleClickres} src={data.url} alt="img"></img>
                        </div>
                        <div className="title">
                            <h1 className="title">{data.title}</h1>
                        </div>
                        <div className="price">
                            <h1 className="price">{data.price}</h1>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Item;
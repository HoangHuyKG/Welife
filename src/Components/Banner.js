import React from 'react'
import { useEffect, useState } from 'react'
function Banner({ number }) {
    const [Banner, setBanner] = useState([])
    useEffect(() => {
        fetch("https://testapi.io/api/Heoui/https://testapi.io/api/Heoui/Banner")
        .then((courses) => {
            return courses.json();
        })
        .then((posts) => {
            return setBanner(posts[number-1])
        })
    }, [number])
    return ( 
        <div>        
            <div className="Banner">
                <img className="Banner" src={Banner.url} alt="Banner"></img>
            </div>
        </div>
    )

}


export default Banner;
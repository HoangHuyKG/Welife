import Item from '../Components/Item';
import Banner from '../Components/Banner'
import React from 'react'
function Wesushi({ number }) {

    return (
        <div className="content">
            <Banner number={number} />
            <div className="container">
                <Item number={number} />
            </div>
        </div>
    )
}

export default Wesushi;
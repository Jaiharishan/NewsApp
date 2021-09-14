import React from 'react'
import ScrollBox from './ScrollBox';


const NewsList = ({header, news, color}) => {

   
    return (
        <>
        <div className='h4 mx-2 mt-5 d-flex align-items-center'><div className='mx-1' style={{marginTop: '3px', width:'2px', height: '20px', background: color}}></div>{header}</div>

        <ScrollBox children = {news} color = {color} />

        </>
    )
}

export default NewsList

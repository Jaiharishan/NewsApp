import React from 'react'
import News from './News';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};


const NewsList = ({header, news, color}) => {

    return (
        <>
        <div className='h4 mx-2 mt-5 d-flex align-items-center'><div className='mx-1' style={{marginTop: '3px', width:'2px', height: '20px', background: color}}></div>{header}</div>
        {news && <div className='mx-2 d-flex' style={{overflowX: 'scroll'}}>
            {
                news && news.map((n, index) => (
                    <News key = {index} news = {n} header = {header} />
                ))
            }
            
        </div>}
        </>
    )
}

export default NewsList

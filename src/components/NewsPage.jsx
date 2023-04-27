import React from 'react'
import styles from '../style'
import Navbar from './Navbar'


const NewsPage = () => (
    
    <div className="bg-withe w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar></Navbar>
      </div>
    </div>
  </div>    

)

export default NewsPage
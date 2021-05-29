import React from 'react'
import Link from 'next/link'
import styles from './MenuItem2.module.scss'
// import ReactDOM from "react-dom";


export default function MenuItem2({title,remote_url,size}){
    const linkUrl = `/shop/${title}`
    return(
      <div className={styles.wrapper}>
      <Card
      
        img={remote_url}
        title={title}
        // description="歡迎挑選內有折扣"
        
      />
     
      
      
     
    </div>
     
    )
    
}

function Card(props) {
  return (
    
    <div className={styles.card}>
    <div className={styles.card__body}>
      <img src={props.img} class={styles.card__image} />
      <h2 className={styles.card__title}>{props.title}</h2>
    
    </div>
    <button className={styles.card__btn}>BUY</button>
  </div>
  );
  
}

// ReactDOM.render(<App />, document.getElementById("root"));
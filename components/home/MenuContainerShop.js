import styles from './MenuContainer.module.scss'
import styles2 from './MenuItem2.module.scss'
import{useState} from 'react'
// import React, { useState } from "react";
import ReactPaginate from 'react-paginate';
import MenuItem2 from './MenuItem2'


export default function MenuContainerShop({products,category}){
    const [currentPage, setCurrentPage] = useState(0);
  
  const PER_PAGE = 10;
  const offset = currentPage * PER_PAGE;

  const currentPageData = products.slice(offset,offset + PER_PAGE);

  const changePage = ({selected})=>{
    setCurrentPage(selected);
  }
  
const title = category.toUpperCase();
  const pageCount = Math.ceil(products.length / PER_PAGE);
    return(
      
        <div className={styles.homepage}>
          <h1 className={styles.products_header__1iU36}>{title} Page</h1>
        <div className={styles.menuContainer_menu}>
          {currentPageData.map(
              ({ name:title,remote_url,cid,size})=> (
              <MenuItem2 key={cid} title={title} remote_url={remote_url} size={size}/>
              
          ))}
      
        </div>
        
       
      
      <ReactPaginate
        previousLabel={"← Previous"}
        nextLabel={"Next →"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={styles2.pagination}
        previousLinkClassName={styles2.pagination__link}
        nextLinkClassName={styles2.pagination__link}
        disabledClassName={styles2.pagination__link_disabled}
        activeClassName={styles2.pagination__link_active}
      />
      
      </div>
        
        
    )
}
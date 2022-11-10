import React, { useEffect } from 'react'
import styles from '../styles/Blog.module.css'
import Link from 'next/link'
import { useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';

const Blogs = (props) => {
  
  const [blogs, setblogs] = useState(props.myprops);
  //useEffect(()=>{
    //console.log("useefect is running")
   // fetch('http://localhost:3000/api/blogs').then((a)=>{
      //return a.json() })
      //.then((parsed)=>{
        //console.log(parsed)
        //setblogs(parsed);
      //})
    
 // },[])
  return (
    <div className={styles.container}>
    <main className={styles.main}>
   {blogs.map((blogItems)=>{
    return <div  key={blogItems.slug}className={styles.blogItem}>
       <Link href={`/blogpost/${blogItems.slug}`}>
       <h3>{blogItems.title} </h3></Link>
       <p>{blogItems.metasent.substr(0,150)} </p>
       <div >
            <Link href={`/blogpost/${blogItems.slug}`}><button className={styles.btn} type='submit'>Read More</button></Link>
           </div>
     </div>
   })}
   </main>
    </div>
  
  )
  }
export default Blogs;

export async function getServerSideProps(context) {

  let data= await  fetch('http://localhost:3000/api/blogs')
  let myprops=await data.json()
  return {
    props: {myprops}, // will be passed to the page component as props
  }
}
import React,{useState,useEffect} from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/BlogPost.module.css'


const Slug = (props) => {
  function createMarkup(content) {
    return {__html: content};
  }
  const [blogs, setblogs] = useState(props.myBlogs);
 
    // useEffect(()=>{
    //   if(!router.isReady) return;
    //   
    //  .then((a)=>{
    //     return a.json() })
    //     .then((parsed)=>{
    //       console.log(parsed)
    //       setblogs(parsed);
    //     })
      
    // },[router.isReady])
  return (
    <div className={styles.container}>
    <main className={styles.main}>
    <div className={styles.card}>  
    <h2>{blogs && blogs.title}</h2>
    <hr />
    {blogs && <div dangerouslySetInnerHTML={createMarkup(blogs.content)} />}
    </div>
    </main>
    </div>
  
  )
}
export async function getServerSideProps(context) {
  // const router=useRouter(); 
  const {slug}=context.query;
  let data= await   fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
  let myBlogs=await data.json()
  return {
    props: {myBlogs}, // will be passed to the page component as props
  }
}

export default Slug;
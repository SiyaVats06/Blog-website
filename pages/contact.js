import React,{useState} from 'react'
import styles from '../styles/Contact.module.css' 


const Contact = () => {
  
const [namee, setname] = useState('')
const [email, setemail] = useState('')
 
const handleSubmit=(e)=>{
  e.preventDefault();

  const data = { namee,email};

fetch('http://localhost:3000/api/postcontact', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
  .then((response) => response.json())
  .then((data) => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });

} 
  const handleChange=(e)=>{
    console.log("handlechange is working")
   if(e.target.name=="namee"){
    setname(e.target.value)
   }
   else if(e.target.name=="email"){
    setemail(e.target.value)
   }
  }
  

  return (
      <div className={styles.container}>
    <main className={styles.main}>
    <h1>Conatct US</h1>
    <form onSubmit={handleSubmit} >
    <div className={styles.entry}>
    <label className={styles.label} htmlFor="name" class="form-label">Name:</label>
    <input className={styles.input}  onChange={handleChange} value={namee} type="text" class="form-control" id="name" name="namee"  aria-describedby="emailHelp" placeholder='Enter your name'/>
  </div>
  <div className={styles.entry}>
    <label className={styles.label} htmlFor="email" class="form-label">Email-id:</label>
    <input className={styles.input}  onChange={handleChange} value={email} type="email" class="form-control" id="email" name="email" aria-describedby="emailHelp" placeholder='Enter your email'/>
  </div>
  <button  className={styles.btn} type="submit" class="btn btn-primary">Submit</button>
</form>
</main>
    </div>
  )
  
  }

export default Contact
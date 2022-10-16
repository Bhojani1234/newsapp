import React, { useState } from 'react'

export const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [allEntry, setAllEntry] = useState([]);

  const submitForm = (e) => {
    e.preventDefault();
    const newEntry = { email: email, password: password };
    setAllEntry([...allEntry, newEntry]);
    console.log(allEntry);
  }
  return (
    <div className='my-3'>
      <form onSubmit={submitForm}>
        <div className="mb-3">
        <h3 className='my-3 '>Signup for NewsApp</h3>
        <div className="mb-3">
          <label htmlFor="Name" className="form-label">Name</label>
          <input type="text" className="form-control" id="Name" name='name' value={name} onChange={(e) => setName(e.target.value)} aria-describedby="emailHelp" />
        </div>
          <label htmlFor="Email address" className="form-label">Email address</label>
          <input type="email" className="form-control" id="Email address" name='email' value={email} onChange={(e) => setEmail(e.target.value)} aria-describedby="emailHelp" />
       
        </div>
        <div className="mb-3">
          <label htmlFor="Password" className="form-label">Password</label>
          <input type="password" className="form-control" id="Password" name='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        
        <button type="submit" className="btn btn-primary">Signup</button>
      </form>
      {/*<div>
        {
          allEntry.map((curElem) => { 
            return (
              <div className="showDataStyles">
                <p>{curElem.email}</p>
                <p>{curElem.password}</p>
              </div>
            )
          })
        }
      </div>*/}
    </div>
  )
}
export default Signup
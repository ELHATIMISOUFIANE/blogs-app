import { faCheckCircle, faCircle, faRefresh, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { upload } from '@testing-library/user-event/dist/upload';
import React, { useState } from 'react'

function Blogs() {
 const [blogs, setBlogs] = useState([
    {id : 1,
       title: "Angular signal page", 
       description: "Angular signal page is new version of angular etc ...", 
       checked: true },
    {
      id: 2, 
      title: "Vue 3 Composition API", 
      description: "The Composition API in Vue 3 provides a more flexible way to organize and reuse logic in Vue components.", 
      checked: false
    },
    {   id: 3,
        title: "Svelte Stores",
        description: "Svelte Stores are a reactive state management solution in Svelte, allowing you to share state across components.",
        checked: true
      
    }
  ]);
  const handleDelete=(b)=>{
    const newBlogs = blogs.filter(bb=>bb.id != b.id)
    setBlogs(newBlogs)  
  }
  const handleUpdate=(b)=>{
    // const newBlogs = blogs.filter(bb=>bb.id != b.id)
    // setBlogs(newBlogs)  
  }
  return (
  // <div className="p-1 m-1"> 
    /* <div className='row'> */
      /* <div className='col-md-6'> */
        <div className='card'>
          <div className='card-body'>
          <table className='table'>
            <thead>
                <tr>
                  <th>id</th>
                  <th>title</th>
                  <th>description</th>
                  <th>checked</th>
                </tr>
            </thead>
            <tbody>
                  {
                     blogs.map(b=>(
                      <tr key={b.id}>
                        <td>{b.id}</td>
                        <td>{b.title}</td>
                        <td>{b.description}</td>
                        <td>
                          <button className="btn btn-outline-success">
                          <FontAwesomeIcon icon={  b.checked ? faCheckCircle : faCircle}></FontAwesomeIcon>
                          </button>
                        </td>
                        <td>
                          <button onClick={()=>handleDelete(b)} className='btn btn-danger'>
                            <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                          </button>
                          <button onClick={()=>handleUpdate(b)} className='btn btn-info'>
                            <FontAwesomeIcon icon={faRefresh}></FontAwesomeIcon>
                          </button>
                        </td>
                      </tr>
                     )) 
                  }
            </tbody>
          </table>
          </div>
        </div>
      // </div>
    // </div>
    
  // </div>
  )
}

export default Blogs

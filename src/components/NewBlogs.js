import React from 'react'

function NewBlogs() {
  return (
    <div>
      <div className="p-1 m-1"> 
    <div className='card'>
      <div className='card-body'>
        <form>
          <div className='form-control p-2'> title <input type='text'></input></div>
          <div className='form-control p-2'> description <input type='text'></input></div>
          <div className='form-control p-2'> checked <input type='checkbox'></input></div>
          <button className='btn btn-outline-success'>Add blog</button>
        </form>
      </div>
    </div>
    </div>
    </div>
  )
}

export default NewBlogs

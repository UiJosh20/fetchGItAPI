import React from 'react'
import "./home.css"

const Home = () => {
  return (
    <main>
      <div className='disp'>
         <button className="button" data-text="Awesome">
        <span className="actual-text">&nbsp;FIRETEXT&nbsp;</span>
        <span aria-hidden="true" className="hover-text">
          &nbsp;FIRETEXT&nbsp;
        </span>
      </button> 
      </div>

    </main>
  )
}

export default Home
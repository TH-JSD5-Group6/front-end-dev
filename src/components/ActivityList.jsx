import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import ActivityCard from './ActivityCard';

import React from 'react';
import Popup from './Popup'

function ActivityList() {
  const [cards,setCards ] = useState([]);

  const fetchPost = async () =>{
    const responsePosts = await axios.get(`https://infinity-fit-backend.onrender.com/activities`);
    // fetch(`https://infinity-fit-backend.onrender.com/activities`).then(response => response.json()).then((json) => setCards(json));
    setCards(responsePosts.data)
  }

  useEffect(() =>{
    fetchPost();
  },[])

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };
  return (
    <>
        <section className='box-border bg-[#F0F8FF]'>
          <div className='container max-w-screen-xl w-full m-auto '>
            <h1 className='text-5xl'>Exercise List</h1>
              <div className='cards flex flex-wrap justify-between grid grid-cols-4 gap-3 mt-3'>
                {cards.map((post, index) =>(
                  <div key={index} 
                    className='card bg-blue-950 flex flex-0 flex-shrink-0 flex-basis-calc
                    max-w-calc w-full p-3 flex-row'>
                    <div className='date_Exercise text-white font-black	text-4xl'>
                      <h2>{card.date}</h2>
                    </div>

                    <div div className='information text text-white font-semibold m-3'>
                      <h3>{post.name}</h3>
                      <h3>{post.description}</h3>
                      <h5>{post.duration}</h5>
                  
                      <div className='trigger m-2'>
                        
                        <div className="text-center mt-20 static">
                          <button onClick={handleOpenPopup} className="bg-blue-500 hover:bg-blue-700
                           text-white font-bold rounded absolute bottom-4 right-4">
                            Show more
                          </button>
                          {isPopupOpen && <Popup onClose={handleClosePopup} />}
                        </div>
                        
                      </div>
                    </div>
                  </div> 
                ))
              }
              </div>
          </div>
          
          <Link to={`/activity-card`} className="btn btn-outline btn-primary">
            Edit
          </Link>
          <Link to={`/activity-card` } className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
              ADD
          </Link>
        </section>


        {/* <div>
          {
            cards.map((post, index) =>
            <div key={index}>
              {post.name}
              <div>
                {post.description}
              </div>
              <div>
                {post.duration}
              </div>
              <hr />
            </div>
            )
          }
        </div> */}

    </>
  )
}

export default ActivityList

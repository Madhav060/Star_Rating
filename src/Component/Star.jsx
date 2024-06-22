import React,{useState} from 'react'
import {FaStar} from 'react-icons/fa'
import './style.css'

function Star({numStar=5}) {
    const [idx,setIndex] = useState();
    const [hover,setHover] = useState();

    const handleClick = (currentIndex) => setIndex(currentIndex);
    const handleMouseEnter = (currentIndex) => setHover(currentIndex);
    const handleMouseLeave = () => setHover(idx);
        
    return (
        <div className="star-rating">
          {[...Array(numStar)].map((_, index) => {
            index += 1;
    
            return (
              <FaStar
                key={index}
                className={index <= (hover || idx) ? "active" : "inactive"}
                onClick={() => handleClick(index)}
                onMouseMove={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave()}
                size={40}
              />
            );
          })}
        </div>
      );

    } 

export default Star
import React from 'react';
import { Link } from 'react-router-dom';
import NotFounds from '../../images/404.jpg'
import './NotFound.css'
const NotFound = () => {
    return (
        <div>
          <div className="row">
              <div className="col-md-12 ">
               <div className="image">


               <img className="img-fluid img" src={NotFounds} alt="" />
               </div>
              </div>
          </div>
            <Link to="/">
            
            <button>Go Back</button>
            </Link>
        </div>
    );
};

export default NotFound;
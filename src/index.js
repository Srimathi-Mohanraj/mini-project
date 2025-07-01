import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import img1 from "./assest/img1.jpg"
import img2 from "./assest/img2.jpeg"
import img3 from "./assest/img3.jpg"
import img4 from "./assest/img4.jpeg"
import img5 from "./assest/img5.jpg"
import img6 from "./assest/img6.jpeg"
import img7 from "./assest/img7.jpg"
import img8 from "./assest/img8.jpg"




const root = ReactDOM.createRoot(document.getElementById('root'));
var DogList = [
    {
      id: "1",
        name: "Maltipoo",
        image: img4
    },
    {
        name: "Chow-chow",
        image: img3
    },
    {
        name: "Shih Tzu",
        image: img7
    },
    {
        name: "Border Collie",
        image: img2
    },
    {
        name: "Pug",
        image: img6
    },
    {
        name: "Siberian Husky",
        image: img1
    },
    {
        name: "Pembroke Welsh Corgi",
        image: img8
    },
    {
        name: "Australian Shepherd",
        image: img5
    }
]
root.render(

    <div>
        {
            DogList.map(function(item)
        {
            return(
                <App  name={item.name} image={item.image} />
            )
        })
        }
    </div>

);



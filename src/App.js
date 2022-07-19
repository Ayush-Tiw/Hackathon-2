import logo from './logo.svg';
import * as React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


import './App.css';
import { useState } from "react";

import { ThemeProvider, createTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4'


import CardContent from '@mui/material/CardContent';
import { Login } from './Login';
import { SignUp } from './SignUp';
import { Watchdetails } from './Watchdetails';
import { Profile } from './Profile';
import { Cart } from './Cart';
import { Home} from "./Home.js"




function App() {

    
const watches=[
    { 
        image:"https://rukminim1.flixcart.com/image/416/416/l5ld8y80/smartwatch/r/q/t/-original-imagg8dksgct9hxg.jpeg?q=70",
        brand:"Noise",
        price:"₹3,999",
        summary:"Noise ColorFit Icon 2 1.8 Display, Bluetooth Calling, AI Voice Assistance Smartwatch  (Black Strap, Regular",
    },
     { 
        image:"https://rukminim1.flixcart.com/image/416/416/l5ld8y80/smartwatch/i/x/7/-original-imagg8dtmvmmyzfd.jpeg?q=70",
        brand:"Noise",
        price:"₹3,999",
        summary:"Noise ColorFit Icon 2 1.8 Display, Bluetooth Calling, AI Voice Assistance Smartwatch  (Pink Strap, Regular)",
    },
     { 
        image:"https://rukminim1.flixcart.com/image/416/416/kyhlfgw0/smartwatch/5/l/q/-original-imagaptb3zkpufkh.jpeg?q=70",
        brand:"Fire-Bolt",
        price:"₹2,499",
        summary:"Fire-Boltt Ninja Pro Max Smartwatch  (Pink Strap, Free Size)",
    },
     { 
        image:"https://rukminim1.flixcart.com/image/416/416/l1pc3gw0/smartwatch/z/n/6/-original-imagd7d7hxrcguhv.jpeg?q=70",
        brand:"Fire-Bolt",
        price:"₹2,999",
        summary:"Fire-Boltt Hurricane Smartwatch  (Pink Strap, Free Size)",
    },
     { 
        image:"https://rukminim1.flixcart.com/image/416/416/l572ufk0/smartwatch/y/m/3/-original-imagfxk6qr4kmwwf.jpeg?q=70",
        brand:"boAt Storm",
        price:"₹3,999",
        summary:`boAt Storm Pro with 1.78" AMOLED Display, 700+ Active Modes Smartwatch  (Blue Strap, FrSize)`
    },
    { 
        image:"https://rukminim1.flixcart.com/image/416/416/kzx1a4w0/smartwatch/a/v/m/-original-imagbtfvyu9bhvzq.jpeg?q=70",
        brand:"DIZO",
        price:"₹3,999",
        summary:`DIZO Watch 2 Sports (by realme TechLife)  (Green Strap, Free Size)#JustHere`

    },
    { 
        image:"https://rukminim1.flixcart.com/image/416/416/kyvvtzk0/smartwatch/j/x/l/43-android-ios-bsw025-fire-boltt-yes-original-imagbyuckrbfhpbn.jpeg?q=70",
        brand:"Fire-Boltt",
        price:"₹3,999",
        summary:"Fire-Boltt Ninja Call 2 (1.7 inch) Bluetooth Calling with 27 Sports Modes Smartwatch  (Blue Strap, Free Size)",
    },
    { 
        image:"https://rukminim1.flixcart.com/image/416/416/kxdl3m80/smartwatch/y/9/i/43-android-ios-wrb-sw-colorfitcaliber-std-blu-blu-noise-no-original-imag9ukqry8xgfq2.jpeg?q=70",
        brand:"Noise",
        price:"₹3,999",
        summary:"Noise ColorFit Caliber Smartwatch  (Blue Strap, Regular)",
    }

]
   
       
  return (
   <div className="app-container">
<nav>
    <button className="toggle-button">side bar</button>
    <img className="logo" src="" alt=""/>
    <button>profile</button>
    <button>login buttton</button>
    <buttton>my cart</buttton>
    
</nav>

<div className="home-header-image">
                <img src="https://rukminim1.flixcart.com/image/416/416/kxdl3m80/smartwatch/y/9/i/43-android-ios-wrb-sw-colorfitcaliber-std-blu-blu-noise-no-original-imag9ukqry8xgfq2.jpeg?q=70" alt="image not available" />
                </div>

    <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/watch-details" element={<Watchdetails />} />
    <Route path="/" element={watches.map((watch)=><Home watch={watch}/>)} />
    <Route path="/user-profile" element={<Profile />} />
    <Route path="/user-cart" element={<Cart />} />
    
    </Routes>
   </div>
  ) 
       
        

 
}

function SmartWatch(){

    return(
        <div className="smart-container">
            {/* make array of object and pass data like map */}
            <img src=""/>
            <h2>watch brand</h2>
            <p>price</p>


        </div>
    )
}

export default App;




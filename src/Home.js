import * as React from 'react';

export function Home({watch}) {

    return (
        <div className="home-container">
            
                {/* onclick take to all watches list */}

            
            <div className='watch-container'>
                <div><img  src={watch.image} alt={watch.brand}></img></div>
                <div>
                <h1>{watch.brand}</h1>
                <p>{watch.price}</p>
                </div>
                {/* all dynamically */}

            </div>
               
            </div>

        
    );
}

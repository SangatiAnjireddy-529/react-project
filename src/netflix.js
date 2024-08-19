import React from "react";

import './netflix.css'

const Net = () =>{
    return (
     <section className="movie-container">
     <Movie/>
     <Movie/>
     <Movie/>
     <Movie/>
     <Movie/>
     <Movie/>
     <Movie/>
     <Movie/>
     <Movie/>
     </section>
    ) 
}

const Movie = () =>{
    return (
        <article className="each-movie">
            <ImageComponent />
            <Title />
        </article>
    )
}


const ImageComponent = () =>{
    return <img src="https://occ-0-6096-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABWgovuN_f0b2RbwAIjgJmmwR8eMOHaYogwP6-A5_OoIEoK1_XwpgBretOBCIrQEMnAD7PuEd5f9WK7G0Spht9gCxJzJ0gX3zmVYWUhFWZ-R29LmqL5YQOQrz6Klh4DlMEPEs.jpg?r=695" alt="./Jsx.js"  className="each-image" />
}


const Title = () =>{

    return (
        <h3 className="heading">Money Height</h3>
    ) 
    
}
export default Net;
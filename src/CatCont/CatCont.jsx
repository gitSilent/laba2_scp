import React from "react";
import { useState, useEffect } from 'react';


function CatCont(){

    const [src, setSrc]= useState(0);
    const [state, setState]= useState(0);


    let source;
    // fetch('https://aws.random.cat/meow')
    // .then((response) => {
    //  return response.json();
    // })
    // .then((data) => {
    //  let img = document.querySelector(".img-cat");
    //  let a = document.querySelector(".p-link");
    //  img.setAttribute('src',data.file );
    //  a.textContent = `Cat from: ${data.file}`;
    //  a.setAttribute('href', data.file)
    
    //  console.log(source);
    // });

    
    
    // async function updateLink() {
    //     let response = await fetch('https://aws.random.cat/meow')
    //     let response1 = await response.json();
    //     console.log(response1.file)
    //     setSrc(response1.file)
    // }
    // useEffect(() => {
    //     updateLink();
    //   },[]);
    // //  getLink()
    //  return(
    //      <div className="cat-cont" >
    //          <img className="img-cat" src = {'https://api.lorem.space/image/movie?w=150&h=220'} alt='' />
    //          <a href="" className="p-link"></a>
    //          <button className="btn-change" onClick={()=>{updateLink()}}>GET NEW KITTY!</button>
    //      </div>
    //  )
    

    async function updateLink() {
        setState(state+1);
        setSrc(`https://api.lorem.space/image/movie?w=350&h=520&hash=${state}`)
    }
    useEffect(() => {
        updateLink();
      },[]);
     return(
         <div className="cat-cont" >    
             <img className="img-cat" src = {src} alt=''/>
             <a href="" className="p-link"></a>
             <button className="btn-change" onClick={()=>{updateLink()} }>GET NEW KITTY!</button>
         </div>
     )
}

export default CatCont;

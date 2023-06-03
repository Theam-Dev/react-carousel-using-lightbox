import './App.css';
import React from 'react'
import {SlideshowLightbox} from 'lightbox.js-react'
import 'lightbox.js-react/dist/index.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h2>React Lightbox</h2>
      <SlideshowLightbox theme="lightbox" className="lightbox">
          <img className='w-full rounded' src='img/1.jpg' width={200}/>
          <img className='w-full rounded' src='img/2.jpg' width={200}/>  
          <img className='w-full rounded' src='img/3.jpg' width={200}/>
          <img className='w-full rounded' src='img/4.jpg' width={200}/>
   
        </SlideshowLightbox> 
      </header>
    </div>
  );
}

export default App;
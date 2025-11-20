import { useState,useEffect } from 'react'
import './App.css'

function App() {
  const [meme, setMeme] = useState(
    { topText:"",
      bottomText :"",
       imageUrl: "./assets/funny-face-baby.webp"
      //imageUrl: "https://i.imgflip.com/30b1gx.jpghttps://i.imgflip.com/1ur9b0.jpg"
    }
  )
  const [allMemes,setAllMemes] = useState([])

  function handleChange(event){
    const {value,name} = event.currentTarget 
    //console.log(name,value)
    setMeme(prevMeme => (
    {
      ...prevMeme,
      [name]:value
    }
    ))
  }
  
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
    .then(res => res.json())
    .then(data => setAllMemes(data.data.memes))
  },[])  //see down for explanation for this state setter fun
  /* "data": {
    "memes": [
      {
        "id": "181913649",
        "name": "Drake Hotline Bling",
        "url": "https://i.imgflip.com/30b1gx.jpg",
        "width": 1200,
        "height": 1200,
        "box_count": 2,
        "captions": 1456500
      }     its the first obj ele in meme array of data object watch out when accessing memes obj i.e: data.memes */

  function getNewMeme(){
    const randomNumber = Math.floor(Math.random() * allMemes.length)
    const newMemeUrl = allMemes[randomNumber].url 
    setMeme(prevMeme => (
    {
      ...prevMeme,
      imageUrl: newMemeUrl
    })
    )
    //console.log(meme)
  }

  return (
   <main>
      <div className='container'>
        <label >Top Text 
            <input 
              type="text"
              placeholder='meming here'
              name='topText' 
              onChange={ handleChange}
              value={meme.topText}
            />
        </label>
        <label >Bottom Text 
            <input 
              type="text"
              placeholder='ah ahh aa'
              name='bottomText' 
              onChange={ handleChange}
              value={meme.bottomText}
            />
        </label>
      </div>
      <div className="btn-div">
        <button onClick={getNewMeme}>
          Get a new Meme image👽
        </button>
      </div>
      <div className="meme-container">
        <img src={meme.imageUrl} alt="meme-img" />
        <span className="top">{meme.topText}</span>
        <span className="bottom">{meme.bottomText}</span>
      </div>
   </main>
  )
}

export default App

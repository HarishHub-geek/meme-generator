import trollface from '../assets/90222-troll-face.png'

function Header() {
  return (
    <header>
        <div className="logo">
            <img 
                src= {trollface}
                alt="stylized black and white troll face with exaggerated wide grin and large teeth, eyes in shadow, conveying a mischievous and unsettling tone, no visible text, plain background"
            />
        </div>
        <h2>Meme Generator</h2>
    </header>
  )
}

export default Header
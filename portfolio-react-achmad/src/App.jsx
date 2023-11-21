import './App.css'

function App() {
  return (
    <>
    {/* navbar */}
      <div className='navbar'>
        <a href="">Home</a>
        <a href="">Projects</a>
        <img src="/img/Logo.png" alt="" className='logo'/>
        <a href="">Experiences</a>
        <a href="">Contact</a>
      </div>
    {/* home */}
    <div className='padtop'>
      <span style={{fontSize: "30px",color:'#FD853A'}}>Hello!!</span>
      <div className='padtop'>
        <img className='bigimg' src="/img/Simple Box Solution Game Store Logo (1250 x 1250 px) (1).png" alt="" />
      </div>
    </div>
    {/* projects */}
    <div style={{maxWidth:'100%'}}>
      <div style={{backgroundImage:'url("/img/photo-1578662996442-48f60103fc96.webp")'}}>
        <p>a</p>
      </div>
    </div>
    {/* Experiences */}
    <div className='padtop'>Experiences</div>
    </>
  )
}

export default App

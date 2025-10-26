import { useEffect } from 'react'
import '../style/root.css'

const tg = window.Telegram?.WebApp
function App() {

  useEffect(()=>{
    tg.ready()
  },[])
  const onClose = () =>{
    tg.close()
  }
  return (
    <div className="App">
      <div style={{width:'100%', height:'100%',display:'flex', justifyContent:'center',alignItems:'center', textAlign:'center', flexDirection:'column', gap:'30px'}}>
        <div>
          Добро пожаловать в интернет магазин студии <h1>Матрешка</h1>
        </div>
        <button onClick={onClose} style={{borderRadius:'10px', padding:'10px 20px', border:'.5px solid #d3d3d3'}}> Закрыть</button>
      </div>
    </div>
  )
}

export default App

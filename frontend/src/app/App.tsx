import { useCallback, useEffect } from 'react'
import '../style/root.css'

function App() {
useEffect(() => {
    const tg = window.Telegram?.WebApp;
    if (!tg) {
      console.warn('Telegram WebApp не обнаружен (вероятно, вы не в Telegram или скрипт ещё не загрузился)');
      return;
    }
    tg.ready?.();
  }, []);

  const onClose = useCallback(() => {
    const tg = window.Telegram?.WebApp;
    if (!tg) {
      console.warn('Telegram WebApp не доступен для закрытия');
      return;
    }
    tg.close?.();
  }, []);

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

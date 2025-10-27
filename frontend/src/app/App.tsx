import { useEffect } from 'react'
import '../style/root.css'
import { CartProvider } from '../Context/CartContext';
import { BottomNav, Header, Main } from '../components';
import { useTelegram } from '../hooks/useTelegram';

function App() {
  const {tg} = useTelegram();
  
  useEffect(() => {
    if (!tg) {
      console.warn('Telegram WebApp не обнаружен (вероятно, вы не в Telegram или скрипт ещё не загрузился)');
      return;
    }
    tg.ready?.();
  }, [tg]);


  return (
    <CartProvider>
      <div className="AppLayout">
        <Header/>
        <Main/>
        <BottomNav/>
      </div>
    </CartProvider>
  )
}

export default App

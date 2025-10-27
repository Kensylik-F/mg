import { SearchOutline, UserOutline } from "antd-mobile-icons"
import { useNavigate } from "react-router-dom"
import './style.css';


export default function Header (){
    const navigate = useNavigate();
    return (
        <header className="AppHeader">
          <div className='AppHeaderSearch'>
            <SearchOutline />
          </div>
          <span className="LogoText"  onClick={() => navigate('/feed')}>Матрешка</span>
          <div className='AppHeaderProfile' onClick={() => navigate('/profile')}>
            <UserOutline />
          </div>
        </header>
    )
}
// import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { TabBar, Badge } from 'antd-mobile';
import { ShopbagOutline,  UserOutline, CalendarOutline, UnorderedListOutline } from 'antd-mobile-icons';
import { useCart } from '../../Context/CartContext';
import './style.css';
export default function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();
  const { total } = useCart();

  const tabs = [
    { key: '/feed', title: 'Лента', icon: <UnorderedListOutline /> },
    { key: '/shop', title: 'Магазин', icon: <ShopbagOutline /> },
    { key: '/workshops', title: 'Мастер-классы', icon: <CalendarOutline /> },
    { key: '/profile', title: 'Профиль', icon: <UserOutline /> },
  ];
  // const currentPath = location.hash.replace('#', '') || '/feed';
  return (
    <footer className="TabbarWrapper">
      <TabBar activeKey={location.pathname} onChange={(key) => navigate(key)}>
        {tabs.map(tab => (
          <TabBar.Item
            key={tab.key}
            icon={tab.icon}
            title={tab.title}
            badge={tab.key === '/shop' && total > 0 ? <Badge content={total} /> : undefined}
          />
        ))}
      </TabBar>
    </footer>
  );
}

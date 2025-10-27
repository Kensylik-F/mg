import { Navigate, Route, Routes } from "react-router-dom"
import { Profile, Shop, Tape, Workshop } from "../../pages"
import './style.css';
export default function Main () {
    return (
         <main className="Content">
          <Routes>
            <Route path="/" element={<Navigate to="/feed" replace />} />
            <Route path="/feed" element={<Tape />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/workshops" element={<Workshop />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<Navigate to="/feed" replace />} />
          </Routes>
        </main>
    )
}
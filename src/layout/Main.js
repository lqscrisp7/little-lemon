import { Routes, Route } from 'react-router-dom'
import HomePage from '../homepage/HomePage'
import BookingPage from '../booking/BookingPage'

function Main() {
    return (
        <main>
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/booking" element={<BookingPage />}></Route>
                <Route path="/menu" element={<BookingPage />}></Route>
            </Routes>
        </main>
    )
}

export default Main
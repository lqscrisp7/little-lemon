import { Routes, Route, useNavigate } from 'react-router-dom'
import HomePage from '../homepage/HomePage'
import BookingPage from '../booking/BookingPage'
import { useReducer } from 'react'
import ConfirmedBooking from '../booking/ConfirmedBooking'

function Main() {
    const navigate = useNavigate()
    const seededRandom = function (seed) {
        var m = 2 ** 35 - 31;
        var a = 185852;
        var s = seed % m;
        return function () {
            return (s = s * a % m) / m;
        };
    }

    const fetchAPI = function (date) {
        let result = [];
        let random = seededRandom(date.getDate());

        for (let i = 17; i <= 23; i++) {
            if (random() < 0.5) {
                result.push(i + ':00');
            }
            if (random() < 0.5) {
                result.push(i + ':30');
            }
        }
        return result;
    };

    const submitAPI = function (formData) {
        return true;
    };

    const submitForm = (formData) => {
        const result = submitAPI()
        if (result)
            navigate("/bookingConfirmation")
    }

    const updateTimes = (state, action) => {
        return { time: [...fetchAPI(action.date)] }
    }

    const initializeTimes = { time: [...fetchAPI(new Date())] }

    const [availableTimes, setAvailableTimes] = useReducer(updateTimes, initializeTimes)

    return (
        <main>
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/booking" element={<BookingPage availableTimes={availableTimes.time} setAvailableTimes={setAvailableTimes} submitForm={submitForm} />}></Route>
                <Route path="/menu" element={<BookingPage availableTimes={availableTimes.time} setAvailableTimes={setAvailableTimes} submitForm={submitForm} />}></Route>
                <Route path="/bookingConfirmation" element={<ConfirmedBooking />}></Route>
            </Routes>
        </main>
    )
}

export default Main
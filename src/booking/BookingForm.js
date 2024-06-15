import { useEffect, useRef, useState } from "react"
import { IoIosArrowDown } from "react-icons/io";
import { LuClock2 } from "react-icons/lu";
import { FaGlassCheers } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function BookingForm(props) {
    const [date, setDate] = useState()
    const [time, setTime] = useState(props.availableTimes[0])
    const [guest, setGuest] = useState(1)
    const [seatLocation, setSeatLoaction] = useState('indoor')
    const [occasion, setOccasion] = useState('Birthday')
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [contact, setContact] = useState()
    const [additionalRequirements, setAdditionalRequirements] = useState()
    const btnRef = useRef()

    const handleFormSubmit = (e) => {
        e.preventDefault()
        const bookingData = { date: date, time: time, guest: guest, seatLocation: seatLocation, occasion: occasion, firstName: firstName, lastName: lastName, contact: contact, additionalRequirements: additionalRequirements }
        props.submitForm(bookingData)
        const getBookings = localStorage.getItem("bookings")
        let allBookings = []
        if (getBookings)
            allBookings = JSON.stringify([...JSON.parse(getBookings), JSON.stringify(bookingData)])
        else
            allBookings = JSON.stringify([JSON.stringify(bookingData)])
        localStorage.setItem("bookings", allBookings)
    }

    return (
        <div>
            <h1>Reserve A Table</h1>
            <form onSubmit={handleFormSubmit} className="booking-form">
                <div className="input-field">
                    <label htmlFor="res-date">Date</label>
                    <input type="date" id="res-date" value={date} onChange={(e) => {
                        setDate(e.target.value);
                        props.setAvailableTimes({ date: new Date(e.target.value) })
                    }} />
                </div>
                <div className="input-field">
                    <label htmlFor="res-time">Time</label>
                    <LuClock2 size={25} style={{ position: 'absolute' }} />
                    <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)}>
                        {props.availableTimes.map(x => <option value={x}>{x}</option>)}
                    </select>
                    <IoIosArrowDown size={25} style={{ position: 'absolute', right: '20px' }} />
                </div>
                <div className="input-field">
                    <label htmlFor="guests">Number of Diners</label>
                    <input type="number" placeholder="1" min="1" max="10" id="guests" value={guest} onChange={(e) => setGuest(e.target.value)} />
                </div>
                <div className="input-field">
                    <label>Seat Location</label>
                    <input defaultChecked type="radio" id="indoor" name="seat-loc" value="indoor" onClick={(e) => setSeatLoaction(e.target.value)} />
                    <label className="radio-label" htmlFor="indoor">Indoor</label>
                    <input type="radio" id="css" name="seat-loc" value="outdoor" onClick={(e) => setSeatLoaction(e.target.value)} />
                    <label className="radio-label" htmlFor="outdoor">Outdoor</label>
                </div>
                <div className="input-field">
                    <label htmlFor="occasion">Occasion</label>
                    <FaGlassCheers size={28} style={{ position: 'absolute' }} />
                    <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                        <option value="Birthday">Birthday</option>
                        <option value="Anniversary">Anniversary</option>
                    </select>
                    <IoIosArrowDown size={25} style={{ position: 'absolute', right: '20px' }} />
                </div>
                <div className="input-field">
                    <label htmlFor="first-name">First Name</label>
                    <input type="text" id="first-name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </div>
                <div className="input-field">
                    <label htmlFor="last-name">Last Name</label>
                    <input type="text" id="last-name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </div>
                <div className="input-field">
                    <label htmlFor="contact">Contact Number</label>
                    <input type="text" id="contact" value={contact} onChange={(e) => setContact(e.target.value)} />
                </div>
                <div className="input-field" style={{ alignItems: 'flex-start' }}>
                    <label htmlFor="additional-requirements">Additional Requirements</label>
                    <textarea id="additional-requirements" value={additionalRequirements} onChange={(e) => setAdditionalRequirements(e.target.value)} />
                </div>
                <button ref={btnRef} type="submit" role="button">Reserve Now</button>
            </form>
        </div>
    )
}

export default BookingForm
import { useRef, useState } from "react"
import { IoIosArrowDown } from "react-icons/io";
import { LuClock2 } from "react-icons/lu";
import { FaGlassCheers } from "react-icons/fa";

function BookingForm(props) {
    const [date, setDate] = useState()
    const [dateMsg, setDateMsg] = useState('')
    const [time, setTime] = useState(props.availableTimes[0])
    const [guest, setGuest] = useState(1)
    const [guestMsg, setGuestMsg] = useState('')
    const [seatLocation, setSeatLoaction] = useState('indoor')
    const [occasion, setOccasion] = useState('Birthday')
    const [firstName, setFirstName] = useState()
    const [firstNameMsg, setFirstNameMsg] = useState('')
    const [lastName, setLastName] = useState()
    const [lastNameMsg, setLastNameMsg] = useState('')
    const [contact, setContact] = useState()
    const [contactMsg, setContactMsg] = useState('')
    const [additionalRequirements, setAdditionalRequirements] = useState()
    const btnRef = useRef()

    const handleFormSubmit = (e) => {
        e.preventDefault()
        const bookingData = { date: date, time: time, guest: guest, seatLocation: seatLocation, occasion: occasion, firstName: firstName, lastName: lastName, contact: contact, additionalRequirements: additionalRequirements }
        if (date && firstName && lastName && contact) {
            props.submitForm(bookingData)
            const getBookings = localStorage.getItem("bookings")
            let allBookings = []
            if (getBookings)
                allBookings = JSON.stringify([...JSON.parse(getBookings), JSON.stringify(bookingData)])
            else
                allBookings = JSON.stringify([JSON.stringify(bookingData)])
            localStorage.setItem("bookings", allBookings)
        }
    }

    return (
        <div>
            <h1>Reserve A Table</h1>
            <form onSubmit={handleFormSubmit} className="booking-form">
                <div className="input-field">
                    <label htmlFor="res-date">Date</label>
                    <div className="input-error-container">
                        <input type="date" id="res-date" className={dateMsg !== '' && 'error'} value={date} min={new Date().toISOString().split('T')[0]} onChange={(e) => {
                            setDate(e.target.value);
                            setDateMsg('')
                            props.setAvailableTimes({ date: e.target.value === '' ? new Date() : new Date(e.target.value) })
                        }}
                            onBlur={() => {
                                if (date === undefined || date === '')
                                    setDateMsg("Please select a date.")
                            }} />
                        {dateMsg !== '' && <div className="error-msg">{dateMsg}</div>}
                    </div>
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
                    <div className="input-error-container">
                        <input type="number" className={guestMsg !== '' && 'error'} placeholder="1" min="1" max="10" id="guests" value={guest}
                            onChange={(e) => {
                                setGuest(e.target.value);
                                if (e.target.value < 1)
                                    setGuestMsg('Please reserve for at least one diners.')
                                else
                                    setGuestMsg('')
                            }} />
                        {guestMsg !== '' && <div className="error-msg">{guestMsg}</div>}
                    </div>
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
                    <div className="input-error-container">
                        <input type="text" className={firstNameMsg !== '' && 'error'} id="first-name" value={firstName} onChange={(e) => setFirstName(e.target.value)}
                            onBlur={() => {
                                if (firstName === undefined || firstName.trim() === '')
                                    setFirstNameMsg('Please enter your first name.')
                                else
                                    setFirstNameMsg('')
                            }} />
                        {firstNameMsg !== '' && <div className="error-msg">{firstNameMsg}</div>}
                    </div>
                </div>
                <div className="input-field">
                    <label htmlFor="last-name">Last Name</label>
                    <div className="input-error-container">
                        <input type="text" className={lastNameMsg !== '' && 'error'} id="last-name" value={lastName} onChange={(e) => setLastName(e.target.value)}
                            onBlur={() => {
                                if (lastName === undefined || lastName.trim() === '')
                                    setLastNameMsg('Please enter your last name.')
                                else
                                    setLastNameMsg('')
                            }} />
                        {lastNameMsg !== '' && <div className="error-msg">{lastNameMsg}</div>}
                    </div>
                </div>
                <div className="input-field">
                    <label htmlFor="contact">Contact Number</label>
                    <div className="input-error-container">
                        <input className={contactMsg !== '' && 'error'} pattern="^(\+?6?01)[02-46-9]-*[0-9]{7}$|^(\+?6?01)[1]-*[0-9]{8}$" type="text" id="contact" placeholder="012-3456789" value={contact} onChange={(e) => setContact(e.target.value)}
                            onBlur={(e) => {
                                if (contact === undefined || contact.trim() === '')
                                    setContactMsg('Please enter your contact number.')
                                else if (!e.target.checkValidity())
                                    setContactMsg('Please enter a valid contact number.')
                                else
                                    setContactMsg('')
                            }} />
                        {contactMsg !== '' && <div className="error-msg">{contactMsg}</div>}
                    </div>
                </div>
                <div className="input-field" style={{ alignItems: 'flex-start' }}>
                    <label htmlFor="additional-requirements">Additional Requirements</label>
                    <textarea id="additional-requirements" value={additionalRequirements} onChange={(e) => setAdditionalRequirements(e.target.value)} />
                </div>
                <button aria-label="On Click" className={!(date && firstName && lastName && contact) && 'disabled'} ref={btnRef} type="submit" role="button">Reserve Now</button>
            </form>
        </div>
    )
}

export default BookingForm
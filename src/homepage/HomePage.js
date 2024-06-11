import About from "./About"
import CallToAction from "./CallToAction"
import CustomersSays from "./CustomersSays"
import Specials from "./Specials"

function HomePage() {
    return (
        <div className="homepage">
            <CallToAction />
            <Specials />
            <CustomersSays />
            <About />
        </div>
    )
}

export default HomePage
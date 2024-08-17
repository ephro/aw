import dog1Image from '/dog1.jpg';
import dog2Image from '/dog2.jpg';
import dog3Image from '/dog3.jpg';
import catsupImage from '/catsup.png';
import './App.css'

function App() {
    if (window.location.hostname === 'wongforjudge.com') {
        document.title = "Dog"
        return (
            <>
                <img src={dog1Image} className="logo" alt="Ketchup"/>
                <h1>Dog</h1>
            </>
        )
    }
    if (window.location.hostname === 'wong4judge.com') {
        document.title = "Dog Dog"
        return (
            <>
                <img src={dog2Image} className="logo" alt="Ketchup"/>
                <h1>Dog Dog</h1>
            </>
        )
    }
    if (window.location.hostname === 'andrewwong4judge.com') {
        document.title = "Dog Dog Dog"
        return (
            <>
                <img src={dog3Image} className="logo" alt="Ketchup"/>
                <h1>Dog Dog Dog</h1>
            </>
        )
    }
    return (
        <>
            <img src={catsupImage} className="logo" alt="Ketchup"/>
            <h1>Ketchup</h1>
        </>
    )
}

export default App

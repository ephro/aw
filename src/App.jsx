import dog1Image from '/dog1.jph';
import catsupImage from '/catsup.png';
import './App.css'

function App() {
    if (window.location.hostname === 'wong4judge.com'){
        return (
            <>
                <img src={dog1Image} className="logo" alt="Ketchup"/>
                <h1>Ketchup</h1>
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

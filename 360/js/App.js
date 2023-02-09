import './styles/style.css';
import { useEffect, useState } from 'react';
import axios from 'axios';


const axios = require('axios');
function App() {
    const CLIENT_ID = "0509929fbb7c4cb7af584c20631675b8";
    const REDIRECT_URI = "http://localhost:5500/360";
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
    const RESPONSE_TYPE = "token";
    const [token, setToken] = useState("");
    const [searchKey, setSearchKey] = useState("")
    const [artists, setArtists] = useState([])

    //https://accounts.spotify.com/authorize?client_id=0509929fbb7c4cb7af584c20631675b8&redirect_uri=http://localhost:5500/360&response_type=token

    useEffect(() => {
        const hash = window.location.hash
        let token = window.localStorage.getItem("token")

        if (!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

            window.location.hash = ""
            window.localStorage.setItem("token", token)
        }

        setToken(token)

    }, [])

    const logout = () => {
        setToken("")
        window.localStorage.removeItem("token")
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1>Spotify React</h1>
                {!token ?
                    <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login
                        to Spotify</a>
                    : <button onClick={logout}>Logout</button>}
            </header>
        </div>
    );

    const searchArtists = async (e) => {
        e.preventDefault()
        const {data} = await axios.get("https://api.spotify.com/v1/search", {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                q: searchKey,
                type: "artist"
            }
        })
    
        setArtists(data.artists.items)
    }
    const renderArtists = () => {
        return artists.map(artist => (
            <div key={artist.id}>
                {artist.images.length ? <img width={"100%"} src={artist.images[0].url} alt=""/> : <div>No Image</div>}
                {artist.name}
            </div>
        ))
    }
    {renderArtists()}
}

export default App;
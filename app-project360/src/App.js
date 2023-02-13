import logo from './logo.svg';
import './App.css';

function App() {

    return (
        <div className="App">
            <header className="App-header">
              <form onSubmit={searchArtists}>
                <input type="text" onChange="{e => setSearchKey(e.target.value)}"/>
                <button type="submit">Search</button>
              </form>
              <div class="spotiLogin">
                <button class="btn btn-primary">
                  <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login to Spotify</a>
                </button>
              </div>
            </header>
        </div>
    );
}


export default App;

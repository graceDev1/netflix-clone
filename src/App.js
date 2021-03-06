import React from 'react';
import './App.css';
import Row from './components/Row';
import Banner from './components/Banner';
import requests from './requests';
import NavBar from './components/NavBar';


function App() {
  return (
    <div className="app">
     {/* Nav */}
     <NavBar/>
     {/* Banner */}
     <Banner/>
     <Row 
     title="NETFLIX ORIGINALS" 
     fetchUrl={requests.fetchNetflixOriginals}
     isLargeRow
     />
     <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
     <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
     <Row title="Action Movies" fetchUrl={requests.fetchActionsMovies}/>
     <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
     <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
     <Row title="Documentaties" fetchUrl={requests.fetchDocumentaries}/>

    </div>
  );
}

export default App;

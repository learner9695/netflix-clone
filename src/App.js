
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';

function App() {
  return (
    <div className="app">
      <Nav />
     <Banner />
      
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchTrending}
        isLargeRow={true} 
      />
     <Row title="Trending Now" fetchUrl ={requests.fetchTrending }   isLargeRow={false} />
      <Row title="Top Rated" fetchUrl={requests.fetchTrending}  isLargeRow={false}  />
      <Row title="Action Movies" fetchUrl={requests.fetchTrending}  isLargeRow={false} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchTrending}  isLargeRow={false} />
      <Row title="Horror Movies" fetchUrl={requests.fetchTrending}  isLargeRow={false} />
      <Row title="Romance Movies" fetchUrl={requests.fetchTrending}  isLargeRow={false}  />
      <Row title="Documentries" fetchUrl ={requests.fetchTrending} isLargeRow={false}/>
    </div>
  );
}

export default App;

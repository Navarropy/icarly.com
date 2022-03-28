import './App.scss';
import Nav from './components/nav';

function App() {
  return (
    <div className="container">
      <Nav />
      <div className="main">
        <div className="video-container"></div>
        <div className="poll"></div>
        <div className="news">
          <div className="news__article"></div>
        </div>
      </div>
      <footer></footer>
    </div>
  );
}

export default App;

// import logo from './logo.svg';
import Container from "./components/Container/Container";
import Profile from './components/Profile/Profile';
import user from './data/user.json'
// import './App.css';

function App() {
  return <div className="App">
    <Container>
      <Profile
        url={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
    </Container>
  </div>;
   
}

export default App;

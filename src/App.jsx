// import logo from './logo.svg';
import Container from "./components/Container/Container";

import Profile from './components/Profile/Profile';
import user from './data/user.json';

import Statistics from './components/Statistics/Statistics';
import statisticalData from './data/statistical-data.json';

import FriendsList from './components/friends/friendsList';
import friends from './data/friends.json';

import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transactions from './data/transactions.json';


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
      <Statistics stats={statisticalData} title="Upload stats" />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />

    </Container>
  </div>;
   
}

export default App;

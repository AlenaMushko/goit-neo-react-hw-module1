import "./App.css";

import { Profile, FriendList, TransactionHistory } from "./components";
import userData from "./userData.json";
import friendsData from "./friendsData.json";
import transactionsData from "./transactionsData.json";

function App() {
  return (
    <div className="app">
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />

      <FriendList friends={friendsData} />
      <TransactionHistory items={transactionsData} />
    </div>
  );
}

export default App;

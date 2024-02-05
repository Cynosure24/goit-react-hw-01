import { ProfileModule } from './Profile/Profile';
import userData from './userData.json';
import { FriendList } from './FriendList/FriendList';
import friends from './friends.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from './transactions.json';

export function App() {
  return (
    <div className="rootMain">
      <ProfileModule
        avatar={userData.avatar}
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}
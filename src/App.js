import './App.css';
import Account from './components/Account';
import Bonus from './components/Bonus';
import { useSelector } from 'react-redux';
function App() {
  const amount = useSelector((state) => state.account.amount);
  const points = useSelector((state)=> state.bonus.points);
  const account = useSelector((state) => state.account);
  return (
    <div className="App">
      <h4>App</h4>
      <h3>Current Amount : {account.pending ? (<p>loading</p>) : account.error ? (<p>{account.error}</p>) : (<p>{amount}</p>) }</h3>
      <h3>Total Bonus : {points}</h3>
      <Account></Account>
      <Bonus></Bonus>
    </div>
  );
}

export default App;

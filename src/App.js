import './App.css';
import LogIn from './components/loginPage/LogIn';
import ViewTable from './components/tablePage/ViewTable';
import { useAuth } from './context/authcontext';

function App() {
  const {isLoggedIn} = useAuth();
  return (
    <div className="App">
        {!isLoggedIn ? <LogIn/> : <ViewTable/>}
      
    </div>
  );
}

export default App;

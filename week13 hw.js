// importing the default css file + 2 components (from 2 react / jsx files)
import './App.css';
import Login from './Week13 components/login_form';
import Navigation from './Week13 components/navigation';

// function to run the application and display components on HTML side
function App() {
  return (
    <div className="App">
      <Navigation />
      <Login />
    </div>
  );
}

// export command to allow import of 'App' function in other files
export default App;

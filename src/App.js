import './App.css';
import ListCurrency from './componets/ListCurrency';
import Menu from './componets/Menu/Menu';



function App () {
 
  return (
    <div className="container">
        <div className="mb-3">
          <Menu />
        </div>
        <ListCurrency />
      
    </div>
  );
}

export default App;

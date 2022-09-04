import React, {useState} from 'react';
import Menu from './Menu';
import items from './data';
import Categories from './Categories';
import './App.css';

function App() {
  const [menuItems,setMenuItems] = useState(items);
 // const [categories,setCategories]=useState([]);

const filterItems=(category)=>{
  if(category==='all'){
    setMenuItems(items);
    return;
  }
const newItems=items.filter((item)=>item.category===category)
setMenuItems(newItems)
}
  return (
    <div className="App">
     <div className="container text-center " > 
     <div >
       <h2 className=" head text-center"><u className='text-warning h2'><span className='text-dark p-1'>OUR MENU</span></u></h2>
      
      </div>
<Categories filterItems={filterItems}/>
     <Menu items={menuItems}/> 
     </div>
    </div>
  );
}

export default App;

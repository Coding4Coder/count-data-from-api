import React from 'react';
import './style.css';
import Users from './Users';

const App = () => {
  // const [items, setItem] = useState([]);

  // const loadItemData = () => {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       setItem(data);
  //     });
  // };

  // useEffect(() => {
  //   loadItemData();
  // }, []);

  return (
    <div>
      <h1>Hello Data!</h1>
      <Users />
    </div>
  );
};
export default App;

import { useState, useEffect  } from "react";
import { getOneApiQuote } from "./services/simpsonApi.service";
import Search from "./components/Search";


function App() {
  const [myRandomQuote, setMyRandomQuote] = useState(null);
  const [searchValue, setSearchValue] = useState('');
  const [users, setUsers] = useState([
    'kieran',
    'alan',
    'ryan',
    'nigel',
    'geraint',
    'garin'
  ]);

  // Call simpson api in service
  const  getOneQuote = async () => {
    setMyRandomQuote(...await getOneApiQuote())
  }
  

  useEffect(() => {
    getOneQuote();
  }, [])

  useEffect(() => {
    if (searchValue.length) {
      console.log("searchValue has changed : ", searchValue);
    }
    
  }, [searchValue])

  return (
    <div className="App">
     <h1>One quote</h1>
     {myRandomQuote ? (
       <p>{myRandomQuote.quote} </p>
     ): (
      <p>Loading...</p>
     )
    }

    <br></br>
    <h1>Users List</h1>
    <h2>Search for your favourite user!</h2>
    <Search searchValue={searchValue} setSearchValue={setSearchValue} />

    {users
      .filter(user => user.includes(searchValue))
      .map((user, index) => (
        <p key={index} >{user}</p>
      ))
      }   
    </div>
  );
}

export default App;

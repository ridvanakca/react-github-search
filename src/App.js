import "./App.css";
import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import RepoTable from "./components/RepoTable";

function App() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [repos, setRepos] = useState([]);

  const handleSearchClick = async () => {
    setLoading(true);

    // fetch(`https://api.github.com/search/repositories?q=${query}`)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setRepos(data.items);
    //   })
    //   .catch(error => console.error(error))
    //   .finally(() => {
    //     setLoading(false);
    //   }); 

    try {
      const response = await fetch(`https://api.github.com/search/repositories?q=${query}`);
      const data = await response.json();
      setRepos(data.items);
    } catch(error) {
      console.log(error);
    }

    setLoading(false);
  };

  return (
    <>
      <div className='App'>
        <TextField
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          id='outlined-basic'
          label='Repository'
          variant='outlined'
        />
        <Button
          onClick={handleSearchClick}
          className='app-btn'
          variant='contained'>
          Search
        </Button>
      </div>
      {loading ? 'Loading' : <RepoTable repos={repos} />}
    </>
  );
}

export default App;

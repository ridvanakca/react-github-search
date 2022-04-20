import React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import IssuesTable from "../../components/IssuesTable";

function Issues() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [issues, setIssues] = useState([]);

  const handleSearchClick = async () => {
    setLoading(true);

    try {
      const response = await fetch(`https://api.github.com/search/issues?q=${query}`);
      const data = await response.json();
      
      setIssues(data.items);
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  return (
    <>
      <div style={{ display: "flex", height: "100%" }}>
        <div style={{ flexGrow: 1 }}>
          {" "}
          <TextField value={query} onChange={(event) => setQuery(event.target.value)} id='outlined-basic' label='Issues' variant='outlined' />
          <Button onClick={handleSearchClick} className='app-btn' variant='contained'>
            Search
          </Button>
          {loading ? "Loading" : <IssuesTable issues={issues} />}
        </div>
      </div>
    </>
  );
}

export default Issues;

import React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import IssuesTable from "../../components/IssuesTable";
import Box from "@mui/material/Box";
import API from "../../api";

function Issues() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [issues, setIssues] = useState([]);

  const handleSearchClick = async () => {
    setLoading(true);

    const allIssues = await API.issues.getAll(query);
    setIssues(allIssues);

    setLoading(false);
  };

  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", width: 500, gap: 1, margin: "0 auto" }}>
        <TextField value={query} onChange={(event) => setQuery(event.target.value)} id='outlined-basic' label='Issues' variant='outlined' />
        <Button onClick={handleSearchClick} className='app-btn' variant='contained'>
          Search
        </Button>
      </Box>
      {loading ? "Loading" : <IssuesTable issues={issues} />}
    </>
  );
}

export default Issues;

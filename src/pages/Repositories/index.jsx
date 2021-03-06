import React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import RepositoriesTable from "../../components/RepositoriesTable";
import Box from "@mui/material/Box";
import API from "../../api";

function Repositories() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [repos, setRepos] = useState([]);

  const handleSearchClick = async () => {
    setLoading(true);

    const allRepos = await API.repositories.getAll(query);
    setRepos(allRepos);

    setLoading(false);
  };

  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", width: 500, gap: 1, margin: "0 auto" }}>
        <TextField sx={{ width: "500px", margin: "0 auto" }} value={query} onChange={(event) => setQuery(event.target.value)} id='outlined-basic' label='Repository' variant='outlined' />
        <Button onClick={handleSearchClick} className='app-btn' variant='contained'>
          Search
        </Button>
      </Box>
      {loading ? "Loading" : <RepositoriesTable repos={repos} />}
    </>
  );
}

export default Repositories;

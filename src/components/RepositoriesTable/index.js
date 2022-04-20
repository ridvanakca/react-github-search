import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function RepoTable({ repos }) {
  if (repos.length === 0) {
    return null;
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>Repository</TableCell>
            <TableCell align='right'>Owner</TableCell>
            <TableCell align='right'>Star</TableCell>
            <TableCell align='right'>Forks Count</TableCell>
            <TableCell align='right'>Created At</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {repos.map((repo, index) => (
            <TableRow key={index} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell component='th' scope='row'>
                {repo.name}
              </TableCell>
              <TableCell align='right'>{repo.owner.login}</TableCell>
              <TableCell align='right'>{repo.stargazers_count}</TableCell>
              <TableCell align='right'>{repo.forks_count}</TableCell>
              <TableCell align='right'>{repo.created_at}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

function createData(
  index: number,
  title: string,
  content: string,
  user: string,
  createAt: string
) {
  return { index, title, content, user, createAt };
}

const rows = [
  createData(1, "test", "test", "test", "1"),
  createData(2, "test", "test", "test", "2"),
  createData(3, "test", "test", "test", "3"),
  createData(4, "test", "test", "test", "4"),
  createData(5, "test", "test", "test", "5"),
];

export default function DenseTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="right">No</TableCell>
            <TableCell align="right">Title</TableCell>
            <TableCell align="right">Content</TableCell>
            <TableCell align="right">User</TableCell>
            <TableCell align="right">CreateAt</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="right">{row.index}</TableCell>
              <TableCell align="right">
                <a href="">{row.title}</a>
              </TableCell>
              <TableCell align="right">{row.content}</TableCell>
              <TableCell align="right">{row.user}</TableCell>
              <TableCell align="right">{row.createAt}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

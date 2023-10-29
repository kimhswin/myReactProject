//  MuiTable.js / Pagination
//
//  참고파일 :  https://www.youtube.com/watch?v=out4chmZo3E
//  추가설치 : npm install -g json-server
//  추가 명령 : json-server --watch db.json --port 8000
//
//  - Table 과 Pagination
//  - Paper : 음영을 줄수 있다.
//  - slice : 전체 배열값에서 해당되는 부분만 복사해어 map 함수로 적용한다.
//
//  - page nation 은 공식처럼 코드를 사용하는 것이 좋을듯..

import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from '@mui/material';
import { useEffect, useState } from 'react';

const Muitable = () => {
  const columns = [
    { id: 'id', name: 'Id' },
    { id: 'name', name: 'Name' },
    { id: 'email', name: 'Email' },
    { id: 'phone', name: 'Phone' },
  ];

  const handlechangepage = (event, newpage) => {
    pagechange(newpage);
  };
  const handleRowsPerPage = (event) => {
    rowperpagechange(+event.target.value);
    pagechange(0);
  };

  const [rows, rowchange] = useState([]);
  const [page, pagechange] = useState(0);
  const [rowperpage, rowperpagechange] = useState(5);

  useEffect(() => {
    fetch('http://localhost:8000/posts')
      .then((resp) => {
        return resp.json();
      })
      .then((resp) => {
        console.log(resp[0].id);
        rowchange(resp);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);

  return (
    // css 전체를 중앙으로 셋팅한다.
    <div style={{ textAlign: 'center' }}>
      <h1>MUI Table</h1>

      <Paper sx={{ width: '90%', marginLeft: '5%' }}>
        <TableContainer sx={{ maxHeight: 450 }}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    style={{ backgroundColor: 'black', color: 'white' }}
                    key={column.id}
                  >
                    {column.name}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            {/* 
                          =======================================
                        */}
            <TableBody>
              {rows &&
                rows
                  .slice(page * rowperpage, page * rowperpage + rowperpage)
                  .map((row, i) => {
                    return (
                      <TableRow key={i}>
                        {columns &&
                          columns.map((column, i) => {
                            let value = row[column.id];
                            return <TableCell key={value}>{value}</TableCell>;
                          })}
                      </TableRow>
                    );
                  })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          rowsPerPage={rowperpage}
          page={page}
          count={rows.length}
          component='div'
          onPageChange={handlechangepage}
          onRowsPerPageChange={handleRowsPerPage}
        ></TablePagination>
      </Paper>
    </div>
  );
};

export default Muitable;

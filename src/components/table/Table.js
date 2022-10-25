import { useState, useEffect, useMemo } from "react";
import { useTable,useGlobalFilter } from "react-table";
import { COLUMNS } from "./column";

import request from "graphql-request";

function Table() {
  const [data, setData] = useState([]);

  // useeffect fake data...
//   useEffect(() => {
//     const fetchData = async () => {
//       const { datasets } =await axios.get("https://reqres.in/api/users?page=1").then((resp) => {
//         let datasets = resp.data.data.sort((a, b) =>
//          a.first_name.localeCompare(b.first_name)
//       )}
//       )
//         `
//                 {
//                     datasets (first:50) {
//                         id_number
//                         firstName
//                         lastName
//                         email
//                         department
//                         dateJoined
//                         }
//                 }
//                 `
//       );
//       setData(datasets);
//     };
//     fetchData();
//   }, []);
  
  const columns = useMemo(() => COLUMNS, []);
  // const tableInstance = useTable({ columns, data });
  // From the tableInstance, the hook will return the necessary props for the table, body, and transformed data to create the header and cells for our table. Let's destructure directly to access these props:
//   The useGlobalFilter allows us to filter the entire table based on any value passed into our filter text field.
  const {   getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    state,
    setGlobalFilter,
    prepareRow,} =
    useTable({ columns, data }, useGlobalFilter);

    // destructure globalFilter from the state method
    const { globalFilter } = state;


    return (
        <div>
            <div className="search-container">
                <input
                    type="text"
                    value={globalFilter || ''}
                    onChange={(e) => setGlobalFilter(e.target.value)}
                />
            </div>
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps()}>
                                    {column.render('Header')}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell) => {
                                    return (
                                        <td {...cell.getCellProps()}>
                                            {cell.render('Cell')}
                                        </td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};
export default Table;

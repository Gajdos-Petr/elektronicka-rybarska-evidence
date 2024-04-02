import React,{useState, useEffect, useMemo}  from 'react';
import { useTable, useFilters } from 'react-table';
import { useNavigate  } from "react-router-dom";
import REVIRY_DATA from '../sources/reviry.json'
import '../styles/table.css'
function BasicTable() {
 /*  { const [data, setData] = useState([]);}*/

    const [filterInput, setFilterInput] = useState("");


    const handleFilterChange = e => {
        const value = e.target.value || undefined;
        setFilter("number", value); 
        setFilterInput(value);
      };
      

      const handleTypeFilter = e => {
        const value = e.target.value || undefined;
        console.log(value);
        if(value === 'all'){
          console.log("i am all");
          setFilter("type", undefined); 
        }else{
          console.log("i am type");
        setFilter("type", value); 
        }
      };



  const navigate = useNavigate();
  const goRouteId = (number) => {
   navigate(`/revir/${number}`);
  }   

  const data = useMemo(() => REVIRY_DATA, []);
    const columns = React.useMemo(
      () => [
        {
            Header: "Číslo",
            accessor: "number",
          },
          {
            Header: "Název",
            accessor: "name",
          },
          {
            Header: "Typ",
            accessor: "type",
          },
          {
            Header: "Organizace",
            accessor: "organization",
          },
          
          {
            Header: "Velikost",
            accessor: "size",
          }

      ],
      []
    );
  
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      setFilter,
      prepareRow,
    } = useTable({ columns, data },
        useFilters 
        );
  
    return (
  <div className="table-wrapper">
<div className="table-head">
<input value={filterInput} onChange={handleFilterChange} placeholder={"číslo revíru"}/>
    <select name="grounds" id="grounds" onChange={handleTypeFilter}>
    <option value="all">Vše</option>
      <option value="Mimopstruhový">Mimopstruhové</option>
      <option value="Pstruhovy">Pstruhové</option>
    </select>
</div>

          <table {...getTableProps()}>
        <thead>
            {
                headerGroups.map(headerGroup =>(
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {
                            headerGroup.headers.map(column =>(
                                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))
                        }
                    </tr>
                ))
            }
     
        </thead>
        <tbody {...getTableBodyProps()}>
            {
                rows.map(row => {
                    prepareRow(row)
                 
                    return(
                        <tr onClick={()=> goRouteId(row.original.number)} className='table-row' {...row.getRowProps()}>
                            {
                                row.cells.map(cell => {
                                   return <td {...cell.getCellProps()} data-label={cell.column.Header}>{cell.value === null ? '-' : cell.render('Cell')}</td>
    
                                })
                            }
                        </tr>
                    )
                    
                })
            }
    
        </tbody>
        </table>
        <button>Předchozí</button>
        <button>Následující</button>
  </div>
    );
  }

export default BasicTable
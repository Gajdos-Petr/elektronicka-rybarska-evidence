import React,{useState, useMemo}  from 'react';
import { useTable, useFilters, usePagination } from 'react-table';
import { useNavigate  } from "react-router-dom";
import '../../styles/table.css'
function GroundsTable({columns, inputData}) {

    const [filterInput, setFilterInput] = useState("");

    console.log(inputData)
    //filtrovani reviru podle podle cisla reviru 
    const handleFilterChange = e => {
        const value = e.target.value || undefined;
        setFilter("number", value); 
        setFilterInput(value);
      };
      

      //filtrovani reviru podle typu (Pstruhovy / Mimopstruhovy) 
      const handleTypeFilter = e => {
        const value = e.target.value || undefined;
        if(value === 'all'){
          setFilter("type", undefined); 
        }else{
        setFilter("type", value); 
        }
      };


//presmerovani na prislusnou stranku s informacemi o konkretnim reviru
  const navigate = useNavigate();
  const goRouteId = (number) => {
   navigate(`/revir/${number}`);
  }   

  const data = inputData;

  
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      page,
      nextPage,
      previousPage,
      canNextPage,
      canPreviousPage,
      pageOptions,
      state,
      setFilter,
      prepareRow,
    } = useTable({ columns, data }, useFilters, usePagination);
  
        const {pageIndex} = state;
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
                page.map(row => {
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
<div className='table-bottom'>
<span>
          Strana{' '}
          <strong>
            {pageIndex + 1} z {pageOptions.length}
          </strong>{' '}
        </span>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>{"<"}</button>
        <button onClick={() => nextPage()} disabled={!canNextPage}>{">"}</button>
</div>
  </div>
    );
  }

export default GroundsTable
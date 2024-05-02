import React,{useState, useMemo}  from 'react';
import { useTable, useFilters, usePagination } from 'react-table';
import { useNavigate, useLocation  } from "react-router-dom";
import { Pencil, Trash2  } from 'lucide-react';
import '../../assets/styles/table.css'
function GroundsTable({columns, inputData, currentDataType, admin}) {
  const navigate = useNavigate();
    const [filterInput, setFilterInput] = useState("");
  const[currentSetData, setCurrentSetData] = useState(currentDataType)
    const show = currentDataType === "grounds";
    const location = useLocation().pathname === "/seznam-reviru"
    const[modifyUrl, setModifyUrl] = useState('');

    let deleteMember = false;
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


         //filtrovani reviru podle prijmeni clena 
    const handleFilterMemberNameChange = e => {
      const value = e.target.value || undefined;
      setFilter("lName", value); 
      setFilterInput(value);
    };
    
      const handleEditItem = (id) =>{
      navigate(`/zaznam/ground/${id}`); 
      }

      const  handleDeleteItem = async(id) =>{
       //mazani
        switch(currentDataType){
          case "members":
            setModifyUrl(`http://localhost:8000/members/${id}`)
            deleteMember = true;
          break;
          case "grounds":
            setModifyUrl(`http://localhost:8000/grounds/${id}`)
            break;
            case "visits":
              setModifyUrl(`http://localhost:8000/visits/${id}`)
              break;
        }
            fetch(modifyUrl, {
              method: 'DELETE',
            })
            .then(response => response.json())
            .then(() => alert('Smazáni proběhlo úspěšně'));
       
          if(deleteMember){
            fetch(`http://localhost:8000/logins/${id}`, {
              method: 'DELETE',
            })
            .then(response => response.json())
            deleteMember = true;
          }
      }
//presmerovani na prislusnou stranku s informacemi o konkretnim reviru
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

{currentDataType === "grounds" ? <input value={filterInput}  onChange={handleFilterChange}  placeholder={"číslo revíru"}/> :  <input value={filterInput}  onChange={handleFilterMemberNameChange} placeholder={"Příjmení člena"}/>} 
{currentDataType === "grounds" ?  <select name="grounds" id="grounds" onChange={handleTypeFilter}>
    <option value="all">Vše</option>
      <option value="Mimopstruhový">Mimopstruhové</option>
      <option value="Pstruhovy">Pstruhové</option>
    </select> : undefined}
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
                     {location === 0 || admin ? <th>Akce</th> : null}
                    </tr>
                ))
            }
     
        </thead>
        <tbody {...getTableBodyProps()}>
            {
                page.map(row => {
                    prepareRow(row)
                 
                    return(
                        <tr onClick={show ? ()=> goRouteId(row.original.id) : undefined} className='table-row' {...row.getRowProps()}>
                            {
                                row.cells.map(cell => {
                                   return <td {...cell.getCellProps()} data-label={cell.column.Header}>{cell.value === null ? '-' : cell.render('Cell')}</td>
    
                                })
                            }
            {
            location === 0 || admin ?                <td data-label= "Akce">
            <button className='action-button' onClick={(e) => { e.stopPropagation(); handleEditItem(row.original.id) }}><Pencil /></button>
            <button className='action-button' onClick={(e) => { e.stopPropagation(); handleDeleteItem(row.original.id) }}><Trash2 /></button>
          </td> : null


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
import React , {useState, useEffect} from 'react'
import GROUNDS_DATA from '../../data/reviry.json'
import MEMBERS_DATA from '../../data/clenove.json'
import  COLUMNS_MEMBERS  from '../../data/columns/columnsMembers'
import  COLUMNS_GROUNDS  from '../../data/columns/columnsGrounds'
import COLUMNS_VISITS from '../../data/columns/columnsVisits'
import SimpleTable from '../table/SimpleTable'
import SimpleButton from '../buttons/SimpleButton'
import { COLORS } from '../../assets/colors/colors';
import { useNavigate  } from "react-router-dom";

function UserTopMenu({admin}) {
    const [selectedTable, setSelectedTable] = useState("grounds");
    const[currentAddress, setCurrentAddress] = useState('http://localhost:8000/grounds');
    const [filterTrigger, setFilterTrigger] = useState(1); 
    const [columns, setColumns] = useState(COLUMNS_GROUNDS);
    const [selectedData, setSelectedData] = useState();
    useEffect(() => {
      if (filterTrigger > 0) { 
        fetch(currentAddress)
          .then(res => res.json())
          .then((data) => {
            setSelectedData(data);
          });
      }
    }, [filterTrigger, currentAddress]); 
  
      const handleFilterTable = (e) => {
        setSelectedTable(e.target.value);
        switch(e.target.value){
          case "grounds":
            setCurrentAddress('http://localhost:8000/grounds');
             setColumns(COLUMNS_GROUNDS);
            break;
          case "members":
            setCurrentAddress('http://localhost:8000/members');
            setColumns(COLUMNS_MEMBERS);
          break;
          case "visits":
            setCurrentAddress('http://localhost:8000/visits');
            setColumns(COLUMNS_VISITS);
            break;
          }
          setFilterTrigger(prevTrigger => prevTrigger + 1); 
    };
    

    const navigate = useNavigate();
    const goEditablePage = (page) => {
     navigate(`/zaznam/${page}`);
    }   
  

 
    const data = selectedTable === "members" ? MEMBERS_DATA : GROUNDS_DATA;
    
  return (
      <>
  
    <div className='container-action-header'>
  {admin ? 
  <div className='container-actions'>
  <SimpleButton background={COLORS.BOX_COLOR_LIGHT}  content={"VYTVOŘIT DOCHÁZKU"}  handleClick={() => goEditablePage("visit")}/>
    <SimpleButton background={COLORS.BOX_COLOR_LIGHT}  content={"PŘIDAT REVÍR"} handleClick={() => goEditablePage("ground")}/>
    <SimpleButton background={COLORS.BOX_COLOR_LIGHT}  content={"PŘIDAT ČLENA"} handleClick={() => goEditablePage("member")}/>
</div>
:
<div className='container-actions'>
<SimpleButton background={COLORS.BOX_COLOR_LIGHT}  content={"VYTVOŘIT DOCHÁZKU"}  handleClick={() => goEditablePage("visit")}/>
</div>
}
<h3>Zobrazená data:</h3>

{admin ?   
<select name="" id="" onChange={handleFilterTable}>
      <option value="grounds" selected>Revíry</option>
      <option value="members">Členové</option>
    <option value="visits" selected>Docházka</option>
    </select> :
    <select name="" id="" onChange={handleFilterTable}>
    <option value="grounds" selected>Revíry</option>
    <option value="visits" selected>Docházka</option>
  </select>
    }

    </div>
    <div className='container-action-body'>
    {selectedData && <SimpleTable columns={columns} inputData={selectedData} currentDataType={selectedTable} admin={admin}/>}
    </div>
    </>
  )
}

export default UserTopMenu
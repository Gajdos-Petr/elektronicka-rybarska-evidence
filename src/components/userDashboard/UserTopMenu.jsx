import React , {useState} from 'react'
import GROUNDS_DATA from '../../sources/reviry.json'
import MEMBERS_DATA from '../../sources/clenove.json'
import  COLUMNS_MEMBERS  from '../columnsMembers'
import  COLUMNS_GROUNDS  from '../columnsGrounds'
import SimpleTable from '../table/SimpleTable'
import LoginButton from '../buttons/LoginButton'
import { COLORS } from '../../styles/colors';

function UserTopMenu() {
    const [selectedTable, setSelectedTable] = useState("members");
    

    const handleFilterTable = (e) => {
        setSelectedTable(e.target.value);
    };
    const data = selectedTable === "members" ? MEMBERS_DATA : GROUNDS_DATA;
    const columns = selectedTable === "members" ? COLUMNS_MEMBERS : COLUMNS_GROUNDS;
  return (
    <>
    <div className='container-action-header'>
    <select name="" id="" onChange={handleFilterTable}>
      <option value="members">Členové</option>
      <option value="grounds">Revíry</option>
    </select>
    <LoginButton background={COLORS.BOX_COLOR_LIGHT} url={"/Login"} content={"VYTVOŘIT DOCHÁZKU"}/>
    </div>
    <div className='container-action-body'>
    <SimpleTable columns={columns} inputData={data}/>
    </div>
    </>
  )
}

export default UserTopMenu
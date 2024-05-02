import React,{useState} from 'react'
import AddEditMemberForm from '../components/forms/AddEditMemberForm'
import AddEditGroundForm from '../components/forms/AddEditGroundForm';
import AddEditVisitForm from '../components/forms/AddEditVisitForm';
import { useParams } from 'react-router-dom';

function EditablePage() {
  const [editItem, setEditItem] = useState(useParams())

  switch(editItem.type){
    case 'member':
        return <AddEditMemberForm/>;
    case 'ground':
        return <AddEditGroundForm/>;
    case 'visit':
        return <AddEditVisitForm/>
  }
}
export default EditablePage
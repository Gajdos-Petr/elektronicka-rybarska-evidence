import React, { useContext }  from 'react'
import MemberDashboard from '../pages/MemberDashboard';
import EditablePage from '../pages/EditablePage';
import { UserContext } from '../App';
import { Navigate } from 'react-router-dom';
function PrivateRoute({pageToReturn}) {
    const [user] = useContext(UserContext);
const handleRoute = () =>{
    switch(pageToReturn){
        case 'dashboard':
            return <MemberDashboard />;
          case 'zaznam':
            return <EditablePage />;    
      } 
}

 return user ? handleRoute() : <Navigate to="/" />
}

export default PrivateRoute
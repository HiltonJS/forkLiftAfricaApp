import React,{useEffect, Fragment} from 'react';
import NavbarPage from '../../components/navbar/navbar.component';
import MusicTable from '../../components/Machine tables/machinetable.component';
import {getData} from '../../redux/data/dataActions';
import {useDispatch,useSelector} from 'react-redux';
import ErrorHandler from '../../components/errorHandler/errorHandler.component';
import Axios from 'axios';
import Loading from '../../components/loading/loading.component';

const Home=()=> {

    const inventory = useSelector((state) => state.data.inventory);
    const dispatch=useDispatch()

    useEffect(() => {
        Axios.get("/users").then(users=>{
            console.log(users.data)
        })
        dispatch(getData());
        
      }, [dispatch]);

      console.log(inventory)


    return (
        <Fragment>
            <NavbarPage/>
            <div className="container">
           
            { inventory.length===0?<Loading/>:<MusicTable inventory={inventory}/>  }
            
            </div>
         
        </Fragment>
    );
}

export default Home;
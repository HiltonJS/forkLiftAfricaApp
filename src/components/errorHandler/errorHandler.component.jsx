import React, { Fragment } from 'react';

import Backdrop from '../backdrop/backdrop.component';
import Modal from '../modal/modal.component';
import {useDispatch,useSelector} from 'react-redux'
import {errorHandler} from '../../redux/user/userActions'

const ErrorHandler = (props) => {
 
const error=useSelector((state)=> state.user.error)
const dispatch= useDispatch();
 return(
 <Fragment>
    {error && <Backdrop onClick={()=>dispatch(errorHandler)} />}
    {error && (
      <Modal
        title="An Error Occurred"
        onCancelModal={()=>dispatch(errorHandler)}
        onAcceptModal={dispatch(errorHandler)}
        acceptEnabled
      >
        {/* <p>{error}</p> */}
      </Modal>
    )}
  </Fragment>
)};

export default ErrorHandler;
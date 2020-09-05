import React from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import {useSelector,useDispatch} from 'react-redux'
import {changeModal} from '../../redux/data/dataActions'


const ModalPage =()=>{



const modal= useSelector(state=>state.data.modal);
const successMessage= useSelector(state=>state.data.successMessage)
const dispatch=useDispatch()

const toggle = () => {
 dispatch(changeModal())
}
  return (
    <MDBContainer>
     
      <MDBModal isOpen={modal} toggle={toggle}>
        <MDBModalHeader toggle={toggle}>MDBModal title</MDBModalHeader>
        <MDBModalBody>
        {successMessage}
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="secondary" onClick={toggle}>Close</MDBBtn>
         
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
    );
  }


export default ModalPage;
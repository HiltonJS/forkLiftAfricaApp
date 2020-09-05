import React from 'react';
import ReactDom from 'react-dom';
import Button from '../button/button.component';
import {useDispatch} from 'react-redux'
import {errorHandler} from '../../redux/user/userActions'

import './modal.css' 

const Modal=(props) => 
  

ReactDom.createPortal(
        <div className="modals">
            <header className="modal__header">
                <h1>{props.title}</h1>  
                </header>
                <div className="modal__content">{props.children}</div>
                <div className="modal__actions">
                 <Button design="danger" mode="flat" onClick={props.onCancelModal}>
                     Cancel
                </Button>
                {/* <Button
                     design="success"
                    onClick={dispatch(errorHandler)}
                    disabled={!props.acceptEnabled}
                    loading={props.isLoading}>
         Post
        </Button> */}
    </div>   
        </div>,document.getElementById('modal-root')
    )


export default Modal

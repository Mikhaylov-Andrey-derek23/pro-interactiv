import React from 'react';
import { connect } from 'react-redux';
import {  bindActionCreators } from 'redux';
import * as action from '../redruser/actiom';

function ModalWindow({status, modalWindow}){

    if(status === 'video'){
        return(
            <div className="modal d-flex justify-content-center align-items-center modal-bg" >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Video</h5>
                            <button type="button" className="btn-close" onClick={()=>modalWindow(false)}></button>
                        </div>
                        <div className="modal-body">
                            <iframe width="315" height="180" src="https://www.youtube.com/embed/jNQXAC9IVRw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger text-light" onClick={()=>modalWindow(false)}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        )

    }else{
        return(
            <p></p>
        )
    }


}

const mapStateProps = (state) => {
    return {
        status : state.modalWindow
    }
}

const mapDispatchAction  = (dispatch) =>{
    const {modalWindow} = bindActionCreators(action, dispatch)
    return {
        modalWindow : (value) => {
            modalWindow(value)
        }
    }
}

export default connect(mapStateProps, mapDispatchAction)(ModalWindow)
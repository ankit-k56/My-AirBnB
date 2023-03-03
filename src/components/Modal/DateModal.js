import React from "react"
import "./DateModal.css"
const ModalOverlay = props =>{
    return (
        <div className="modal">
            <div className="content">
                {props.children}
            </div>
        </div>
        )
}
const ModalBackdrop = (props) =>{
    return(
        <>     
        <div className="backdrop" onClick={props.onClose}> </div>
        </>
    )
}
const Modal = props =>{
    return (
        <>          
            <ModalBackdrop onClose={props.onClose}> </ModalBackdrop>
            <ModalOverlay>{props.children}</ModalOverlay>
        </>
    )
}
export default Modal


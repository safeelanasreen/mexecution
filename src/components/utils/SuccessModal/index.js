import React from 'react'
import { Button, Image, Modal } from 'react-bootstrap'
import Icon from '../../Layout/Icons'
import Style from "./SuccessModal.module.scss"

const SuccessModal = (show, handleClose) => {
    return (
        <div>
            <Modal
                show={show}
                onHide={handleClose}
                className={`success-modal background-white  modal_centered ${Style.modal_sucess}`}
            >


                <Modal.Body>
                    <div className={Style.modal_content_sucess}>
                        {/* <div className={Style.icon}>
                            <figure className="ratio">
                                <Image src={Assets.success_icon} alt="sucessicon" fill />
                            </figure>
                        </div> */}
                        <div className={Style.content}>
                            <div className={Style.tick}>
                                <Icon icon="tick" size={11} />
                            </div>
                            <h2>  Thank you for submission </h2>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default SuccessModal
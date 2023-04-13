import React from "react";
import { Modal, Button } from 'react-bootstrap'

export default function ModalDelete({ modal, setModal, remove, user }) {
    return (
        <Modal style={{ padding: '15%' }} show={modal} onHide={() => setModal(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Are you sure delete this user</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h6>FirstName: {user.firstName}</h6>
                <h6>LastName: {user.lastName}</h6>
                <h6>Email: {user.email}</h6>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => setModal(false)}>
                    No
                </Button>
                <Button variant="primary" onClick={remove}>
                    Yes
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
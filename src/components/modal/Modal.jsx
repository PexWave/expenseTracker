import React, { useState } from 'react'
import { Button, Modal } from "flowbite-react";

export default function CustomModal({openModal, setOpenModal, content, size}) {

  return (
    <>
      <Modal show={openModal} size={size} onClose={() => setOpenModal(false)} popup>
        <Modal.Header />
        <Modal.Body>
            {content}
        </Modal.Body>
      </Modal>
    </>
  )
}

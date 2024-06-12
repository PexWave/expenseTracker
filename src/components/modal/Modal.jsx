import React, { useState } from 'react'
import { Button, Modal } from "flowbite-react";

export default function CustomModal({openModal, setOpenModal, theme=null, content, size}) {

  return (
    <>
      <Modal show={openModal} theme={theme} size={size} onClose={() => setOpenModal(false)} popup>
        <Modal.Header  />
        <Modal.Body>
            {content}
        </Modal.Body>
      </Modal>
    </>
  )
}

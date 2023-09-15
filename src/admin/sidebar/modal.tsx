import { useState } from "react";
import { Modal } from "antd";

type modalProps = {
  isModalOpen: boolean;
  handleOk: () => void;
  handleCancel: () => void;
};

const Modals = ({ isModalOpen, handleOk, handleCancel }: modalProps) => {
  return (
    <Modal
      title="Basic Modal"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
    >
     
     
    </Modal>
  );
};

export default Modals;

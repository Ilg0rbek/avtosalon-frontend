import { Col, Form, Input, Modal, Row, Select } from "antd";
import { Option } from "antd/es/mentions";

type modalProps = {
  isModalOpen: boolean;
  handleOk: () => void;
  handleCancel?: () => void;
};

const Modals = ({ isModalOpen, handleOk, handleCancel }: modalProps) => {
  return (
    <Modal
      title="Mashina qo'shish"
      width={700}
      open={isModalOpen}
      onOk={handleOk}
      okText="Saqlash"
      onCancel={handleCancel}
      okButtonProps={{ style: { backgroundColor: "#2a85ff" } }}
      cancelButtonProps={{ style: { display: "none" } }}
    >
      <Form>
        <Row>
          <Col md={6}>
            <Form.Item label={"Markasi"} name={"select"} />
            <Select style={{ width: "100%" }} id="select" placeholder="CHEVROLET">
              <Option value="chevrolet">CHEVROLET</Option>
              <Option value="bmw">BMW</Option>
              <Option value="audi">AUDI</Option>
              <Option value="mers">MERS</Option>
              <Option value="volsvag">WOLSWAG</Option>
            </Select>
          </Col>
          <Col md={6}>
            <Form.Item  label={"Markasi"} name={"select"} />
            <Select id="select" placeholder="CHEVROLET">
              <Option value="chevrolet">CHEVROLET</Option>
              <Option value="bmw">BMW</Option>
              <Option value="audi">AUDI</Option>
              <Option value="mers">MERS</Option>
              <Option value="volsvag">WOLSWAG</Option>
            </Select>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

export default Modals;

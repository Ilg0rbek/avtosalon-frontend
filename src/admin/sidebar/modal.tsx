import { Col, Form, Modal, Row, Select, Input } from "antd";

type modalProps = {
  isModalOpen: boolean;
  handleOk: () => void;
  handleCancel?: () => void;
};

const Modals = ({ isModalOpen, handleOk, handleCancel }: modalProps) => {
  return (
    <Modal
      style={{ top: 20 }}
      title="Mashina qo'shish"
      width={1100}
      open={isModalOpen}
      onOk={handleOk}
      okText="Saqlash"
      onCancel={handleCancel}
      okButtonProps={{ style: { backgroundColor: "#2a85ff" } }}
      cancelButtonProps={{ style: { display: "none" } }}
    >
      <Form layout="vertical" className="login-form">
        <Row gutter={[16, 0]}>
          <Col span={12}>
            <Form.Item label="Markasi">
              <Select size="large">
                <Select.Option value="demo">Chevrolet</Select.Option>
                <Select.Option value="demo">Audi</Select.Option>
                <Select.Option value="demo">Lamborgini</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Tanirovkasi">
              <Select size="large">
                <Select.Option value="bor">Bor</Select.Option>
                <Select.Option value="yoq">Yoq</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Morot">
              <Input size="large" placeholder="Kiriting" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Year">
              <Input size="large" placeholder="Kiriting" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Color">
              <Input size="large" placeholder="Kiriting" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Distance">
              <Input size="large" placeholder="Kiriting" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Gearbook">
              <Input size="large" placeholder="Kiriting" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Narxi">
              <Input size="large" placeholder="Kiriting" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Rasm 360 ichki makon">
              <Input size="large" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Rasm 360 tashqi makon">
              <Input size="large" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="intro" label="Description">
              <Input.TextArea placeholder="Mazmunini kiritng" rows={6} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Model turi uchun rasm">
              <Input size="large" />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

export default Modals;

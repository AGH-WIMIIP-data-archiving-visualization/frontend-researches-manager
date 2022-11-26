import { CreateDeviceDto } from "@/generated";
import { useDeleteDevices, useGetDevices, usePostDevice } from "@/src/api";
import { Button, Form, Modal, Typography } from "antd";
import Input from "antd/lib/input/Input";
import { useState } from "react";
import { AddDeviceForm } from "..";
import { Flex } from "@/src/components";
import { LabjackMenuWrapper, LabjackContainer, DeleteButton } from "./styles";
import { DeleteOutlined } from "@ant-design/icons";
const { Text } = Typography;
export const LabjackMenu: React.FC = () => {
  const { data, refetch } = useGetDevices();
  const [isMenuOpen, setIsMenuOpem] = useState(false);
  const [showAddDevice, setShowAddDevice] = useState(false);
  const [selectedDevice, setSelectedDevice] = useState<{
    id: string;
    deviceName: string;
  } | null>();

  const [deleteDeviceName, setDeleteDeviceName] = useState("");
  const [form] = Form.useForm<CreateDeviceDto>();
  const { submit: sumbitAddDevice } = form;

  const { mutateAsync: addDeviceMutation, isLoading: deviceIsLoading } =
    usePostDevice();
  const {
    mutateAsync: deleteDeviceMutation,
    isLoading: deleteDeviceIsLoading,
  } = useDeleteDevices();
  return (
    <LabjackMenuWrapper>
      <Modal
        onCancel={() => {
          setShowAddDevice(false);
        }}
        okText="Add Device"
        title={<b>Add Device</b>}
        okButtonProps={{ loading: deviceIsLoading }}
        destroyOnClose
        open={showAddDevice}
        onOk={sumbitAddDevice}
      >
        <AddDeviceForm
          form={form}
          onFinish={(data: CreateDeviceDto) => {
            addDeviceMutation(data).then(() => {
              refetch();
              setShowAddDevice(false);
            });
          }}
        />
      </Modal>
      <Modal
        onCancel={() => {
          setSelectedDevice(null);
        }}
        okText="Delete Device"
        title={<b>Delete Device</b>}
        okButtonProps={{
          disabled: selectedDevice?.deviceName !== deleteDeviceName,
          loading: deleteDeviceIsLoading,
        }}
        destroyOnClose
        open={!!selectedDevice}
        onOk={async () => {
          await deleteDeviceMutation(selectedDevice?.id);
          await refetch();
          setSelectedDevice(null);
          setDeleteDeviceName("");
        }}
      >
        <Text>To delete device confirm name "</Text>
        <Text strong>{selectedDevice?.deviceName}</Text>
        <Text>".</Text>
        <Input
          value={deleteDeviceName}
          onChange={(e) => setDeleteDeviceName(e.target.value)}
        />
        <></>
      </Modal>
      <Button
        onClick={() => setIsMenuOpem((prev) => !prev)}
        size="large"
        type="primary"
      >
        WIMiIP LAB
      </Button>
      {isMenuOpen && (
        <LabjackContainer>
          <Text strong>Microservice Labjack1 Devices</Text>
          {data?.map((e) => (
            <Flex gap="5px">
              <Input value={e.deviceName} />
              <DeleteButton
                onClick={() =>
                  setSelectedDevice({ deviceName: e.deviceName, id: e.id })
                }
                type="primary"
                icon={<DeleteOutlined />}
                size="large"
              />
            </Flex>
          ))}
          <Button
            onClick={() => setShowAddDevice(true)}
            type="primary"
            style={{ marginTop: "40px" }}
          >
            ADD DEVICE
          </Button>
        </LabjackContainer>
      )}
    </LabjackMenuWrapper>
  );
};

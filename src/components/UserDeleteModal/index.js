import React from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../../redux/users/reducer';
import { Modal, notification } from 'antd';
import { Row, Col } from 'antd';
import { StyledButton } from './styles';

const UserDeleteModal = ({ user, setVisible, ...restProps }) => {
  const dispatch = useDispatch();

  const handleDeleteUser = async () => {
    try {
      await axios.delete(`/users/${user.id}`);
      dispatch(deleteUser(user.id));
      setVisible(false);
      notification.success({
        message: 'Başarı!',
        description: 'Kullanıcı başarıyla silindi!',
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Modal
      onCancel={() => setVisible(false)}
      title="Emin misin?"
      centered
      footer={null}
      {...restProps}
    >
      <Row>
        <Col span={24}>
          <b>{`${user.first_name} ${user.last_name}`}</b> kullanıcısını silmek
          istediğine emin misin?
        </Col>
        <Col span={24} style={{ marginTop: '30px' }}>
          <Row gutter={20} justify="end">
            <Col>
              <StyledButton type="red" onClick={() => setVisible(false)}>
                İptal
              </StyledButton>
            </Col>
            <Col>
              <StyledButton type="secondary" onClick={handleDeleteUser}>
                Ekle
              </StyledButton>
            </Col>
          </Row>
        </Col>
      </Row>
    </Modal>
  );
};

export default UserDeleteModal;

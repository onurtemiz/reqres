import React, { useState } from 'react';
import UserEditModalStyles, {
  StyledInput,
  InputSection,
  InputText,
  StyledButton,
} from './styles';
import { Modal, Row, Col, notification } from 'antd';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { updateUser } from '../../redux/users/reducer';

const UserEditModal = ({ user, setVisible, ...restProps }) => {
  const dispatch = useDispatch();
  const [editedUser, setEditedUser] = useState(user);
  const [loading, setLoading] = useState(false);

  const handleEditUser = async () => {
    const emailPattern = /^[^@s]+@[^@s.]+.[^@.s]+$/;
    if (
      editedUser.first_name.length === 0 ||
      editedUser.last_name.length === 0 ||
      !emailPattern.test(editedUser.email)
    ) {
      notification.error({
        message: 'Hata!',
        description: 'Lütfen bütün boşlukları doğru doldurun.',
      });
      return;
    }

    try {
      setLoading(true);
      const { data } = await axios.put(`/users/${user.id}`, editedUser);
      dispatch(updateUser(data));
      setLoading(false);
      setVisible(false);
      notification.success({
        message: 'Başarı!',
        description: 'Kullanıcı başarıyla düzenlendi!',
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Modal
      footer={null}
      centered
      onCancel={() => setVisible(false)}
      title="Kullanıcı düzenle"
      {...restProps}
    >
      <UserEditModalStyles>
        <Row gutter={[20, 20]}>
          <Col span={12}>
            <InputSection>
              <InputText>FIRST NAME</InputText>
              <StyledInput
                placeholder="First Name..."
                bordered={false}
                value={editedUser.first_name}
                onChange={(e) =>
                  setEditedUser({ ...editedUser, first_name: e.target.value })
                }
              />
            </InputSection>
          </Col>
          <Col span={12}>
            <InputSection>
              <InputText>LAST NAME</InputText>
              <StyledInput
                placeholder="Last Name..."
                bordered={false}
                value={editedUser.last_name}
                onChange={(e) =>
                  setEditedUser({ ...editedUser, last_name: e.target.value })
                }
              />
            </InputSection>
          </Col>
          <Col span={24}>
            <InputSection>
              <InputText>EMAIL</InputText>
              <StyledInput
                placeholder="Email..."
                bordered={false}
                value={editedUser.email}
                onChange={(e) =>
                  setEditedUser({ ...editedUser, email: e.target.value })
                }
              />
            </InputSection>
          </Col>
          <Col span={24}>
            <Row gutter={20} justify="end">
              <Col>
                <StyledButton type="red" onClick={() => setVisible(false)}>
                  İptal
                </StyledButton>
              </Col>
              <Col>
                <StyledButton
                  type="secondary"
                  onClick={handleEditUser}
                  loading={loading}
                >
                  Güncelle
                </StyledButton>
              </Col>
            </Row>
          </Col>
        </Row>
      </UserEditModalStyles>
    </Modal>
  );
};

export default UserEditModal;

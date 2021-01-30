import React, { useState } from 'react';
import UserCreateModalStyles, {
  StyledInput,
  InputSection,
  InputText,
  StyledButton,
} from './styles';
import { Modal, Row, Col, notification } from 'antd';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getUser } from '../../redux/users/reducer';

const UserCreateModal = ({ setVisible, ...restProps }) => {
  const dispatch = useDispatch();
  const [createdUser, setCreatedUser] = useState({
    first_name: '',
    last_name: '',
    email: '',
  });
  const [loading, setLoading] = useState(false);

  const handleCreateUser = async () => {
    const emailPattern = /^[^@s]+@[^@s.]+.[^@.s]+$/;
    if (
      createdUser.first_name.length === 0 ||
      createdUser.last_name.length === 0 ||
      !emailPattern.test(createdUser.email)
    ) {
      notification.error({
        message: 'Hata!',
        description: 'Lütfen bütün boşlukları doğru doldurun.',
      });
      return;
    }

    try {
      setLoading(true);
      const { data } = await axios.post(`/users/`, createdUser);
      dispatch(getUser(data));
      setLoading(false);
      setVisible(false);
      notification.success({
        message: 'Başarı!',
        description: 'Kullanıcı başarıyla eklendi!',
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
      title="Kullanıcı ekle"
      {...restProps}
    >
      <UserCreateModalStyles>
        <Row gutter={[20, 20]}>
          <Col span={12}>
            <InputSection>
              <InputText>FIRST NAME</InputText>
              <StyledInput
                placeholder="First Name..."
                bordered={false}
                value={createdUser.first_name}
                onChange={(e) =>
                  setCreatedUser({ ...createdUser, first_name: e.target.value })
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
                value={createdUser.last_name}
                onChange={(e) =>
                  setCreatedUser({ ...createdUser, last_name: e.target.value })
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
                value={createdUser.email}
                onChange={(e) =>
                  setCreatedUser({ ...createdUser, email: e.target.value })
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
                  onClick={handleCreateUser}
                  loading={loading}
                >
                  Ekle
                </StyledButton>
              </Col>
            </Row>
          </Col>
        </Row>
      </UserCreateModalStyles>
    </Modal>
  );
};

export default UserCreateModal;

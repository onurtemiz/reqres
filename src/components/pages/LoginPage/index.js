import React, { useState } from 'react';
import LoginDetailStyles, {
  LoginWrapper,
  Email,
  Password,
  StyledButton,
} from './styles';

import { Form, notification } from 'antd';

import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setToken } from '../../../redux/user/reducer';

function LoginDetail() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const handleFinish = async (values) => {
    try {
      setLoading(true);
      const { data } = await axios.post('/login', values);
      dispatch(setToken(data));
    } catch (error) {
      notification.error({
        message: 'Hata!',
        description: 'Yanlış giden bir şeyler var.',
      });
    } finally {
      setLoading(false);
    }
  };

  const validateMessages = {
    required: '${label} zorunlu!',
    types: {
      email: '${label} geçerli bir email değil!',
    },
  };

  return (
    <LoginDetailStyles>
      <LoginWrapper>
        <Form
          name="signin"
          requiredMark={true}
          onFinish={handleFinish}
          validateMessages={validateMessages}
        >
          <Form.Item
            colon={false}
            name="email"
            rules={[
              {
                required: true,
                type: 'email',
              },
            ]}
          >
            <Email placeholder="Eposta adresi..." bordered={false} />
          </Form.Item>

          <Form.Item colon={false} name="password" rules={[{ required: true }]}>
            <Password placeholder="Şifre..." bordered={false} />
          </Form.Item>

          <Form.Item>
            <StyledButton type="black" htmlType="submit" loading={loading}>
              GİRİŞ YAP
            </StyledButton>
          </Form.Item>
        </Form>
      </LoginWrapper>
    </LoginDetailStyles>
  );
}

export default LoginDetail;

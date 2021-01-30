import React, { useEffect, useState } from 'react';
import UsersTableStyles, {
  AvatarWrapper,
  Avatar,
  StyledButton,
  TableHeader,
  StyledInput,
  SubHeader,
} from './styles';
import { Table } from 'antd';
import { usePagination } from '../../hooks';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../redux/users/reducer';
import { UserDeleteModal, UserEditModal } from '../';
import UserCreateModal from '../UserCreateModal';
import Workbook from 'react-excel-workbook';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { FileExcel, FilePdf } from '@styled-icons/fa-solid';

const UsersTable = () => {
  const dispatch = useDispatch();
  const { page, total, fetchItems } = usePagination(
    {
      query: '/users',
    },
    (items) => dispatch(getUsers(items))
  );
  const { users } = useSelector((state) => state.users);
  const [toDeleteUser, setToDeleteUser] = useState();
  const [userDeleteModalVisible, setUserDeleteModalVisible] = useState(false);
  const [toEditUser, setToEditUser] = useState();
  const [userEditModalVisible, setUserEditModalVisible] = useState();
  const [userCreateModalVisible, setUserCreateModalVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUsers, setSelectedUsers] = useState([]);

  useEffect(() => {
    const lowSearch = searchTerm.toLowerCase();
    setSelectedUsers(
      users.filter(
        (u) =>
          u.first_name.toLowerCase().includes(lowSearch) ||
          u.last_name.toLowerCase().includes(lowSearch) ||
          u.email.toLowerCase().includes(lowSearch)
      )
    );
  }, [users, searchTerm]);

  const handleDelete = (user) => {
    setToDeleteUser(user);
    setUserDeleteModalVisible(true);
  };

  const handleEdit = (user) => {
    setToEditUser(user);
    setUserEditModalVisible(true);
  };

  const handlePdf = () => {
    const doc = new jsPDF();
    doc.autoTable({
      body: selectedUsers,
      columns: [
        { header: 'First Name', dataKey: 'first_name' },
        { header: 'Last Name', dataKey: 'last_name' },
        { header: 'Email', dataKey: 'email' },
      ],
    });
    doc.save('users.pdf');
  };

  const columns = [
    {
      title: 'AVATAR',
      dataIndex: 'avatar',
      key: 'avatar',
      render: (avatar) => (
        <AvatarWrapper>{avatar && <Avatar src={avatar} />}</AvatarWrapper>
      ),
    },
    {
      title: 'FIRST NAME',
      dataIndex: 'first_name',
      key: 'first_name',
    },
    {
      title: 'LAST NAME',
      dataIndex: 'last_name',
      key: 'last_name',
    },

    {
      title: 'EMAIL',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: '',
      key: 'edit',
      render: (text, user) => (
        <StyledButton type="secondary" onClick={() => handleEdit(user)}>
          Düzenle
        </StyledButton>
      ),
    },
    {
      title: '',
      key: 'delete',
      render: (text, user) => (
        <StyledButton type="red" onClick={() => handleDelete(user)}>
          Sil
        </StyledButton>
      ),
    },
  ];

  console.log(selectedUsers);
  return (
    <UsersTableStyles>
      {toDeleteUser && userDeleteModalVisible && (
        <UserDeleteModal
          visible={userDeleteModalVisible}
          setVisible={setUserDeleteModalVisible}
          user={toDeleteUser}
        />
      )}

      {toEditUser && userEditModalVisible && (
        <UserEditModal
          visible={userEditModalVisible}
          setVisible={setUserEditModalVisible}
          user={toEditUser}
        />
      )}

      {userCreateModalVisible && (
        <UserCreateModal
          visible={userCreateModalVisible}
          setVisible={setUserCreateModalVisible}
        />
      )}

      <TableHeader>
        <StyledInput
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          bordered={false}
        />
        <SubHeader>
          <FilePdf onClick={handlePdf} className="pdf-icon icon" />
          <Workbook
            filename="users.xlsx"
            element={<FileExcel className="excel-icon icon" />}
          >
            <Workbook.Sheet data={selectedUsers} name="Sheet A">
              <Workbook.Column label="First Name" value="first_name" />
              <Workbook.Column label="Last Name" value="last_name" />
              <Workbook.Column label="Email" value="email" />
            </Workbook.Sheet>
          </Workbook>
          <StyledButton onClick={() => setUserCreateModalVisible(true)}>
            YENİ KULLANICI EKLE
          </StyledButton>
        </SubHeader>
      </TableHeader>
      <Table
        id="users"
        columns={columns}
        dataSource={selectedUsers}
        rowKey={(item) => item.id}
        onChange={({ current }) => fetchItems(current)}
        pagination={{
          total: searchTerm ? selectedUsers.length : total,
          showSizeChanger: false,
          size: 'small',
          current: page,
        }}
      />
    </UsersTableStyles>
  );
};

export default UsersTable;

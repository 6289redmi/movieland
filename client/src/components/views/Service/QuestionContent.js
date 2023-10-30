import React from 'react';
import { Layout, Table, ConfigProvider } from 'antd';
import { Link } from 'react-router-dom';

const QuestionContent = () => {
const columns = [
  {
    title: '번호',
    dataIndex: 'Notice_id',
    key: 'Notice_id',
    align: 'center',
  },
  {
    title: '제목',
    dataIndex: 'title',
    key: 'title'  ,
    render: (text, record) => (
      <Link to={`/view/${record.Notice_id}`}>{text}</Link>
    ),
    width: '60%',
  },
  {
    title: '작성자',
    dataIndex: 'author',
    key: 'author',
  },
  {
    title: '작성일',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: '조회수',
    dataIndex: 'count',
    key: 'count',
  },
];
const data = [
  {
    key: '5',
    Notice_id: '5',
    title: '불법 유저 신고 방법',
    author: '관리자',
    date: '2023-07-27',
    count: '999',
  },
  {
    key: '4',
    Notice_id: '4',
    title: '개인정보 수정 방법',
    author: '관리자',
    date: '2023-07-27',
    count: '999',
  },
  {
    key: '3',
    Notice_id: '3',
    title: '계정 도용 발생 시 대처 방법',
    author: '관리자',
    date: '2023-07-27',
    count: '999',
  },
  {
    key: '2',
    Notice_id: '2',
    title: '비밀번호 찾는 방법',
    author: '관리자',
    date: '2023-07-27',
    count: '999',
  },
  {
    key: '1',
    Notice_id: '1',
    title: '아이디 찾는 방법',
    author: '관리자',
    date: '2023-07-27',
    count: '999',
  },
];

  return (
      <Layout
        style={{
          backgroundColor: '#FFF'
        }}>
              <h2 style={{
                backgroundColor: '#FFF',
                textAlign: 'center',
                fontSize: '25px'
              }}>자주 찾는 문의</h2>
        <ConfigProvider
        theme={{
          components: {
            Table: {
              borderColor: '#009000',
              headerBg: '#A0D468',
            },
          },
        }}
      >
      <Table columns={columns} dataSource={data} bordered />
      </ConfigProvider>
    </Layout>
  )
}

export default QuestionContent

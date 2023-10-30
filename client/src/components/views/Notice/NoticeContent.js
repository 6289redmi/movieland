import React from 'react';
import { Layout, Table, ConfigProvider } from 'antd';
import { Link } from 'react-router-dom';

const NoticeContent = () => {
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
      width: '50%',
    },
    {
      title: '댓글',
      dataIndex: 'comment',
      key: 'comment',
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
      key: '1',
      Notice_id: '4',
      title: '영화 관람권 티켓 이벤트 당첨자 공지',
      comment: '153',
      date: '2023-08-28',
      author: '관리자',
      count: '851',
    },
    {
      key: '2',
      Notice_id: '3',
      title: '게시판 규정 안내',
      comment: '51',
      author: '관리자',
      date: '2023-08-22',
      count: '19',
    },
    {
      key: '3',
      Notice_id: '2',
      title: '영화 관람권 티켓 이벤트 신청 공지',
      comment: '999',
      author: '관리자',
      date: '2023-08-18',
      count: '18740',
    },
    {
      key: '4',
      Notice_id: '1',
      title: '개인정보처리방침 개정 안내',
      comment: '12',
      author: '관리자',
      date: '2023-07-15',
      count: '152',
    },
  ];

  return (
    <Layout>
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
      <Table columns={columns} dataSource={data} bordered 
      style={{
        backgroundColor: '#FFF'
      }}/>
      </ConfigProvider>
    </Layout>
  )
}

export default NoticeContent

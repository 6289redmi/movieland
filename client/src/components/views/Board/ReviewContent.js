import React from 'react';
import { Layout, Table, ConfigProvider } from 'antd';
import { Link } from 'react-router-dom';

const ReviewContent = () => {
  
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
        <Link to={`/board/view/${record.Notice_id}`}>{text}</Link>
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
      <Table columns={columns} dataSource={data} bordered />
      </ConfigProvider>
    </Layout>
  )
}

export default ReviewContent

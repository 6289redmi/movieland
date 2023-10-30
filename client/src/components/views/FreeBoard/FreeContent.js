import React from 'react';
import { Layout, Table, ConfigProvider } from 'antd';
import { Link } from 'react-router-dom';


const FreeContent = () => {
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
      Notice_id: '8',
      title: '와 나 이벤트 영화 관람권 당첨됨 ㅋㅋㅋ',
      comment: '15',
      date: '15:39',
      author: '김부경',
      count: '34',
    },
    {
      key: '2',
      Notice_id: '7',
      title: '점심 너무 많이 먹었다',
      comment: '3',
      author: '뚜띠',
      date: '15:25',
      count: '13',
    },
    {
      key: '3',
      Notice_id: '6',
      title: '나 지금 홍대인데 같이 영화 보러 가실 분',
      comment: '6',
      author: '김민지',
      date: '13:04',
      count: '27',
    },
    {
      key: '4',
      Notice_id: '5',
      title: '박하사탕이 왜 명작이야',
      comment: '4',
      author: '린탬',
      date: '07:30',
      count: '30',
    },
    {
      key: '5',
      Notice_id: '4',
      title: '콘유 어제 봤는데',
      comment: '2',
      author: '칸',
      date: '05:48',
      count: '10',
    },
    {
      key: '6',
      Notice_id: '3',
      title: '여기 비 엄청 온다',
      comment: '10',
      author: '얍얍',
      date: '2023-08-27',
      count: '40',
    },
    {
      key: '7',
      Notice_id: '2',
      title: 'IMAX 자리 질문 좀',
      comment: '15',
      author: '나비',
      date: '2023-08-27',
      count: '53',
    },
    {
      key: '8',
      Notice_id: '1',
      title: '옛날 영화인데 제목이 기억안나',
      comment: '3',
      author: '차차',
      date: '2023-08-27',
      count: '16',
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

export default FreeContent

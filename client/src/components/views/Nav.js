import { ConfigProvider, Menu, Layout, Button, Space } from 'antd';
const { Header } = Layout;

const items = [
    {
      label: '공지사항',
      key: 'notice',
      children: [
        {
          type: 'group',
          children: [
            {
              label: (
                <a href="/notice" >
                공지사항
                </a>
            ),
              key: 'notice1',
            },
          ],
        },
      ],
    },
    {
        label: '영화',
        key: 'movie',
        children: [
          {
            type: 'group',
            children: [
              {
                label: (
                    <a href="/search" >
                    영화 검색
                    </a>
                ),
                key: 'movie1',
              },
              {
                label: (
                    <a href="/reco" >
                    추천 영화
                    </a>
                ),
                key: 'movie2',
              },
              {
                label: (
                    <a href="/new" >
                    신작 영화
                    </a>
                ),
                key: 'movie3',
              },
            ],
          },
        ],
      },
    {
      label: '게시판',
      key: 'board',
      children: [
        {
          type: 'group',
          children: [
            {
                label: (
                    <a href="/share" >
                    공유 게시판
                    </a>
                ),
              key: 'board1',
            },
            {
                label: (
                    <a href="/review" >
                    리뷰 게시판
                    </a>
                ),
              key: 'board2',
            },
            {
                label: (
                    <a href="/free" >
                    자유 게시판
                    </a>
                ),
              key: 'board3',
            },
          ],
        },
      ],
    },
    {
        label: '고객센터',
        key: 'service',
        children: [
          {
            type: 'group',
            children: [
              {
                label: (
                    <a href="/question" >
                    1:1 문의
                    </a>
                ),
                key: 'question',
              },
              {
                label: (
                    <a href="/service" >
                    내가 남긴 문의
                    </a>
                ),
                key: 'service2',
              },
            ],
          },
        ],
      },
  ];
  const App = () => {

    return (
    <ConfigProvider
      theme={{
        components: {
          Layout: {
            bodyBg: '#fff',
            headerBg: '#FFF',
            headerHeight: 64,
            headerPadding: `0 24px`,
            headerColor: '#fff',
            siderBg: '#fff',
          },
        },
      }}
    >
        <Layout>
        <Header
          style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <a href="/">
            <img
              className="logoImage"
              alt="logo"
              src="img/logo.png"
              style={{
                position: 'absolute',
                width: '200px',
                height: '100%',
                left: 0,
                top: 0,
              }}
            />
          </a>
          <Menu
            theme="light"
            mode="horizontal"
            items={items}
            style={{
              position: 'absolute',
              left: '200px',
              fontSize: 24,
            }}
          />
        <div
            style={{
              position: 'absolute',
              right: 10
            }}
          >
            <Space wrap>
                <Button type="link"  href="/login">로그인</Button>
                <Button type="primary"  href="/join">회원가입</Button>
            </Space>
          </div>
        </Header>
      </Layout>
    </ConfigProvider>
  );
};
export default App;
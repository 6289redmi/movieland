import React from 'react'
import { Button, Space } from 'antd';

const Login = () => {
  return (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '60vh', 
      }}>
      <Space direction="vertical" >
                <Button type="primary"  href="/login"
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '300px',
                    height: '44px',
                    backgroundColor: '#03c75a',
                    lineHeight: '44px',
                    fontSize: '14px',
                }}
                >
                    <img src="img/naver.png"
                    alt='naver'
                        style={{
                            maxHeight: '100%',
                            maxWidth: '100%'
                        }}
                    ></img>
                    네이버 로그인
                    </Button>
                <Button type="primary"  href="/login"
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '300px',
                    height: '44px',
                    backgroundColor: '#fee500',
                    lineHeight: '44px',
                    fontSize: '14px',
                    color: '#111'
                }}
                >
                    <img src="img/kakao.png"
                    alt='naver'
                        style={{
                            maxHeight: '100%',
                            maxWidth: '100%'
                        }}
                    ></img>
                    카카오 로그인
                    </Button>
            </Space>
    </div>
  )
}

export default Login

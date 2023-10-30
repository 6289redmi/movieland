import React from 'react'
import { Button, Space } from 'antd';

const Join = () => {
  return (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '60vh', 
      }}>
            <div style={{
                fontSize: '20px'
            }}>네이버, 카카오 간편 가입으로 3초만에 가입 완료!</div>
      <Space direction="vertical" >
                <Button type="primary"  href="/join"
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
                    네이버로 가입하기
                    </Button>
                <Button type="primary"  href="/join"
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
                    카카오로 가입하기
                    </Button>
            </Space>
    </div>
  )
}

export default Join

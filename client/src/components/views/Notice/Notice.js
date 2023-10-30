import React from 'react'
import { Breadcrumb } from 'antd';
import NoticeContent from './NoticeContent'

const Notice = () => {
  return (
    <div>
      <Breadcrumb
                        style={{
                            margin: '16px 16px',
                        }}
                            items={[
                            {
                                title: 'Home',
                            },
                            {
                                title: '공지사항'
                            },
                            {
                                title: '공지사항'
                            }
                            ]}
                        />
      <NoticeContent />
    </div>
  )
}
export default Notice

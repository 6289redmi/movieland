import React from 'react'
import { Breadcrumb } from 'antd';
import ShareContent from './ShareContent'

const Share = () => {
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
                                title: '게시판'
                            },
                            {
                                title: '공유게시판'
                            }
                            ]}
                        />
      <ShareContent />
    </div>
  )
}

export default Share


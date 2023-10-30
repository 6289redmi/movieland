import React from 'react'
import { Breadcrumb } from 'antd';
import FreeContent from './FreeContent'

const FreeBoard = () => {
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
                                title: '자유게시판'
                            }
                            ]}
                        />
      <FreeContent />
    </div>
  )
}

export default FreeBoard

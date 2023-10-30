import React from 'react'
import { Breadcrumb } from 'antd';
import QuestionContent from './QuestionContent'

function Question() {
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
                                title: '고객센터'
                            },
                            {
                                title: '1:1 문의'
                            }
                            ]}
                        />
      <QuestionContent />
    </div>
  )
}

export default Question

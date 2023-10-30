import React from 'react'
import { Breadcrumb } from 'antd';
import ReviewContent from './ReviewContent'

const Review = () => {
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
                                title: '리뷰게시판'
                            }
                            ]}
                        />
      <ReviewContent />
    </div>
  )
}

export default Review

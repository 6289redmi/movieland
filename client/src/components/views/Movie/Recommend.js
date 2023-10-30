import React from 'react'
import { Breadcrumb } from 'antd';

const recommend = () => {
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
                                title: '영화'
                            },
                            {
                                title: '추천 영화'
                            }
                            ]}
                        />
    </div>
  )
}

export default recommend

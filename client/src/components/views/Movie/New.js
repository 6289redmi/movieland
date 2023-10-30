import React from 'react'
import { Breadcrumb } from 'antd';

const New = () => {
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
                                title: '신작 영화'
                            }
                            ]}
                        />
    </div>
  )
}

export default New

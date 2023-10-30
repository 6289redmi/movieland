import React from 'react'
import { Breadcrumb } from 'antd';
import ServiceContent from './ServiceContent'

function Service() {
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
                                title: '내가 남긴 문의'
                            }
                            ]}
                        />
      <ServiceContent />
    </div>
  )
}

export default Service

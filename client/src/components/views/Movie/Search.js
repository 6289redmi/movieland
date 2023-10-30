import React from 'react'
import { Breadcrumb } from 'antd';

const Search = () => {
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
                                title: '영화 검색'
                            }
                            ]}
                        />
    </div>
  )
}

export default Search

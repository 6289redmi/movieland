import React from 'react';
import { Menu } from 'antd';
function getItem(label, key, children, type) {
  return {
    key,
    children,
    label,
    type,
  };
}
const items = [
    getItem('공지사항', 'notice', [getItem(<a href="/notice">공지사항</a>, '1')], 'group'),
    getItem('영화', 'movie', [getItem(<a href='/search'>영화 검색</a>, 'search'), getItem(<a href='/reco'>추천 영화</a>, 'recommend'), getItem(<a href='/new'>신작 영화</a>, 'new')], 'group'),
    getItem('게시판', 'board', [getItem(<a href='/share'>공유 게시판</a>, 'share'), getItem(<a href='/review'>리뷰 게시판</a>, 'review'), getItem(<a href='free'>자유 게시판</a>, 'free')], 'group'),
    getItem('고객센터', 'servie', [getItem(<a href='/question'>1:1 문의</a>, 'question'), getItem(<a href='/service'>내가 남긴 문의</a>, 'service')], 'group'),
  ];

const App = () => {
  return (
    <Menu
      mode="inline"
      items={items}
    />
  );
};
export default App;
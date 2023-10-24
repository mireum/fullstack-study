import React from 'react';
import Card from './Card';

function ProfileCard(props) {
  return (
    <Card
      title='Qwer'
      backgroundColor='#dee7ff'
    >
      <p>안녕하세요 최지우입니다</p>
      <p>리액트 수업 중입니다</p>
    </Card>
  );
}

export default ProfileCard;
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	padding: 16px;
	width: calc(100% - 32px);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const Container = styled.div`
	width: 100%;
	max-width: 720px;

	& > * {
		:not(:last-child) {
			margin-bottom: 16px;
		}
	}
`;


function PostWritePage(props) {
  return (
    <div>
      
    </div>
  );
}

export default PostWritePage;
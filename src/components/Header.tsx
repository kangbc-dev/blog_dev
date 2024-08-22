import React from "react";
import styled from "styled-components";

const S_Header = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;

	width: 100%;
	height: 72px;
	border: 1px solid red;
`;

function Header() {
	return (
		<>
			<S_Header>
				<div>logo</div>
			</S_Header>
		</>
	);
}

export default Header;

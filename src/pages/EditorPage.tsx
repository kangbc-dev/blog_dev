import React from "react";
import Toolbar from "../components/Toolbar";
import Editor from "../components/Editor";
import Preview from "../components/Preview";
import styled from "styled-components";

const S_Div = styled.div`
	display: flex;

	margin: 100px auto;
	border: 1px solid #222;
	width: 1000px;
	& > * {
		flex: 1;
	}
`;

const EditorPage: React.FC = () => {
	return (
		<>
			<Toolbar />
			<S_Div>
				<Editor />
				<Preview />
			</S_Div>
		</>
	);
};

export default EditorPage;

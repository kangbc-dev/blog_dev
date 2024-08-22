import React from "react";
import styled from "styled-components";
import { useRecoilState, useRecoilValue } from "recoil";
import { editorState, textAreaState } from "../recoil/editorState";

const ToolbarContainer = styled.div`
	display: flex;
	border-bottom: 1px solid #ddd;
	padding: 8px;
	justify-content: space-between;
`;

const Button = styled.button`
	border: none;
	background: none;
	cursor: pointer;
	font-size: 16px;
`;

const Toolbar: React.FC = () => {
	const [content, setContent] = useRecoilState(editorState);
	const textArea = useRecoilValue(textAreaState);

	const handleBold = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		if (textArea === null) return;
		const start = textArea.current?.selectionStart as number;
		const end = textArea.current?.selectionEnd as number;
		const textAreaCurrent = textArea.current;
		if (textAreaCurrent === null) return;
		// if (start !== end) {
		const text = textAreaCurrent.value;
		// 드래그된 텍스트 이전의 텍스트를 잘라서 가져옴
		const before = text.substring(0, start);
		// 드래그된 텍스트 이후의 텍스트를 잘라서 가져옴

		//드래그된 텍스트
		const draggedText = text.substring(start, end);

		const after = text.substring(end);
		console.log(after);
		// 기존 텍스트에서 드래그된 부분을 "1"로 대체하고, 이전 및 이후 텍스트를 합침
		let updateContent: string;
		if (draggedText === "") {
			updateContent = `${before}**텍스트**${after}`;
		} else {
			updateContent = `${before}**${draggedText}**${after}`;
		}
		setContent(updateContent);
		// 드래그된 부분 이후로 커서를 위치시킴
		// }
	};
	return (
		<ToolbarContainer>
			<Button onClick={handleBold}>
				<span className="bold">B</span>
			</Button>
			{/* 다른 스타일 버튼 추가 가능 */}
		</ToolbarContainer>
	);
};

export default Toolbar;

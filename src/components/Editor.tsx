import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { useRecoilState, useRecoilValue } from "recoil";
import { editorState, mirrorState, textAreaState } from "../recoil/editorState";
import MarkdownIt from "markdown-it";
import hljs from "highlight.js";
import "highlight.js/styles/monokai-sublime.css";

const EditorContainer = styled.textarea`
	width: 100%;
	height: 300px;
	border: none;
	padding: 16px;
	font-size: 16px;
	outline: none;
	resize: none;
`;

const Editor: React.FC = () => {
	// recoilState import 줄
	const [content, setContent] = useRecoilState(editorState);
	const [mirrorContent, setMirrorContent] = useRecoilState(mirrorState);
	const [textArea, setTextArea] = useRecoilState(textAreaState);
	const textRef = useRef<HTMLTextAreaElement>(null);

	// markdown-it 라이브러리
	const md = new MarkdownIt({
		highlight: function (str, lang) {
			if (lang && hljs.getLanguage(lang)) {
				try {
					return hljs.highlight(str, { language: lang }).value;
				} catch (__) {}
			}
			return ""; // 기본 반환 값
		},
	});

	// editor textarea 변경 이벤트
	const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setContent(e.target.value);
	};

	// textarea ref를 recoilState를 통해 Toolbar로 넘겨주는 코드
	useEffect(() => {
		if (textRef === null) return;
		setTextArea(textRef);
	}, []);

	useEffect(() => {
		// textarea가 변경될 때 마다(content recoil) mirror부분에 값 변경.
		const result = md.render(content);
		setMirrorContent(result);
	}, [content, textRef.current]);

	// 시험 적용

	// 시험 적용

	return (
		<>
			<EditorContainer
				ref={textRef}
				value={content}
				onChange={handleChange}
				placeholder="여기에 내용을 입력하세요"
			/>
		</>
	);
};

export default Editor;

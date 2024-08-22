import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { editorState, mirrorState } from "../recoil/editorState";

const PreviewContainer = styled.div`
	/* border: 1px solid #ddd; */
	white-space: pre-wrap;
`;

const Preview: React.FC = () => {
	const mirrorRef = useRef<HTMLDivElement>(null);
	const mirrorContent = useRecoilValue(mirrorState);

	useEffect(() => {
		if (!mirrorRef.current) return;
		mirrorRef.current.innerHTML = mirrorContent;
	}, [mirrorContent]);

	return <PreviewContainer ref={mirrorRef}>{mirrorContent}</PreviewContainer>;
};

export default Preview;

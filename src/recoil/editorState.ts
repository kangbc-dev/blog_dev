import { RefObject } from "react";
import { atom } from "recoil";

export const editorState = atom<string>({
	key: "editorState",
	default: "",
});

export const mirrorState = atom<string>({
	key: "mirrorState",
	default: "",
});

export const textAreaState = atom<RefObject<HTMLTextAreaElement> | null>({
	key: "textAreaState",
	default: null,
});

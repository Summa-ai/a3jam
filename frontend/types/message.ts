export interface IRequest {
  sentence: string;
  typing_and_grammar: boolean;
  parsing: boolean;
  meaning: boolean;
}

export interface IMessageResponse {
  words: Word[];
}

interface Parsing {
  [key: string]: _[];
}

interface _ {
  [key: string]: string;
}

export interface ICorrection {
  word: string;
  correction: string;
  type: string;
}

export const MistakeType = {
  typing: "typing",
  grammar: "grammar",
};

export interface Word {
  word: string;
  correction?: string;
  type?: string;
  parsing?: string;
  meaning?: string;
}

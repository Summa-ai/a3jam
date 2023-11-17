export interface IDictionaryResponse {
  lemma: Lemma;
  stems: Lemma[];
  wordForms: WordForm[];
  senses: Sense[];
  morphologicalPatterns: string;
  pos: string;
  verbOrigin: string;
  nounOrigin: string;
  originality: string;
  hasTanween: boolean;
}

interface Sense {
  _id: string;
  definition: Definition;
  translations: Translation[];
  contexts: FormRepresentation[];
  domainIds: string[];
  domains: string[];
  examples: Example[];
  relations: Relation[];
  image: string;
}

interface Relation {
  type: string;
  related: string;
}

interface Example {
  form: string;
  phonetic: string;
  dialect: string;
  audio: string;
  exampleType: string;
  source: string;
}

interface Translation {
  language: string;
  form: string;
  phonetic: string;
  dialect: string;
  audio: string;
}

interface Definition {
  statement: Statement;
}

interface Statement {
  statement: string;
}

interface WordForm {
  formRepresentations: FormRepresentation[];
  aspect: string;
  def: string;
  gender: string;
  isNasab: boolean;
  numberWordForm: string;
  person: string;
  isSmall: boolean;
  voice: string;
}

interface Lemma {
  formRepresentations: FormRepresentation[];
  type: string;
}

interface FormRepresentation {
  form: string;
  phonetic: string;
  dialect: string;
  audio: string;
}

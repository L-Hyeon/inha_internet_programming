export interface Word {
  id: number;
  word: string;
  kor: string;
  eng: string;
}

export interface User {
  id: number;
  uid: string;
  isAdmin: boolean;
}

export interface Study {
  id: number;
  user_id: number;
  word_id: number;
}

export interface Notice {
  id: number;
  title: string;
  content: string;
  createtime: string;
  uid: string;
}

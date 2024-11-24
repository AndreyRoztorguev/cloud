export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
}

export interface File {
  id: string;
  name: string;
  size: number;
  type: string;
  date: string;
  users: User[];
}

export interface Folder {
  id: string;
  type: string;
  date: string;
  users: User[];
  files: File[];
}

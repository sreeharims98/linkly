export interface User {
  id: number;
  username: string;
  email: string;
  password_hash: string | null;
  created_at: Date;
}

export interface Post {
  id: number;
  user_id: number;
  title: string;
  description: string;
  created_at: Date;
}

export interface Comment {
  id: number;
  post_id: number;
  user_id: number;
  body: string;
  created_at: Date;
}

export interface Vote {
  id: number;
  post_id: number;
  user_id: number;
  created_at: Date;
}

// Temporary until Phase 3 auth exists — hardcode a fake user id for now
export const TEMP_USER_ID = 1;

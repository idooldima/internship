export type Credentials = {
  email: string;
  username: string;
  password: string;
};

export type User = {
  jwt: string;
  user: {
    id: number;
    username: string;
    email: string;
    provider: string;
    confirmed: true;
    blocked: null;
    role: {
      id: 1;
      name: string;
      description: string;
      type: string;
      created_by: null;
      updated_by: null;
    };
    created_by: null;
    updated_by: null;
    created_at: string;
    updated_at: string;
  };
};

export type ErrorType = {
  message: string;
};

export type AuthStateType = {
  currentUser: User | null;
  isLoading: boolean;
  error: ErrorType | null;
};

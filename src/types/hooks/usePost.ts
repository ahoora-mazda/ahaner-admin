export interface UsePost {
  route: string;
  initial?: {
    [key: string]: string | number | boolean;
  };
  initialState?: {
    [key: string]: string | number | boolean;
  };
  redirect: {
    status: boolean;
    action?: (data: any, body: any) => void;
  };
  message?: boolean;
  setError?: (body: any) => void;
  errorAction?: (error: any, body: any) => void;
  isProgress?: boolean;
}

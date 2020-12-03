export interface IUserState {
  email: string;
  isLoading: boolean;
  error: {
    isLoginError: boolean;
    isEmailExist: boolean;
  }
}

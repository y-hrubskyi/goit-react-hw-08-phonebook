export const selectAuthIsLoggedIn = state => state.auth.isLoggedIn;

export const selectAuthUser = state => state.auth.user;

export const selectAuthIsRefreshing = state => state.auth.isRefreshing;

export const selectAuthIsLoading = state => state.auth.isLoading;

export const selectAuthError = state => state.auth.error;

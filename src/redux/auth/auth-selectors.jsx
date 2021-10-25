const getIsLoggedIn = (state) => state.auth.isLoggedIn;

const getUserName = (state) => state.auth.user.name;

const getIsRefreshCurrentPage = (state) => state.auth.isreFreshCurrentPage;

const getError = (state) => state.auth.error;

const authSelectors = {
  getIsLoggedIn,
  getUserName,
  getIsRefreshCurrentPage,
  getError,
};

export default authSelectors;

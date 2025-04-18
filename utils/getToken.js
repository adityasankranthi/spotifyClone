// utils/getToken.js
export const getAccessTokenFromURL = () => {
    const params = new URLSearchParams(window.location.search);
    return params.get("access_token");
  };    
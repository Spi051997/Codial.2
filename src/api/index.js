import { LOCAL_STORAGE_TOEKN_KEY } from "../utils/index";
const customefetch = async (url, { body, ...customconfig }) => {
  //   getting token  and store it into local storage
  const token = window.localStorage.getItem(LOCAL_STORAGE_TOEKN_KEY);

  const headers = {
    "content-type": "application/json",
    Accept: "application/json",
  };
  //Bearer Token A security token with the property that any party in possession of the token (a “bearer”) can use the token in any way that any other party in possession of it can
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  const config = {
    ...customconfig,
    headers: {
      ...headers,
      ...customconfig.headers,
    },
  };
  if (body) {
    config.body = JSON.stringify(body);
  }
  try {
    const response = await fetch(url, config);
    const data = await response.json();

    if (response.success) {
      return {
        data: data.data,
        success: true,
      };
    }
    throw new Error(data.message);
  } catch (error) {
    console.error(error);
    return {
      message: error.message,
      success: true,
    };
  }
};

// custom fetch-1 has Completed

const getPost = (page, limit) => {
  return customefetch();
};

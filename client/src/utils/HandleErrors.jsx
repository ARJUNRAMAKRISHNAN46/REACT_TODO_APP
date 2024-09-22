export const HandleErrors = (error) => {
  if (error.response && error.response.data && error.response.data.message) {
    return { message: error.response.data.message };
  } else {
    return { message: error.message };
  }
};

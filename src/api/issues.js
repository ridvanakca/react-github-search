import instance from "./request";

const getAll = async (query) => {
  try {
    const response = await instance.get(`/issues?q=${query}`);
    const allIssues = response.data.items;

    return allIssues;
  } catch (error) {
    console.log(error);
  }
};

const issues = {
  getAll: getAll,
};

export default issues;

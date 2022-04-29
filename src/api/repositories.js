import instance from "./request";

const getAll = async (query) => {
  try {
    const response = await instance.get(`/repositories?q=${query}`);
    const allRepos = response.data.items;

    return allRepos;
  } catch (error) {
    console.log(error);
  }
};

const repositories = {
  getAll: getAll,
};

export default repositories;

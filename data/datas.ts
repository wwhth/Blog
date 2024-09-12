export const getAllPosts = async () => {
  return await fetch("http://101.200.232.30:3001/api/v1/article").then((res) =>
    res.json()
  );
};

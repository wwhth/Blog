export const getAllPosts = async () => {
  return await fetch("http://localhost:3001/api/v1/article").then((res) =>
    res.json()
  );
};

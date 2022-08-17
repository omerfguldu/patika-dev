import axios from "axios";

const getData = async (id) => {
  const { data: getUserData } = await axios(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );

  const { data: posts } = await axios(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const result = { ...getUserData, posts };
  console.log(result);
};

export default getData;

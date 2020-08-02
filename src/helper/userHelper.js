export const getUserList = () => {
  return fetch("https://panorbit.in/api/users.json", { method: "GET" })
    .then((response) => {
      //console.log(response);  
      return response.json();
    })
    .catch((err) => console.log(err));
};

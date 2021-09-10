import axios from "../http-common";

export const PostCadValores = (dataForm) => {
  axios
    .post(`http://localhost:8081/contas`, dataForm)
    .then((res) => {
      console.log(res);
    })
    .catch((e) => {
      console.log(e);
    });
};

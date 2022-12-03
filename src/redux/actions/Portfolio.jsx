import axios from "axios";

const GetPortfolioRequest = () => {
  return {
    type: "GET_PORTFOLIO_REQUEST",
  };
};

const GetPortfolioSucess = (data) => {
  return {
    type: "GET_PORTFOLIO_SUCCESS",
    payload: data,
  };
};

const GetPortfolioError = (error) => {
  return {
    type: "GET_PORTFOLIO_ERROR",
    payload: error,
  };
};

export const GetPortfolio = () => {
  return (dispatch) => {
    dispatch(GetPortfolioRequest());
    axios({
      method: "GET",
      url: `http://localhost:4117/api/v1/portfolio`,
    })
      .then((res) => {
        //ketika sukses, dispatch sucess
        dispatch(GetPortfolioSucess(res.data.data));
      })
      .catch((err) => {
        dispatch(GetPortfolioError(err));
      });
  };
};

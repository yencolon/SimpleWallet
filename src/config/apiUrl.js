export const API_URL =
  !process.env.NODE_ENV || process.env.NODE_ENV === "development"
    ? "http://127.0.0.1:5000/"
    : "https://apiwalletrest.herokuapp.com/"; /// '';

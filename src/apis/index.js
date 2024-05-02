import axios from "axios";
import { useRouter } from "next/router";
import { NodePaths } from "../../lib/pages";

const MEXPANSION_BASE_URL = process.env.MEXPANSION_BASE_URL;

export const getAxiosInstance = async () => {
  //baseurl should the api url and should replace the fetch inside getStaticProps
  const instance = axios.create({
    baseURL:MEXPANSION_BASE_URL,
    headers: {
      Accept: "application/json",
    },
  });
  instance.interceptors.request.use(
    function (response) {
      return response;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  return instance;
};

;



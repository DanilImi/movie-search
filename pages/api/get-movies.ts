import type { NextApiRequest, NextApiResponse } from "next";
import { Method } from "../../src/shared/constants/http-method";

type ResponseData = {
  message?: string;
  results?: string[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  try {
    if (req.method === Method.GET) {
      const {} = req.query;
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
        },
      };

      const response = await fetch(
        "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
        options
      );
      const data = await response.json();
      console.log("data:", data);

      res.status(200).json({ message: "success" });
    } else {
      throw Error();
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "something wrong!" });
  }
}

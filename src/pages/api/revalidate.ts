import type { NextApiHandler } from "next";

import { REVALIDATE_SECRET } from "@/configuration";

export const revalidateApiHandler: NextApiHandler = async (
  request,
  response
) => {
  if (request.method !== "GET") {
    return response.status(404).end("404 Not Found");
  }

  if (!request.query.secret) {
    return response.status(401).send("401 Unauthorized");
  }

  if (request.query.secret !== REVALIDATE_SECRET) {
    return response.status(403).send("403 Forbidden");
  }

  try {
    await response.unstable_revalidate("/");
    return response.status(200).send("200 OK");
  } catch (error) {
    return response.status(500).send("500 Internal Server Error");
  }
};

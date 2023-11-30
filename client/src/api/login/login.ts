import servive from "@/server/server";
import * as T from "./type";

export function login(data: T.ILoginParams) {
  return servive({
    url: "/login",
    headers: {
      isToken: false,
    },
    method: "post",
    data: data,
  });
}

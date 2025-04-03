"use server"

import { auth } from "../auth";

export async function getWorkSpace() {
    const session = await auth();
    // console.log(session);
    if (!session?.payload?.token) {
      throw new Error("No authentication token found");
    }
  
    const res = await fetch("http://96.9.81.187:8080/api/v1/workspaces?pageNo=1&pageSize=10&sortBy=workspaceId&sortDirection=ASC", {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${session?.payload?.token}`
      },
    });
    const data = await res.json();
    return data;
  }
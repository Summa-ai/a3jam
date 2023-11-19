"use server";

import { IDictionaryResponse } from "../../types/dictionary";

export async function getDictionaryResponse(word: string) {
  const response: IDictionaryResponse[] = await fetch(
    `https://siwar.ksaa.gov.sa/api/alriyadh/search?query=${word}`,
    {
      headers: {
        apikey: process.env.SIWAR_API_KEY!,
      },
    }
  ).then((res) => res.json());
  console.log(process.env.BACKEND_URL);
  if (response.length === 0) {
    const request = await fetch(`${process.env.BACKEND_URL!}/dictionary`, {
      method: "POST",
      body: JSON.stringify({ word: word }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
    console.log(request);
  } else {
    console.log(response);
  }
}

"use server";

import { IDictionaryResponse } from "../../types/dictionary";

export async function getDictionaryResponse(word: string) {
  const response: IDictionaryResponse[] = await fetch(
    `https://siwar.ksaa.gov.sa/api/alriyadh/search?query=${word}`,
    {
      headers: {
        apikey: "7e9eba94-01fb-4863-b6c8-2e9618882775",
      },
    }
  ).then((res) => res.json());

  if (response.length === 0) {
    console.log("null");
  } else {
    console.log(response);
  }
}

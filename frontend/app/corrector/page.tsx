"use client";
import { ReloadIcon } from "@radix-ui/react-icons";

import copy from "copy-to-clipboard";
import Image from "next/image";
import { useState } from "react";
import { Button } from "../../components/ui/button";
import { Checkbox } from "../../components/ui/checkbox";
import { Label } from "../../components/ui/label";
import { RadioGroup, RadioGroupItem } from "../../components/ui/radio-group";
import { ScrollArea } from "../../components/ui/scroll-area";
import { Textarea } from "../../components/ui/textarea";
import { Toaster } from "../../components/ui/toaster";
import { useToast } from "../../components/ui/use-toast";
import { cn } from "../../lib/utils";
import { IMessageResponse, IRequest } from "../../types/message";
import { getResponse } from "../actions";
import CorrectionPopover from "./components/correctionPopover";

export default function Corrector() {
  const [request, setRequest] = useState<IRequest>({
    sentence: "",
    meaning: false,
    parsing: false,
    typing_and_grammar: true,
  });

  const [results, setResults] = useState<IMessageResponse | null>();
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  async function getData() {
    if (request.sentence === "") {
      toast({
        dir: "rtl",
        className: "items-end",
        description: "الرجاء كتابة النص المراد تصحيحة",
        variant: "destructive",
      });
      return;
    }
    setLoading(true);
    setResults(await getResponse(request));
    setLoading(false);
  }

  function copyText() {
    copy(
      results!.words
        .map((e) =>
          e.correction && e.correction !== "" ? e.correction : e.word
        )
        .join(" ")
    );
    toast({
      dir: "rtl",
      className: "items-end",
      description: "تم نسخ النص",
      variant: "default",
    });
  }

  function newText() {
    setResults(null);
    setRequest({
      sentence: "",
      meaning: false,
      parsing: false,
      typing_and_grammar: true,
    });
  }

  return (
    <>
      <Toaster />
      <div className="">
        <div className="w-screen">
          <div className="h-7" />
          {results ? (
            <div className="w-screen px-7">
              <div
                className="w-full flex flex-col justify-center items-center"
                dir="rtl"
              >
                <ScrollArea
                  dir="rtl"
                  className="bg-secondary overflow-y-auto w-full rounded-lg min-h-[20rem] max-h-[calc(100vh-180px)] border-2 p-2"
                >
                  <div className="h-full rounded-lg p-1 flex flex-row gap-1 flex-wrap">
                    {results.words.map((e, i) => (
                      <div
                        key={i}
                        className={cn("", {
                          "underline decoration-red-600 underline-offset-[6px] max-w-min":
                            e.correction && e.correction != "",
                        })}
                      >
                        <CorrectionPopover {...e} />
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </div>
              <div className="h-4" />
              <div className="flex flex-row justify-between">
                <Button
                  className="w-[120px] h-[45px] bg-primaryLight rounded-lg shadow-md flex flex-row justify-center items-center gap-2 text-white hover:bg-white hover:text-primaryLight"
                  onClick={newText}
                >
                  <p className="text-lg font-rtl">نص جديد</p>
                </Button>
                <Button
                  className="w-[160px] h-[45px] bg-[#FBFBFB] rounded-lg shadow-md flex flex-row justify-center items-center gap-2 hover:bg-primaryLight hover:text-white text-primaryLight"
                  onClick={copyText}
                >
                  <p className="text-lg  font-rtl">نسخ النص</p>
                  <Image width={20} height={20} alt="" src="/copyIcon.png" />
                </Button>
              </div>
            </div>
          ) : (
            <div
              className="gap-5 flex flex-col w-full justify-center items-center"
              dir="rtl"
            >
              <p className="text-primaryLight font-rtl text-lg">
                المدقق و المعرب الذكي
              </p>
              <div className="px-10 w-screen">
                <Textarea
                  onChange={(e) =>
                    setRequest({ ...request, sentence: e.target.value })
                  }
                  rows={10}
                  className="w-full bg-[#FBFBFB]"
                  placeholder="أدخل النص المراد تدقيقه ..."
                />
              </div>
              <div className="flex flex-col">
                <RadioGroup
                  defaultValue="true"
                  className="flex flex-row"
                  dir="rtl"
                  onValueChange={(e) =>
                    setRequest({
                      ...request,
                      typing_and_grammar: e === "true" ? true : false,
                    })
                  }
                >
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="false" id="r1" />
                    <Label
                      htmlFor="r1"
                      className="text-primaryLight font-rtl text-md"
                    >
                      تصحيح إملائي
                    </Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="true" id="r2" />
                    <Label
                      htmlFor="r2"
                      className="text-primaryLight font-rtl text-md"
                    >
                      تصحيح إملائي و نحوي
                    </Label>
                  </div>
                </RadioGroup>

                <div className="flex flex-row justify-between mt-10">
                  <div className="flex items-center">
                    <Checkbox
                      id="parsing"
                      onCheckedChange={(e) =>
                        setRequest({ ...request, parsing: true })
                      }
                    />
                    <div className="w-2" />
                    <label
                      htmlFor="parsing"
                      className="text-md font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-primaryLight font-rtl"
                    >
                      الإعراب
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox
                      id="meaning"
                      onCheckedChange={(e) =>
                        setRequest({ ...request, meaning: true })
                      }
                    />
                    <div className="w-2" />
                    <label
                      htmlFor="meaning"
                      className="text-md font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-primaryLight font-rtl"
                    >
                      المعاني
                    </label>
                  </div>
                </div>
              </div>
              <Button
                onClick={() => getData()}
                className="bg-primaryLight w-64"
                disabled={loading}
              >
                {!loading ? (
                  <p className="font-rtl">إبدأ يا اعجم</p>
                ) : (
                  <div className="flex flex-row gap-2 items-center">
                    <ReloadIcon className="mr-2 h-4 w-4 animate-spin text-white" />
                    <p>إبدأ يا اعجم</p>
                  </div>
                )}
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

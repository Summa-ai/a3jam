import { isMobile } from "react-device-detect";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../../components/ui/popover";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../../components/ui/tooltip";
import { cn } from "../../../lib/utils";
import { ArrowIcon } from "../../../public/arrow";
import { Word } from "../../../types/message";
import { getDictionaryResponse } from "../actions";
export default function CorrectionPopover(e: Word) {
  const shouldHadPopover = (e: Word): boolean =>
    (e.correction !== undefined && e.correction !== "") ||
    (e.meaning !== undefined && e.meaning !== "") ||
    (e.parsing !== undefined && e.parsing !== "");

  function getMistakeType(mistake: string | null): string {
    if (mistake === "grammar") {
      return "خطأ نحوي";
    } else {
      return "خطأ إملائي";
    }
  }

  if (isMobile) {
    return (
      <Popover>
        <PopoverTrigger asChild>
          <p
            className={cn({
              "bg-red-300": e.correction && e.correction != "",
            })}
          >
            {e.correction && e.correction !== "" ? e.correction : e.word}
          </p>
        </PopoverTrigger>
        {shouldHadPopover(e) && (
          <PopoverContent
            className="w-80 bg-white border-[.5px] border-primaryLight"
            dir="rtl"
          >
            {e.correction && e.correction !== "" ? (
              <div className="bg-gray-100 text-black  p-1 rounded-md">
                <div className="flex flex-row gap-2 items-center ">
                  <p className=" text-lg line-through decoration-red-600 ">
                    {e.word}
                  </p>
                  <div className="text-black w-5 h-5">{ArrowIcon}</div>
                  <p className="text-lg bg-primaryLight p-1 text-white rounded-md">
                    {e.correction}
                  </p>
                </div>
                <div className="flex flex-row gap-1">
                  <p className="text-xs">{getMistakeType(e.type ?? null)}</p>
                </div>
              </div>
            ) : null}
            {e.parsing ? (
              <>
                <div className="h-1" />
                <div className=" text-black flex flex-row gap-1 text-xs">
                  <div className="">إعرابها: </div>
                  {e.parsing}
                </div>
              </>
            ) : null}
            {e.meaning ? (
              <>
                <div className="h-1" />
                <div className=" text-black flex flex-row gap-1 text-xs">
                  <div className="">المعنى: </div>
                  {e.meaning}
                </div>
              </>
            ) : null}
          </PopoverContent>
        )}
      </Popover>
    );
  }

  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip
        onOpenChange={(isOpen) =>
          isOpen && getDictionaryResponse(e.correction ?? e.word)
        }
      >
        <TooltipTrigger asChild>
          <p
            className={cn({
              "bg-red-300": e.correction && e.correction != "",
            })}
          >
            {e.correction && e.correction !== "" ? e.correction : e.word}
          </p>
        </TooltipTrigger>
        {shouldHadPopover(e) && (
          <TooltipContent
            side="bottom"
            className="w-80 bg-white border-[.5px] border-primaryLight"
          >
            {e.correction && e.correction !== "" ? (
              <div className="bg-gray-100 text-black  p-1 rounded-md">
                <div className="flex flex-row gap-2 items-center ">
                  <p className=" text-lg line-through decoration-red-600 ">
                    {e.word}
                  </p>
                  <div className="text-black w-5 h-5">{ArrowIcon}</div>
                  <p className="text-lg bg-primaryLight p-1 text-white rounded-md">
                    {e.correction}
                  </p>
                </div>
                <div className="flex flex-row gap-1">
                  <p className="text-xs">{getMistakeType(e.type ?? null)}</p>
                </div>
              </div>
            ) : null}
            {e.parsing ? (
              <>
                <div className="h-1" />
                <div className=" text-black flex flex-row gap-1">
                  <div className="">إعرابها: </div>
                  {e.parsing}
                </div>
              </>
            ) : (
              <></>
            )}
            {e.meaning ? (
              <>
                <div className="h-1" />
                <div className=" text-black flex flex-row gap-1">
                  <div className="">المعنى: </div>
                  {e.meaning}
                </div>
              </>
            ) : (
              <></>
            )}
          </TooltipContent>
        )}
      </Tooltip>
    </TooltipProvider>
  );
}

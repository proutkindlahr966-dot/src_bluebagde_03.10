"use client";

import FooterLanguages from "@/components/business-center/FooterLanguages";
import { useLocale } from "@/components/business-center/LocaleContext";

type Props = {
  ticketId: string;
  locked: boolean;
  onActivate: () => void;
  onMoreLanguages: () => void;
  onFooterLangChange: (lang: string) => void;
};

export default function PageContent({
  ticketId,
  locked,
  onActivate,
  onMoreLanguages,
  onFooterLangChange,
}: Props) {
  const { tp } = useLocale();

  return (
    <div
      id="pageContent"
      className={`max-w-[768px] w-full p-4 h-full${locked ? " is-locked" : ""}`}
    >
      <div className="w-full">
        <div className="flex items-start gap-[8px] flex-col justify-start mb-[30px]">
          <div className="flex items-center justify-start gap-[8px]">
            <div className="verified-badge flex items-center justify-center">
              <img src="/icons/ic_blue.svg" alt="" />
            </div>
          </div>
          <b className="text-[2rem]">{tp("heading")}</b>
        </div>

        <div className="w-full">
          <div className="w-full mb-[20px]">
            <p className="text-[15px] mb-[0px] mt-[15px]">{tp("intro1")}</p>
            <p className="text-[15px] mb-[0px] mt-[15px]">{tp("intro2")}</p>
            <p className="text-[15px] mb-[0px] mt-[15px]">{tp("intro3")}</p>
            <p className="text-[16px] mb-[0px] mt-[14px] text-[#465a69]">
              <span>{tp("ticketPrefix")}</span>
              <span>{ticketId}</span>
            </p>
          </div>

          <div className="w-full">
            <p className="mb-[15px]">
              <b className="text-[17px] font-bold">{tp("guideTitle")}</b>
            </p>
            <p className="text-[15px] mb-[10px]">{tp("guide1")}</p>
            <p className="text-[15px] mb-[10px]">{tp("guide2")}</p>
            <p className="text-[15px] mb-[10px]">{tp("guide3")}</p>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={onActivate}
        className="bg-[#1877f2] text-white border-none rounded-full text-[16px] font-semibold px-[24px] py-[12px] cursor-pointer block w-full max-w-[300px] my-[20px] mx-auto text-center"
      >
        {tp("submitBtn")}
      </button>

      <FooterLanguages onMore={onMoreLanguages} onLangChange={onFooterLangChange} />
    </div>
  );
}

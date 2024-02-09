"use client";
import { usePathname, useRouter } from "@/navigation";
import LanguageIcon from "./ui/language-icon";
import { useTransition } from "react";
import { useParams } from "next/navigation";

const ChangeLanguage = () => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const { locale } = useParams();
  const changeLang = () => {
    startTransition(() => {
      router.replace(pathname, { locale: locale === "en" ? "ar" : "en" });
    });
  };
  return (
    <button
      onClick={() => changeLang()}
      className="border capitalize border-light-cyan rounded-full p-2 flex justify-center items-center gap-1 text-[8px]"
    >
      <LanguageIcon />
      Language: {locale}
    </button>
  );
};

export default ChangeLanguage;

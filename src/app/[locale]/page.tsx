import AssignmentConditions from "@/components/assignment-conditions";
import AssignmentPhoto from "@/components/assignment-photo";
import AssignmentSettings from "@/components/assignment-settings";
import FileBox from "@/components/file-box";
import SelectCourse from "@/components/select-course";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useTranslations } from "next-intl";
export default function Home() {
  const t = useTranslations("assignment");
  return (
    <div className="max-w-[1440px] p-4 mx-auto">
      <div className="flex justify-between items-center w-full">
        <h2 className="text-[#405053] dark:text-white text-lg font-medium">
          {t("create")}
        </h2>
        <Button className="px-12 font-medium capitalize">{t("save")}</Button>
      </div>
      <div className="grid grid-cols-12 gap-4 mt-4">
        <div className="col-span-8 bg-white/75 dark:bg-transparent p-4 rounded-lg grid grid-cols-12">
          <div className="col-span-9 flex flex-col justify-start items-start gap-4 p-4">
            <div className="w-full grid grid-cols-4 capitalize items-center">
              <Label htmlFor="name" className="text-start">
                {t("title")}
              </Label>
              <Input id="name" className="col-span-3" />
            </div>
            <div className="w-full grid grid-cols-4 capitalize items-center">
              <Label htmlFor="name" className="text-start">
                {t("subtitle")}
              </Label>
              <Input id="name" className="col-span-3" />
            </div>
            <SelectCourse />
            <div className="w-full grid grid-cols-4 capitalize items-start">
              <Label className="text-start">{t("files")}</Label>
              <div className="col-span-3 flex flex-col justify-start items-start gap-2">
                <FileBox />
                <FileBox />
                <FileBox />
                <div className="flex justify-end items-end w-full">
                  <Button className="capitalize px-10 h-8">
                    {t("add-file")}
                  </Button>
                </div>
              </div>
            </div>
            <div className="w-full grid grid-cols-2 gap-4">
              <div className="col-span-1 bg-white dark:bg-[#212A34] rounded-lg p-2">
                <h3 className="font-medium text-lg">Starting interface</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Vivamus pharetra ipsum
                  tellus pellentesque cursus pellentesque. Nec tristique{" "}
                  <span className="text-light-cyan font-bold">
                    More Info...
                  </span>
                </p>
              </div>
              <div className="col-span-1 bg-white dark:bg-[#212A34] rounded-lg p-2">
                <h3 className="font-medium text-lg">End interface</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Vivamus pharetra ipsum
                  tellus pellentesque cursus pellentesque. Nec tristique{" "}
                  <span className="text-light-cyan font-bold">
                    More Info...
                  </span>
                </p>
              </div>
            </div>
          </div>
          <AssignmentPhoto />
        </div>
        <div className="col-span-4 space-y-3">
          <AssignmentSettings />
          <AssignmentConditions />
        </div>
      </div>
      <div className="grid grid-cols-12 gap-4 mt-4">
        <div className="col-span-8 flex justify-end items-end">
          <Button className="capitalize px-10 h-8">{t("view")}</Button>
        </div>
      </div>
    </div>
  );
}

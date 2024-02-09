import React from "react";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useTranslations } from "next-intl";
import axios from "axios";
import { CourseResponse } from "@/types";
const SelectCourse = async () => {
  const t = useTranslations("assignment");
  const { data } = await axios.get<CourseResponse>(
    "https://cms.yorkacademy.uk/api/server/course_ads/getAll"
  );
  return (
    <div className="w-full grid grid-cols-4 capitalize items-center">
      <Label className="text-start">{t("course")}</Label>
      <Select>
        <SelectTrigger className="col-span-3">
          <SelectValue placeholder="" />
        </SelectTrigger>
        <SelectContent>
          {data.data.map((course, index) => (
            <SelectItem key={index} value={course.code}>
              {course.code}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectCourse;

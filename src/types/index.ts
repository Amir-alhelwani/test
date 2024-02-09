export type CourseType = {
  lang: string;
  code: string;
  months: null | string;
  years: null | string;
  change_active_date: null | string;
  category: {
    id: number;
    title: string;
    description: string;
    image: null | string;
  };
  venue: {
    id: string;
    title: string;
    description: string;
    image: string;
  };
};
export type CourseResponse = {
  data: CourseType[];
  message: string;
};

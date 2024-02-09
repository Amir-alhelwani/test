"use client";

import { useTheme } from "next-themes";
import { Button } from "./ui/button";

const ChangeTheme = () => {
  const { setTheme, theme } = useTheme();
  return (
    <Button
      variant="outline"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="rounded-full h-8 px-2 text-xs capitalize font-medium text-light-cyan hover:text-light-cyan"
    >
      light
      <svg
        width="21"
        height="21"
        className="ms-2"
        viewBox="0 0 21 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.7679 13.9738C11.6547 13.9738 12.5051 13.6215 13.1322 12.9945C13.7592 12.3674 14.1115 11.517 14.1115 10.6302C14.1115 9.74346 13.7592 8.89302 13.1322 8.26598C12.5051 7.63895 11.6547 7.28668 10.7679 7.28668C9.88116 7.28668 9.03071 7.63895 8.40368 8.26598C7.77664 8.89302 7.42438 9.74346 7.42438 10.6302C7.42438 11.517 7.77664 12.3674 8.40368 12.9945C9.03071 13.6215 9.88116 13.9738 10.7679 13.9738ZM10.7679 15.6455C12.0981 15.6455 13.3737 15.1171 14.3143 14.1766C15.2548 13.236 15.7832 11.9604 15.7832 10.6302C15.7832 9.30008 15.2548 8.02442 14.3143 7.08386C13.3737 6.14331 12.0981 5.61492 10.7679 5.61492C9.43777 5.61492 8.16211 6.14331 7.22156 7.08386C6.28101 8.02442 5.75261 9.30008 5.75261 10.6302C5.75261 11.9604 6.28101 13.236 7.22156 14.1766C8.16211 15.1171 9.43777 15.6455 10.7679 15.6455ZM9.93203 0.599609H11.6038V3.99497C11.0487 3.92573 10.4871 3.92573 9.93203 3.99497V0.599609ZM6.66707 5.34743L4.26641 2.94677L3.08447 4.12871L5.48513 6.52937C5.82844 6.08779 6.22548 5.69074 6.66707 5.34743ZM4.13267 9.79434H0.737305V11.4661H4.13267C4.06342 10.911 4.06342 10.3494 4.13267 9.79434ZM5.48513 14.7311L3.08447 17.1317L4.26641 18.3137L6.66707 15.913C6.22548 15.5697 5.82844 15.1727 5.48513 14.7311ZM9.93203 17.2655V20.6608H11.6038V17.2655C11.0487 17.3348 10.4871 17.3348 9.93203 17.2655ZM14.8688 15.913L17.2694 18.3137L18.4514 17.1317L16.0507 14.7311C15.7074 15.1727 15.3104 15.5697 14.8688 15.913ZM17.4032 11.4661H20.7985V9.79434H17.4032C17.4725 10.3494 17.4725 10.911 17.4032 11.4661ZM16.0507 6.52937L18.4514 4.12871L17.2694 2.94677L14.8688 5.34743C15.3101 5.69015 15.7072 6.08803 16.0507 6.52937Z"
          fill="#00D4D4"
        />
      </svg>
    </Button>
  );
};

export default ChangeTheme;

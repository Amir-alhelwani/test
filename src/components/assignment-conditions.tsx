import { useTranslations } from "next-intl";
import React from "react";

const AssignmentConditions = () => {
  const t = useTranslations("assignment");

  return (
    <div className="bg-white dark:bg-[#212A34] p-4 rounded-lg flex justify-center text-lg gap-3 items-center">
      <svg
        width="41"
        height="46"
        viewBox="0 0 41 46"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.11111 32.2H25.0556V36.8H9.11111V32.2ZM9.11111 23H31.8889V27.6H9.11111V23ZM9.11111 13.8H31.8889V18.4H9.11111V13.8ZM36.4444 4.6H26.9233C25.9667 1.932 23.4611 0 20.5 0C17.5389 0 15.0333 1.932 14.0767 4.6H4.55556C4.23667 4.6 3.94056 4.623 3.64444 4.692C2.75611 4.876 1.95889 5.336 1.34389 5.957C0.933889 6.371 0.592222 6.877 0.364445 7.429C0.136667 7.958 0 8.556 0 9.2V41.4C0 42.021 0.136667 42.642 0.364445 43.194C0.592222 43.746 0.933889 44.229 1.34389 44.666C1.95889 45.287 2.75611 45.747 3.64444 45.931C3.94056 45.977 4.23667 46 4.55556 46H36.4444C38.95 46 41 43.93 41 41.4V9.2C41 6.67 38.95 4.6 36.4444 4.6ZM20.5 4.025C21.4339 4.025 22.2083 4.807 22.2083 5.75C22.2083 6.693 21.4339 7.475 20.5 7.475C19.5661 7.475 18.7917 6.693 18.7917 5.75C18.7917 4.807 19.5661 4.025 20.5 4.025ZM36.4444 41.4H4.55556V9.2H36.4444V41.4Z"
          fill="#00D4D4"
        />
      </svg>
      {t("conditions")}
    </div>
  );
};

export default AssignmentConditions;

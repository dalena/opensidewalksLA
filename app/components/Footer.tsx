import { FaInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="flex w-full flex-row justify-center pb-10 md:p-8">
      <div className="min flex w-full max-w-[1400px] flex-row items-center">
        <div className="flex w-full justify-start pl-10">
          Open Sidewalks LA © 2024
        </div>
        <div className="flex w-full justify-end gap-4 pr-10">
          <a href="https://www.instagram.com/opensidewalks.la/" target="_blank">
            <FaInstagram
              style={{
                fontSize: "1.45em",
              }}
            />
          </a>
          <a href="https://www.tiktok.com/@opensidewalks.la" target="_blank">
            <FaTiktok
              style={{
                fontSize: "1.35em",
              }}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

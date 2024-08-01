import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer className="bg-red-500 md:p-8 z-50 w-full flex flex-row justify-between text-white">
      <div className="flex justify-start w-full pl-10">
        Open Sidewalks LA © 2024
      </div>
      <div className="flex justify-end w-full pr-10 gap-4">
        <FaInstagram
          style={{
            fontSize: '1.45em'
          }}
        />
        <FaFacebook
          style={{
            fontSize: '1.45em'
          }}
        />
      </div>
      <div>
      </div>
    </footer>
  )
}
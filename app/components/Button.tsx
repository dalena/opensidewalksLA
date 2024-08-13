import React from "react";

interface ButtonProps {
  link: string;
  text: string;
}

const Button: React.FC<ButtonProps> = ({ link, text }) => {
  return (
    <a href={link}>
      <button className="my-4 w-full cursor-pointer space-x-4 rounded-md border-2 pb-2 pt-3 font-balto font-bold text-silver-950 transition ease-in-out hover:bg-silver-200">
        {text}
      </button>
    </a>
  );
};

export default Button;

import {ButtonHTMLAttributes} from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button (props: ButtonProps) {
  return (
    <button className=" mt-4 rounded-lg px-8 font-medium h-12 bg-purple-base text-white-details flex justify-center items-center cursor-pointer" {...props}/>
  )
}

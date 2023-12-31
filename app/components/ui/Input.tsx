import { InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

export function Input({ className, ...props }: Props) {
    return (
        <input
            {...props}
            className={twMerge(
                "p-4 rounded-md text-black outline-none placeholder:italic border border-solid border-gray-800 flex-grow w-full",
                className,
            )}
        />
    );
}

export default Input;

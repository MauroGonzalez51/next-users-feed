import { InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input({ className, ...inputProps }: InputProps) {
    return (
        <input
            {...inputProps}
            className={twMerge(
                "p-4 outline-none rounded-md text-black outline outline-2 outline-offset-4 placeholder:italic outline-gray-700 border-2 border-solid border-gray-500 dark:outline-blue-600 dark:border-white flex-grow",
                className,
            )}
        />
    );
}

export default Input;

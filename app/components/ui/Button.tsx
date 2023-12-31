import { twMerge } from "tailwind-merge";
import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

function Button({ className, children, ...props }: Props) {
    return (
        <button
            {...props}
            className={twMerge(
                "rounded-md border border-solid p-2 border-blue-500 bg-blue-400 text-slate-200 hover:bg-blue-500 transition-colors  w-full flex-grow",
                className,
            )}
        >
            {children}
        </button>
    );
}

export default Button;

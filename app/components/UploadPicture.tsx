"use client";

import { ChangeEvent, MouseEvent, useRef, useState, useEffect } from "react";
import { FaCamera } from "react-icons/fa6";

export function UploadPicture() {
    const containerRef = useRef<HTMLDivElement>(null);
    const inputFileRef = useRef<HTMLInputElement>(null);
    const [imageUrl, setImageUrl] = useState<string>("");

    const handleClick = (event: MouseEvent<HTMLDivElement>) => {
        inputFileRef.current?.click();
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const files = inputFileRef.current?.files;

        if (!files || files.length === 0) return;

        const file = files[0];

        if (!(file instanceof Blob)) return;

        setImageUrl(URL.createObjectURL(file));
    };

    useEffect(() => {
        const container = containerRef.current;

        if (container) {
            container.style.backgroundImage = imageUrl
                ? `url(${imageUrl})`
                : "none";
        }
    }, [imageUrl]);

    return (
        <div className="flex justify-center items-center w-full aspect-square max-h-72">
            <div
                className="bg-gray-700 rounded-full w-full max-w-72 h-full flex justify-center items-center bg-cover"
                onClick={handleClick}
                ref={containerRef}
            >
                {!imageUrl && <FaCamera className="text-5xl text-white" />}
                <input
                    type="file"
                    hidden
                    ref={inputFileRef}
                    name="user-picture"
                    onChange={handleChange}
                    accept=".png,.jpeg,.jpg"
                />
            </div>
        </div>
    );
}

export default UploadPicture;

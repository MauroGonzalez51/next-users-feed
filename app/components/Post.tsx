"use client";

import { User } from "@/app/lib/definitions";
import Image from "next/image";
import { Button } from "@/app/components/ui";
import { MouseEvent } from "react";
import { IoMdDownload } from "react-icons/io";

export function Post({ user }: { user: User }) {
    const imageURL = user.image.url
        ? user.image.url
        : `/app/register/users/default/default-image-${Math.floor(Math.random() * 5 + 1)}.jpg`;

    const handleDownloadImage = (event: MouseEvent<HTMLButtonElement>): void => {
        const downloadLink = document.createElement("a");

        downloadLink.href = imageURL;
        downloadLink.download = `${user.username}`;

        downloadLink.click();
    };

    return (
        <div className="flex gap-2 flex-col items-start justify-center">
            <div className="flex gap-x-2 items-center">
                {/* Show the user info */}
                <div className="rounded-full overflow-hidden w-14 h-14 flex items-center justify-center">
                    <Image
                        src={imageURL}
                        alt="Image"
                        className="w-full h-full rounded-full object-cover"
                        width={48}
                        height={48}
                    />
                </div>

                <div>
                    <p className="font-bold">{user.username}</p>
                    <p className="text-xs">Post</p>
                </div>
            </div>

            <div>
                {/* Show the actual image */}
                <Image
                    width={950}
                    height={320}
                    src={imageURL}
                    alt="Image"
                    className="rounded-lg aspect-video"
                />
            </div>

            <div className="flex gap-x-1 items-start text-sm text-justify">
                {/* Post description */}
                <p>
                    <span className="font-bold">{user.username}</span> {user.description}
                </p>
            </div>

            <div className="flex gap-4 w-full">
                {/* Buttons */}

                <Button
                    onClick={handleDownloadImage}
                    className="flex-grow flex gap-2 items-center justify-center text-xs border border-solid border-gray-700 px-4 py-2 bg-transparent hover:bg-transparent"
                >
                    <IoMdDownload className="text-blue-700 text-base" />
                    <span className="text-gray-600">Download Image</span>
                </Button>
            </div>
        </div>
    );
}

export default Post;

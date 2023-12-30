"use client";

import { Input, Button } from "@/app/components/ui";
import { UploadPicture } from "@/app/components/";
import { FormEvent } from "react";
import { areInputs } from "@/app/lib/utils";
import { User } from "@/app/lib/definitions";
import { addUser } from "@/app/lib/data";
import { useRouter } from "next/navigation";

function RegisterPage() {
    const router = useRouter();

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const { elements } = event.currentTarget;

        const username = elements.namedItem("username") as HTMLInputElement | null;

        const description = elements.namedItem("description") as HTMLInputElement | null;

        const imageFile = elements.namedItem("user-picture") as HTMLInputElement | null;

        if (!username || !description || !imageFile) return;

        if (!areInputs(username, description, imageFile)) return;

        const file =
            imageFile.files && imageFile.files[0]
                ? imageFile.files[0]
                : new File(
                      [
                          `/app/register/users/default/default-image-${Math.floor(
                              Math.random() * 5 + 1,
                          )}.jpg`,
                      ],
                      "default-image",
                      {
                          type: "image/jpeg",
                      },
                  );

        const user: User = {
            username: username.value,
            description: description.value,
            imageFile: file,
        };

        addUser(user);

        username.value = "";
        description.value = "";

        router.push("/");
    };

    return (
        <div className="py-24 md:p-24 flex justify-center items-center">
            <form
                className="gap-8 flex justify-center items-center flex-col flex-grow"
                onSubmit={handleSubmit}
            >
                <UploadPicture />
                <div className="flex flex-col flex-wrap gap-8 items-center w-[70%] md:w-[50%]">
                    <Input
                        type="text"
                        placeholder="Nombre de usuario"
                        name="username"
                        autoComplete="off"
                    />
                    <Input
                        type="text"
                        placeholder="Descripcion"
                        name="description"
                        autoComplete="off"
                    />
                    <Button>Register</Button>
                </div>
            </form>
        </div>
    );
}

export default RegisterPage;

import { Input, Button } from "@/app/components/ui";
import { UploadPicture } from "@/app/components/";

function RegisterPage() {
    return (
        <div className="py-24 md:p-24 flex justify-center items-center">
            <form className="gap-8 flex justify-center items-center flex-col flex-grow">
                <UploadPicture />
                <div className="flex flex-col flex-wrap gap-8 items-center w-[70%] md:w-[50%]">
                    <Input
                        type="text"
                        placeholder="Nombre de usuario"
                        name="username"
                    />
                    <Input
                        type="text"
                        placeholder="Descripcion"
                        name="description"
                    />
                    <Button>Something</Button>
                </div>
            </form>
        </div>
    );
}

export default RegisterPage;

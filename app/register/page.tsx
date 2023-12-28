import { Input } from "@/app/components/ui";
import { UploadPicture } from "@/app/components/";

function RegisterPage() {
    return (
        <div className="p-24">
            <form className="flex flex-wrap gap-8 flex-col items-center justify-center">
                <UploadPicture />
                <div className="flex flex-col flex-wrap gap-8 w-[60%]">
                    <Input type="text" placeholder="Nombre de usuario" />
                    <Input type="text" placeholder="Descripcion" />
                </div>
            </form>
        </div>
    );
}

export default RegisterPage;

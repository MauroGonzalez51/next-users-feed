import { Post } from "@/app/components/Post";
import { User } from "@/app/lib/definitions";

function Home() {
    const user: User = {
        username: "Mauro",
        description: "Picture",
        image: {
            url: "/imagen.avif",
        },
    };

    return (
        <main className="h-screen w-full lg:w-[60%]">
            <Post user={user}/>
        </main>
    );
}

export default Home;

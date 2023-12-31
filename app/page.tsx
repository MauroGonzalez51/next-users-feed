"use client";

import { Post } from "@/app/components/Post";
import { User } from "@/app/lib/definitions";
import { firebaseApp } from "@/app/config";
import { getDocs, getFirestore, collection } from "firebase/firestore";
import { useState, useEffect } from "react";

function Home() {
    const [users, setUsers] = useState<User[]>();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const db = getFirestore(firebaseApp);
                const usersCollection = collection(db, "users");
                const querySnapshot = await getDocs(usersCollection);

                const users: User[] = querySnapshot.docs.map((doc) => {
                    const data = doc.data();
                    return {
                        username: data.username,
                        description: data.description,
                        image: {
                            url: data.image?.url,
                        },
                    };
                });

                setUsers(users);
            } catch (error: any) {
                console.error(error.message);
            }
        };

        fetchData(); 
    }, []);

    return (
        <main className="h-screen w-full lg:w-[60%] flex flex-col gap-4">
            {users &&
                users.map((user) => {
                    return <Post key={window.crypto.randomUUID()} user={user} />;
                })}
        </main>
    );
}

export default Home;

import { db, storage } from "@/app/config";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { User } from "@/app/lib/definitions";
import { addDoc, collection } from "firebase/firestore";

const uploadImage = async (file: File): Promise<string> => {
    const storageRef = ref(storage, `images/${file.name}`);
    await uploadBytes(storageRef, file);

    const downloadURL = await getDownloadURL(storageRef);
    return downloadURL;
};

const addUser = async (user: User) => {
    try {
        const imageURL = await uploadImage(user.imageFile);

        const newUser: User = { ...user, imageURL };

        const usersCollection = collection(db, "users");
        const docRef = await addDoc(usersCollection, newUser);

        console.log(`User added with id: ${docRef.id}`);
    } catch (error: any) {
        console.error(`Error during adding a new user: ${error.message}`);
    }
};

export { addUser };

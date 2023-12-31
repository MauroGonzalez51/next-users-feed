import { firebaseApp } from "@/app/config";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { User } from "@/app/lib/definitions";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const uploadImage = async (file: File): Promise<string> => {
    const storage = getStorage(firebaseApp);
    const storageRef = ref(storage, `images/${file.name}`);
    await uploadBytes(storageRef, file);

    const downloadURL = await getDownloadURL(storageRef);
    return downloadURL;
};

const addUser = async (user: User) => {
    try {
        const db = getFirestore(firebaseApp);

        if (!user.image.file) return;

        const imageURL = await uploadImage(user.image.file);

        delete user.image.file;

        const newUser: User = {
            username: user.username,
            description: user.description,
            image: { url: imageURL },
        };

        const usersCollection = collection(db, "users");

        const docRef = await addDoc(usersCollection, newUser);

        console.log(`User added with id: ${docRef.id}`);
    } catch (error: any) {
        console.error(`Error during adding a new user: ${error.message}`);
    }
};

export { addUser };

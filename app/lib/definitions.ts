import { JSXElementConstructor, ReactElement } from "react";

export interface User {
    username: string;
    description: string;
    imageURL?: string;
    imageFile: File;
}

export interface Link {
    name: string;
    href: string;
    icon: React.ElementType
}

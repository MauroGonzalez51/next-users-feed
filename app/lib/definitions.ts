import { JSXElementConstructor, ReactElement } from "react";

export interface User {
    username: string;
    description: string;
    image: {
        file?: File;
        url?: string;
    };
}

export interface Link {
    name: string;
    href: string;
    icon: React.ElementType;
}

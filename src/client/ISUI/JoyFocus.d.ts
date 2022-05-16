import { ISUIElementInstance } from "ISUI";

declare module 'ISUI' {
    export type JoyFocus = {
        focus: ISUIElementInstance;
        isActive: boolean;
        id: number;
    };
}
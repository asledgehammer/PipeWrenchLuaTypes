declare module 'ISUI' {
    export const ISFPS: {
        lastSec: number,
        frame: number,
        start: boolean,
        init: boolean
        onKeyPressed: (key: number) => void;
    };
}
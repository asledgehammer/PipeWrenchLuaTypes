declare module 'ISUI' {
    export type RGB = {
        r: number;
        g: number;
        b: number;
    }
    
    export type RGBA = RGB & {
        a: number;
    };

    export type HSBFactor = {
        h: number,
        s: number,
        b: number
    };
}

declare module 'ISUI' {
    export class ISRectInstance extends ISUIElementInstance {
        protected constructor();
        
        r: number;
        g: number;
        b: number;
        a: number;
    }

    export class ISRect {
        private constructor();

        static new(
            x: number,
            y: number,
            width: number,
            height: number,
            alpha: number,
            red: number,
            green: number,
            blue: number
        ): ISRectInstance;
    }
}

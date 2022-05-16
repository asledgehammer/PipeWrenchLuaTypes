declare module 'ISUI' {
    export class ISRectInstance extends ISUIElementInstance {
        protected constructor();
        a: number;
        r: number;
        g: number;
        b: number;
    }

    export class ISRect {
        private constructor();
        
        /**
         * @param x (double)
         * @param y (double)
         * @param width (double)
         * @param height (double)
         * @param alpha (double)
         * @param red (double)
         * @param green (double)
         * @param blue (double)
         *
         * @returns The new ISRect instance.
         */
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
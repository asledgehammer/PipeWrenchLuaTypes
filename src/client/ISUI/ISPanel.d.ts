declare module 'ISUI' {
    export class ISPanelInstance extends ISUIElementInstance {
        protected constructor();

        background: boolean;
        backgroundColor: { r: number; g: number; b: number; a: number };
        borderColor: { r: number; g: number; b: number; a: number };
        moveWithMouse: boolean;

        downX: number | null;
        downY: number | null;
        moving: boolean | null;
        mouseOver: boolean | null;

        noBackground(): void;
        close(): void;
    }

    export class ISPanel {
        private constructor();
        
        /**
         * @param x (double)
         * @param y (double)
         * @param width (double)
         * @param height (double)
         *
         * @returns The new ISPanel instance.
         */
        static new(x: number, y: number, width: number, height: number): ISPanelInstance;
    }
}

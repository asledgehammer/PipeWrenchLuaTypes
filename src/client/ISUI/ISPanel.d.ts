declare module 'ISUI' {
    export class ISPanelInstance extends ISUIElementInstance {
        protected constructor();

        borderColor: RGBA;
        backgroundColor: RGBA;
        background: boolean;
        moveWithMouse: boolean;
        downX: number;
        downY: number;
        moving: boolean;
        mouseOver: boolean;

        noBackground(): void;
        close(): void;
    }

    export class ISPanel {
        private constructor();

        static new(x: number, y: number, width: number, height: number): ISPanelInstance;
    }
}

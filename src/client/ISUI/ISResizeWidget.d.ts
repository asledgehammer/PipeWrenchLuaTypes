declare module 'ISUI' {
    export class ISResizeWidgetInstance extends ISPanelInstance {
        protected constructor();

        backgroundColorMouseOver: RGBA;
        resizeTarget: any;
        yonly: boolean;
        resizing: boolean;

        resize(deltaX: number, deltaY: number): void;
        onMouseDown(x: number, y: number): boolean | void;
    }

    export class ISResizeWidget {
        private constructor();

        static new(
            x: number,
            y: number,
            width: number,
            height: number,
            resizeTarget: any,
            yonly: boolean
        ): ISResizeWidgetInstance;
    }
}

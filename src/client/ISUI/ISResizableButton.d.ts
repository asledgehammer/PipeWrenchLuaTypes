declare module 'ISUI' {
    export class ISResizableButtonInstance extends ISButtonInstance {
        protected constructor();

        mouseOverResize: boolean;
        resizing: boolean;
        resizeLeft: boolean;
        minimumWidth: number;
        maximumWidth: any; /* Unknown */
        /** This is a really strange array.
         * [1] -> Function
         * [2] -> param1
         * [3] -> param2
         *
         * Basicalled invocated as: [1]([2], [3]);
         */
        onresize: any[];

        resize(width: number): void;
    }

    export class ISResizableButton {
        private constructor();

        static new(
            x: number,
            y: number,
            width: number,
            height: number,
            title: string,
            clicktarget: any /* Unknown */,
            onclick: Function,
            onmousedown: Function,
            allowMouseUpProcessing: boolean
        ): ISResizableButtonInstance;
    }
}

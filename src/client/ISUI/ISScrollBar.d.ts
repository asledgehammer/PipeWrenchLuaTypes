declare module 'ISUI' {
    import { zombie } from 'Zomboid';

    export class ISScrollBarInstance extends ISUIElementInstance {
        protected constructor();

        backgroundColor: { r: number; g: number; b: number; a: number };
        borderColor: { r: number; g: number; b: number; a: number };
        vertical: boolean;
        pos: number;
        scrolling: boolean;
        background: boolean;

        uptex: zombie.core.textures.Texture;
        downtex: zombie.core.textures.Texture;
        toptex: zombie.core.textures.Texture;
        midtex: zombie.core.textures.Texture;
        bottex: zombie.core.textures.Texture;

        barx: number | null;
        bary: number | null;
        barwidth: number | null;
        barheight: number | null;
        doSetStencil: boolean | null;
        /** @deprecated */
        doRepaintStencil: boolean | null;

        onMouseDown(x: number, y: number): boolean | null;
        refresh(): void;
        updatePos(): void;
    }

    export class ISScrollBar {
        private constructor();

        /**
         * @param parent (ISUIElement)
         * @param vertical (boolean)
         *
         * @returns The new ISScrollBar instance.
         */
        static new(parent: ISUIElementInstance, vertical: boolean): ISScrollBarInstance;
    }
}

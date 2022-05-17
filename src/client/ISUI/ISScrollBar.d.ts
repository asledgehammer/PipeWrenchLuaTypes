import { zombie } from 'Zomboid';
type Texture = zombie.core.textures.Texture;

declare module 'ISUI' {
    export class ISScrollBarInstance extends ISUIElementInstance {
        protected constructor();

        uptex: Texture;
        downtex: Texture;
        toptex: Texture;
        midtex: Texture;
        bottex: Texture;
        backgroundColor: RGBA;
        borderColor: RGBA;
        barx: number;
        bary: number;
        barwidth: number;
        barheight: number;
        pos: number;
        vertical: boolean;
        scrolling: boolean;
        background: boolean;
        doSetStencil: boolean;
        /** @deprecated */
        doRepaintStencil: boolean;

        onMouseDown(x: number, y: number): boolean;
        refresh(): void;
        updatePos(): void;
    }

    export class ISScrollBar {
        private constructor();

        static new(parent: ISUIElementInstance, vertical: boolean): ISScrollBarInstance;
    }
}

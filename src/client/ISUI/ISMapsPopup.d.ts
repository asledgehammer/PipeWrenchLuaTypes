import { zombie } from 'Zomboid';
type Texture = zombie.core.textures.Texture;

declare module 'ISUI' {
    export class ISMapsPopupInstance {
        protected constructor();

        owner: ISEquippedItemInstance;
        texMap: Texture;
        texMiniMap: Texture;

        onMouseDown(x: number, y: number): boolean;
        onMouseUp(x: number, y: number): boolean;
    }

    export class ISMapsPopup {
        private constructor();

        static new(x: number, y: number, width: number, height: number): ISMapsPopupInstance;
    }
}

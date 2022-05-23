import { zombie } from 'Zomboid';
type Texture = zombie.core.textures.Texture;

declare module 'ISUI' {
    export class ISMapPopupInstance extends ISPanelInstance {
        protected constructor();

        owner: ISEquippedItemInstance;
        texMap: Texture;
        texMiniMap: Texture;
    }

    export class ISMapPopup {
        private constructor();

        static new(x: number, y: number, width: number, height: number): ISMapPopupInstance;
    }
}

import { zombie } from 'Zomboid';
type Texture = zombie.core.textures.Texture;
type UIFont = zombie.ui.UIFont;

declare module 'ISUI' {
    export class ISCollapsableWindowJoypadInstance extends ISPanelJoypadInstance {
        protected constructor();

        widgetTextureColor: RGBA;
        titlebarbkg: Texture;
        statusbarbkg: Texture;
        resizeimage: Texture;
        invbasic: Texture;
        closeButtonTexture: Texture;
        collapseButtonTexture: Texture;
        pinButtonTexture: Texture;
        infoBtn: Texture;
        pin: boolean;
        isCollapsed: boolean;
        collapseCounter: number;
        title: string;
        viewList: {};
        resizable: boolean;
        drawFrame: boolean;
        clearStentil: boolean;
        titleFont: UIFont;
        titleFontHgt: number;
    }

    export class ISCollapsableWindowJoypad {
        private constructor();

        static new(): ISCollapsableWindowJoypadInstance;
    }
}

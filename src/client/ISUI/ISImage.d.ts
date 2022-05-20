import { zombie } from 'Zomboid';
type Texture = zombie.core.textures.Texture;
type UIFont = zombie.ui.UIFont;

declare module 'ISUI' {
    export class ISImageInstance extends ISPanelInstance {
        protected constructor();

        texture: Texture;
        textureOverride: Texture;
        font: UIFont;
        /** Note: Possible Typ0 */
        mouseovertext: string;
        mouseover: boolean;

        getTexture(): Texture;
        setMouseOverText(text: string): void;
        setColor(red: number, green: number, blue: number): void;
        updateTooltip(): void;
    }

    export class ISImage {
        private constructor();

        static new(x: number, y: number, width: number, height: number, texture: Texture): ISImageInstance;
    }
}

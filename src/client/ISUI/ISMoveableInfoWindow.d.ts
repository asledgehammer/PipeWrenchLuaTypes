import { zombie } from 'Zomboid';
type Texture = zombie.core.textures.Texture;
type IsoPlayer = zombie.characters.IsoPlayer;
type TextDrawObject = zombie.ui.TextDrawObject;
type UIFont = zombie.ui.UIFont;
type IsoGridSquare = zombie.iso.IsoGridSquare;

declare module 'ISUI' {
    export type ISMoveableInfoWindowBodyText = {
        font: UIFont,
        fontheight: number,
        table: any /* Unknown */,
        width: number,
        height: number,
        textTab: number
    };

    export class ISMoveableInfoWindowInstance extends ISPanelInstance {
        protected constructor();

        character: IsoPlayer;
        playerNum: number;
        drag: boolean;
        name: string;
        description: string;
        moveableTexture: Texture;
        texYOffset: number;
        allowCurrent: boolean;
        textureList: Texture[];
        header: TextDrawObject;
        infoBody: TextDrawObject;
        bodyText: ISMoveableInfoWindowBodyText;
        footer: TextDrawObject;
        /** (Possible Typ0) */
        joyfocus: JoyFocus;
        mouseOverUI: boolean;
        texture: Texture;
        offsetY: number;
        customBodyAlign: string;

        isMouseOverUI(): boolean;
        stayOnSplitScreen(): void;
        drawTexture(texture: Texture, x: number, y: number, alpha: number, red: number, green: number, blue: number): void;
        calculateDimensions(): void;
        setHeaderText(header: any /* Unknown */, font: UIFont): void;
        setBodyText(bodyTextTable: any /* Unknown */, font: UIFont, align: string): void;
        setBodyTextOLD(body: any /* Unknown */, font: UIFont, align: string): void;
        setFooterText(footer: string, font: UIFont): void;
        setTexture(textureName: string, allow: boolean, square: IsoGridSquare, yOffset: number): void;
        setSquare(square: IsoGridSquare): void;
        setDrag(drag: boolean): void;
    }

    export class ISMoveableInfoWindow {
        private constructor();

        infoPanels: any; /* Unknown */
        displayPosition: string;

        static new(x: number, y: number, character: IsoPlayer, drag: boolean): ISMoveableInfoWindowInstance;
        static setDisplayPosition(position: any /* Unknown */): void;
        static moveablePanelModeKey(key: number): void;
    }
}

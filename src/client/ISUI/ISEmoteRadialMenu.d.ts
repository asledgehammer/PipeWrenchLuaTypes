import { zombie } from 'Zomboid';
type Texture = zombie.core.textures.Texture;
type IsoPlayer = zombie.characters.IsoPlayer;

import { ISBaseObjectInstance } from 'shared';

declare module 'ISUI' {
    export class ISEmoteRadialMenuInstance extends ISBaseObjectInstance {
        protected constructor();

        character: IsoPlayer;
        playerNum: number;

        display(): void;
        center(): void;
        fillMenu(submenu: string): void;
        emote(emote: string): void;
        configEmote(): void;
    }

    export class ISEmoteRadialMenu {
        private constructor();

        static defaultMenu: {
            [id: string]: { name: string; subMenu: { [id: string]: string } };
        };
        /** (Same instance as 'defaultMenu') */
        static menu: {
            [id: string]: { name: string; subMenu: { [id: string]: string } };
        };

        static variants: { [id: string]: string[] };
        static icons: { [id: string]: Texture };

        static new(character: IsoPlayer): ISEmoteRadialMenuInstance;
        static checkKey(key: number): boolean;
        static onKeyPressed(key: number): void;
        static onKeyRepeat(key: number): void;
        static onKeyReleased(key: number): void;
    }
}

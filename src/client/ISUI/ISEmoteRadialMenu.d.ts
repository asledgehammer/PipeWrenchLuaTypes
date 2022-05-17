import { zombie } from 'Zomboid';
type IsoPlayer = zombie.characters.IsoPlayer;

declare module 'ISUI' {
    export class ISEmoteRadialMenuInstance extends ISBaseObjectInstance {
        protected constructor();
    }

    export class ISEmoteRadialMenu {
        private constructor();

        static new(character: IsoPlayer): ISEmoteRadialMenuInstance;
    }
}

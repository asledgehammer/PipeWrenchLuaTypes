import { zombie } from 'Zomboid';
type GameSound = zombie.audio.GameSound;
type UITransition = zombie.ui.UITransition;

declare module 'ISUI' {
    export class ISGameSoundVolumeControlInstance extends ISPanelInstance {
        protected constructor();

        volume: number;
        target: any; /* Unknown */
        targetFunc: Function;
        fade: UITransition;
        isSlider: boolean;
        dragging: boolean;
        tooltipUI: ISTooltipInstance;
        tooltip: any; /* Multiple Types */
        gameSound: GameSound;

        getVolumeAtX(x: number): number;
        getVolume(): number;
        setVolume(volume: number): void;
        getTooltip(): string;
        setJoypadFocused(focused: boolean): void;
    }
    export class ISGameSoundVolumeControl {
        private constructor();

        static new(
            x: number,
            y: number,
            width: number,
            height: number,
            target: any /* Unknown */,
            targetFunc: Function
        ): ISGameSoundVolumeControlInstance;
    }
}

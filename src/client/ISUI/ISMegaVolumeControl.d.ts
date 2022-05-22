import { zombie } from 'Zomboid';
type UITransition = zombie.ui.UITransition;

declare module 'ISUI' {
    export type ISMegaVolumeControlTargetFunction = (
        target: any /* Unknown */,
        volumeControl: ISMegaVolumeControlInstance,
        volume: number
    ) => void;
    export class ISMegaVolumeControlInstance extends ISPanelInstance {
        protected constructor();

        target: any;
        targetFunc: ISMegaVolumeControlTargetFunction;
        volume: number;
        fade: UITransition;
        isSlider: boolean;
        joypadFocused: boolean;
        dragging: boolean;
        tooltipUI: ISToolTipInstance;
        tooltip: string;

        onMouseDown(x: number, y: number): void;
        getVolumeAtX(x: number): number;
        getVolume(): number;
        setVolume(volume: number): void;
    }

    export class ISMegaVolumeControl {
        private constructor();

        static new(
            x: number,
            y: number,
            width: number,
            height: number,
            target: any /* Unknown */,
            targetFunc: ISMegaVolumeControlTargetFunction
        ): ISMegaVolumeControlInstance;
    }
}

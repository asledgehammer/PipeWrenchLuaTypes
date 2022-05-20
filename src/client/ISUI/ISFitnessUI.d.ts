import { zombie } from 'Zomboid';
type IsoPlayer = zombie.characters.IsoPlayer;
type IsoGridSquare = zombie.iso.IsoGridSquare;
type Fitness = zombie.characters.BodyDamage.Fitness;

declare module 'ISUI' {
    export class ISFitnessUIInstance extends ISPanelJoypadInstance {
        protected constructor();

        titleY: number;
        fgBar: RGBA;
        fgBarOrange: RGBA;
        fgBarRed: RGBA;
        clickedSquare: IsoGridSquare;
        buttonBorderColor: RGBA;
        zoneProgress: number;
        fitness: Fitness;
        regularityProgressBarWidth: number;

        ok: ISButtonInstance;
        cancel: ISButtonInstance;
        close: ISButtonInstance;
        exercises: ISRadioButtonsInstance;
        barHgt: number;
        barY: number;
        timeLbl: ISLabelInstance;
        exeTime: ISTextEntryBoxInstance;
        plusBtn: ISButtonInstance;
        minusBtn: ISButtonInstance;
        tooltipLbl: ISRichTextPanelInstance;
        selectedExe: string;
        exeData: any; /* Unknown */

        onClickTime(button: ISButtonInstance): void;
        clickedExe(buttons: ISButtonInstance[], index: number): void;
        updateExercises(): void;
        selectedNewExercise(): void;
        addExerciseToList(type: string, data: any /* Unknown */): void;
        getCurrentRegularity(): number;
        updateButtons(currentAction: any /* Unknown */): void;
        equipItems(): boolean;
        onClick(button: ISButtonInstance): void;
    }
    export class ISFitnessUI {
        private constructor();

        static instance: ISFitnessUIInstance;
        static enduranceLevelThreshold: number;

        static new(
            x: number,
            y: number,
            width: number,
            height: number,
            player: IsoPlayer,
            clickedSquare: IsoGridSquare
        ): ISFitnessUIInstance;
    }
}

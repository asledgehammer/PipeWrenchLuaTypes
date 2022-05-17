import { zombie } from 'Zomboid';
type UIFont = zombie.ui.UIFont;

declare module 'ISUI' {
    export class ISLabelInstance extends ISUIElementInstance {
        protected constructor();

        r: number;
        g: number;
        b: number;
        name: string;
        tooltip: string;
        translation: string;

        getName(): string;
        setName(name: string): void;
        setWidthToName(minWidth: number): void;
        setColor(red: number, green: number, blue: number): void;
        updateTooltip(): void;
        setTooltip(tooltip: string): void;
        setTranslation(translation: string): void;
    }

    export class ISLabel {
        private constructor();

        static new(
            x: number,
            y: number,
            height: number,
            name: string,
            r: number,
            g: number,
            b: number,
            a: number,
            font: UIFont,
            bLeft: boolean
        ): ISLabelInstance;
    }
}

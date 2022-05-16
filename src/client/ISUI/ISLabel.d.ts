declare module 'ISUI' {
    import { zombie } from 'Zomboid';

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
        
        /**
         * @param x (double)
         * @param y (double)
         * @param height (double)
         * @param name (string)
         * @param r (double)
         * @param g (double)
         * @param b (double)
         * @param a (double)
         * @param font (zombie.ui.UIFont)
         * @param bLeft (boolean)
         *
         * @returns The new ISLabel instance.
         */
        static new(
            x: number,
            y: number,
            height: number,
            name: string,
            r: number,
            g: number,
            b: number,
            a: number,
            font: zombie.ui.UIFont | null,
            bLeft: boolean
        ): ISLabelInstance;
    }
}

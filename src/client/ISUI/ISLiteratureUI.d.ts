import { zombie } from 'Zomboid';
type IsoPlayer = zombie.characters.IsoPlayer;
type UIFont = zombie.ui.UIFont;

declare module 'ISUI' {
    export class ISLiteratureUIInstance extends ISCollapsableWindowJoypadInstance {
        protected constructor();

        owner: any; /* Unknown */
        character: IsoPlayer;
        playerNum: number;
        scriptItem: any; /* Unknown */
        fontHgt: number;
        font: UIFont;
        tabs: ISTabPanelInstance;
        listbox1: ISLiteratureListInstance;
        listbox2: ISLiteratureListInstance;
        listboxMedia: any; /* Unknown */
        resizeWidget: ISResizeWidgetInstance;
        resizeWidget2: ISResizeWidgetInstance;
        drawJoypadFocus: boolean;

        setLists(): void;
        setMediaLists(scriptItems: any /* Unknown */): void;
    }

    export class ISLiteratureUI {
        private constructor();

        static new(
            x: number,
            y: number,
            width: number,
            height: number,
            character: IsoPlayer,
            owner: any /* Unknown */
        ): ISLiteratureUIInstance;

        static SetItemHidden(fullType: string, hidden: boolean): void;
    }
}

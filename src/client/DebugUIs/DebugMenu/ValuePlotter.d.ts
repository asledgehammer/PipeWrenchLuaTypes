declare module 'DebugUIs/DebugMenu' {
    import { ISPanelInstance, ISUIElementInstance, RGBA } from 'ISUI';

    export type ValuePlotterVariable = {
        name: string,
        color: RGBA,
        min: number,
        max: number,
        diff: number,
        offset: number,
        enabled: boolean
    };

    export class ValuePlotterInstance extends ISPanelInstance {
        protected constructor();

        __index: ISUIElementInstance;
        x: number;
        y: number;
        background: boolean;
        backgroundColor: RGBA;
        borderColor: RGBA;
        gridColor: RGBA;
        greyCol: RGBA;
        width: number;
        height: number;
        anchorLeft: boolean;
        anchorRight: boolean;
        anchorTop: boolean;
        anchorBottom: boolean;
        doGridLines: boolean;
        gridHorzSpacing: number;
        gridVertSpacing: number;
        maxPlotPoints: number;
        indexPointer: number;
        vars: {[offset: number]: ValuePlotterVariable};
        /** History plotdata. */
        his: {[offset: number]: any};
        vertBars: {[offset: number]: boolean};
        horzBars: {[offset: number]: {val: any, col: number}};

        initialise(): void;
        createChildren(): void;
        update(): void;
        prerender(): void;
        render(): void;
        addPlotPoint(dataset: any, vertbarCol: any): void;
        calcMinMax(indexLine: number, minmax: { min: number; max: number } | null): { min: number; max: number };
        applyMinMax(minmax: { min: number; max: number }, indexLine: number): void;
        getDataSet(): any;
        getVars(): any;
        getVarCount(): number;
        clearHistory(): void;
        setVariableEnabled(name: string, bool: boolean): void;
        defineVariable(name: string, color: RGBA, minVal: number, maxVal: number): void;
        setHorzLine(value: any, col: RGBA): void;
        unsetHorzLine(index: number): void;
    }

    export class ValuePlotter {
        private constructor();

        static new(x: number, y: number, width: number, height: number, maxPlotPoints: number): ValuePlotterInstance;
    }
}

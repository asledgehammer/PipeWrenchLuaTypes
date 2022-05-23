import { zombie } from 'Zomboid';
type Texture = zombie.core.textures.Texture;
type RadialMenu = zombie.ui.RadialMenu;

declare module 'ISUI' {
    export type ISRadialMenuSliceCommand = {
        command: string;
        arg1: any;
        arg2: any;
        arg3: any;
        arg4: any;
        arg5: any;
        arg6: any;
    };

    export type ISRadialMenuSlice = {
        text: string;
        texture: Texture;
        command: ISRadialMenuSliceCommand;
    };

    export class ISRadialMenuInstance extends ISPanelJoypadInstance {
        protected constructor();

        slices: { [offset: number]: ISRadialMenuSlice };
        javaObject: RadialMenu;
        hideWhenButtonReleased: ISButtonInstance;
        innerRadius: number;
        outerRadius: number;
        playerNum: number;

        instantiate(): void;
        onMouseDownOutside(x: number, y: number): void;
        clear(): void;
        addSlice(
            text: string,
            texture: Texture,
            command: string,
            arg1: any,
            arg2: any,
            arg3: any,
            arg4: any,
            arg5: any,
            arg6: any
        ): void;
        setSliceText(sliceIndex: number, text: string): void;
        setSliceTexture(sliceIndex: number, texture: Texture): void;
        getSliceCommand(sliceIndex: number): ISRadialMenuSliceCommand;
        center(): void;
        onGainJoypadFocus(joypadData: any): void;
        onJoypadDown(button: ISButtonInstance, joypadData: any): void;
        setHideWhenButtonReleased(button: ISButtonInstance): void;
        undisplay(): void;
    }

    export class ISRadialMenu {
        private constructor();

        static new(
            x: number,
            y: number,
            innerRadius: number,
            outerRadius: number,
            playerNum: number
        ): ISRadialMenuInstance;
    }
}

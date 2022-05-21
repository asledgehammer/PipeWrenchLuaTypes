import { zombie } from 'Zomboid';
type IsoPlayer = zombie.characters.IsoPlayer;

declare module 'ISUI' {
    export class ISJoystickButtonRadialMenu {
        private constructor();

        static onJoypadDown(button: number, JoypadData: JoypadData): void;
        static onJoypadButtonReleased(button: number, JoypadData: JoypadData): void;
        static onRepeatLeftStickButton(JoypadData: JoypadData): void;
        static displayLeft(joypadData: JoypadData): void;
        static onToggleCrouch(playerObj: IsoPlayer): void;
        static onToggleAutoWalk(playerObj: IsoPlayer): void;
    }
}

import { zombie } from 'Zomboid';
type Texture = zombie.core.textures.Texture;
type UIFont = zombie.ui.UIFont;

declare module 'ISUI' {
    export class ISCollapsableWindowInstance extends ISPanelInstance {
        protected constructor();

        title: string;
        resizable: boolean;
        resizeWidget: ISResizeWidgetInstance;
        resizeWidget2: ISResizeWidgetInstance;
        closeButton: ISButtonInstance;
        closeButtonTexture: Texture;
        backgroundColorMouseOver: RGBA;
        infoButton: ISButtonInstance;
        infoBtn: Texture;
        infoRichText: ISModalRichTextInstance;
        infoText: string;
        pinButton: ISButtonInstance;
        pinButtonTexture: Texture;
        collapseButton: ISButtonInstance;
        collapseButtonTexture: Texture;
        isCollapsed: boolean;
        collapseCounter: number;
        drawFrame: boolean;
        titlebarbkg: Texture;
        statusbarbkg: Texture;
        resizeimage: Texture;
        invbasic: Texture;
        clearStencil: boolean;
        titleFont: UIFont;
        titleFontHgt: number;
        widgetTextureColor: RGBA;

        setTitle(title: string): void;
        getTitle(): string;
        setInfo(text: string): void;
        onInfo(): void;
        close(): void;
        collapse(): void;
        pin(): void;
        uncollapse(): void;
        onMouseDown(x: number, y: number): void;
        addView(view: ISUIElementInstance): void;
        getViews(): ISUIElementInstance[];
        titleBarHeight(): number;
        resizeWidgetHeight(): number;
        setResizable(resizable: boolean): void;
        RestoreLayout(name: string, layout: any): void;
        SaveLayout(name: string, layout: any): void;
        setDrawFrame(visible: boolean): void;
    }

    export class ISCollapsableWindow {
        private constructor();

        static new(
            x: number,
            y: number,
            width: number,
            height: number,
            resizeTarget: ISUIElementInstance,
            yonly: boolean
        ): ISCollapsableWindowInstance;

        static TitleBarHeight(): number;
    }
}

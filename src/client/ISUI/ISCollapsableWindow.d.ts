declare module 'ISUI' {
    import { zombie } from 'Zomboid';

    export class ISCollapsableWindowInstance extends ISPanelInstance {
        protected constructor();

        title: string | null;
        resizable: boolean | null;
        resizeWidget: ISResizeWidgetInstance | null;
        resizeWidget2: ISResizeWidgetInstance | null;
        closeButton: ISButtonInstance;
        closeButtonTexture: zombie.core.textures.Texture;
        backgroundColorMouseOver: { r: number; g: number; b: number; a: number };
        infoButton: ISButtonInstance;
        infoBtn: zombie.core.textures.Texture;
        infoRichText: ISModalRichTextInstance;
        infoText: string | null;
        pinButton: ISButtonInstance;
        pinButtonTexture: zombie.core.textures.Texture;
        collapseButton: ISButtonInstance;
        collapseButtonTexture: zombie.core.textures.Texture;
        isCollapsed: boolean | null;
        collapseCounter: number | null;
        drawFrame: boolean | null;
        titlebarbkg: zombie.core.textures.Texture;
        statusbarbkg: zombie.core.textures.Texture;
        resizeimage: zombie.core.textures.Texture;
        invbasic: zombie.core.textures.Texture;
        clearStencil: boolean | null;
        titleFont: zombie.ui.UIFont;
        titleFontHgt: number | null;
        widgetTextureColor: { r: number; g: number; b: number; a: number };

        setTitle(title: string | null): void;
        getTitle(): string | null;
        setInfo(text: string | null): void;
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

        static TitleBarHeight(): number;
        
        static new(
            x: number,
            y: number,
            width: number,
            height: number,
            resizeTarget: ISUIElementInstance,
            yonly: boolean
        ): ISCollapsableWindowInstance;
    }
}

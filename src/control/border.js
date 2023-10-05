/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';
import {
    __experimentalToolsPanel as ToolsPanel,
    __experimentalToolsPanelItem as ToolsPanelItem,
    __experimentalBorderControl as BorderControls
} from "@wordpress/components";
import { HeightControl } from '@wordpress/block-editor';

/**
 * Internal Dependencies
 */
import { useSettings } from '../data';

/**
 * Render Border Setting Control
 */
function BorderControl() {

    const { borderSetting, setBorderSetting } = useSettings();

    return (
        <ToolsPanel label={__('Border')}>
            <ToolsPanelItem label={__('Border')} hasValue={() => !!borderSetting.border} >
                <BorderControls
                    withSlider={true}
                    value={borderSetting.border}
                    onChange={(value) => setBorderSetting({ ...borderSetting, border: value })}
                />
            </ToolsPanelItem>
            <ToolsPanelItem label={__('Radius')} hasValue={() => !!borderSetting.radius}>
                <HeightControl
                    label={__('Radius')}
                    value={borderSetting.radius}
                    onChange={(value) => setBorderSetting({ ...borderSetting, radius: value })}
                />
            </ToolsPanelItem>
        </ToolsPanel>
    );
};

export default BorderControl;
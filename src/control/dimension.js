/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';
import {
    __experimentalToolsPanel as ToolsPanel,
    __experimentalToolsPanelItem as ToolsPanelItem,
    __experimentalBoxControl as BoxControl,
    FontSizePicker
} from '@wordpress/components';

/**
 * Internal Dependencies
 */
import { useSettings } from '../data';

/**
 * Render Dimension Setting Control
 */
function DimensionControl() {

    const { dimensionSetting, setDimensionSetting } = useSettings();

    return (
        <ToolsPanel label={__('Dimension')}>
            <ToolsPanelItem label={__('Padding')} hasValue={() => !!dimensionSetting.padding} >
                <BoxControl
                    label={__('Padding')}
                    values={dimensionSetting.padding}
                    onChange={(value) => setDimensionSetting({ ...dimensionSetting, padding: value })}
                />
            </ToolsPanelItem>
            <ToolsPanelItem label={__('Margin')} hasValue={() => !!dimensionSetting.margin}>
                <BoxControl
                    label={__('Margin')}
                    values={dimensionSetting.margin}
                    onChange={(value) => setDimensionSetting({ ...dimensionSetting, margin: value })}
                />
            </ToolsPanelItem>
            <ToolsPanelItem label={__('Icon Size')} hasValue={() => !!dimensionSetting.iconSize}>
                <FontSizePicker
                    label={__('Icon Size')}
                    fontSizes={[
                        {
                            name: 'Small',
                            size: 12,
                            slug: 'small'
                        },
                        {
                            name: 'Medium',
                            size: 16,
                            slug: 'medium'
                        },
                        {
                            name: 'Large',
                            size: 22,
                            slug: 'large'
                        },
                        {
                            name: 'Extra Large',
                            size: 26,
                            slug: 'extra-large'
                        }
                    ]}
                    withSlider={true}
                    value={dimensionSetting.iconSize}
                    onChange={(value) => setDimensionSetting({ ...dimensionSetting, iconSize: value })}
                />
            </ToolsPanelItem>
        </ToolsPanel>
    );
};

export default DimensionControl;
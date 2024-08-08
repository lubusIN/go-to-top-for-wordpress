/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';
import {
    PanelBody,
    __experimentalToggleGroupControl as ToggleGroupControl,
    __experimentalToggleGroupControlOption as ToggleGroupControlOption,
    __experimentalToggleGroupControlOptionIcon as ToggleGroupControlOptionIcon,
} from '@wordpress/components';

/**
 * Internal Dependencies
 */
import { icons } from '../component';
import { useSettings } from '../data';

/**
 * Render General Setting  Control
 */
function GeneralControl() {

    const { generalSetting, setGeneralSetting } = useSettings();

    return (
        <PanelBody title="General" initialOpen={true}>
            <ToggleGroupControl
                label={__('Select an icon')}
                size="__unstable-large"
                isBlock
                value={generalSetting.selectedIcon}
                onChange={(value) => setGeneralSetting({ ...generalSetting, selectedIcon: value })}
            >
                {Object.keys(icons).map((iconName) => (
                    <ToggleGroupControlOptionIcon
                        key={iconName}
                        icon={icons[iconName]}
                        style={{ width: '100%' }}
                        label={iconName}
                        value={iconName}
                    />
                ))}
            </ToggleGroupControl>

            <ToggleGroupControl
                label={__('Icon Position')}
                isBlock
                value={generalSetting.buttonPosition}
                onChange={(value) => setGeneralSetting({ ...generalSetting, buttonPosition: value })}
            >
                {['Left', 'Center', 'Right'].map((position) => (
                    <ToggleGroupControlOption
                        key={position}
                        label={position}
                        value={position.toLowerCase()}
                    />
                ))}
            </ToggleGroupControl>
        </PanelBody>
    );
};

export default GeneralControl;
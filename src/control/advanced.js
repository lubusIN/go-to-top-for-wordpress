/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';
import {
    PanelBody,
    __experimentalVStack as VStack,
    __experimentalNumberControl as NumberControl
} from "@wordpress/components";

/**
 * Internal Dependencies
 */
import { useSettings } from '../data';

/**
 * Render Advance Setting Control
 */
function AdvancedControl() {

    const { advancedSetting, setAdvancedSetting } = useSettings();

    return (
        <PanelBody title={__('Advanced')} initialOpen={false}>
            <VStack spacing={2}>
                <NumberControl
                    label={__('Scroll offset')}
                    value={advancedSetting.scrollOffset}
                    onChange={(value) => setAdvancedSetting({ ...advancedSetting, scrollOffset: value })}
                />
                <NumberControl
                    label={__('Animation Speed')}
                    value={advancedSetting.animationSpeed}
                    onChange={(value) => setAdvancedSetting({ ...advancedSetting, animationSpeed: value })}
                />
            </VStack>
        </PanelBody>
    );
};

export default AdvancedControl;
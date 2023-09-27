/**
 * WordPress dependencies.
 */
import { useEffect } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import { store as coreDataStore } from '@wordpress/core-data';

/**
 * Internal Dependencies
 */
import { useSettings } from '.';

/**
 * Render to use saved settings
 */
function useSavedSettings() {
    const {
        setEnabled,
        generalSetting,
        setGeneralSetting,
        dimensionSetting,
        setDimensionSetting,
        colorSetting,
        setColorSetting,
        borderSetting,
        setBorderSetting,
        advancedSetting,
        setAdvancedSetting,
        responsive,
        setResponsive
    } = useSettings();

    const result = useSelect((select) => {
        return {
            data: select(coreDataStore).getEntityRecord('root', 'site'),
            hasFinishedResolution: select(coreDataStore).hasFinishedResolution('getEntityRecord', ['root', 'site']),
        }
    }, []);

    useEffect(() => {
        if (result.hasFinishedResolution) {
            const go2top = result.data?.go2top;
            if (go2top) {
                setEnabled(go2top.enabled);
                setGeneralSetting({ ...generalSetting, ...go2top.generalSetting });
                setDimensionSetting({ ...dimensionSetting, ...go2top.dimensionSetting });
                setColorSetting({ ...colorSetting, ...go2top.colorSetting });
                setBorderSetting({ ...borderSetting, ...go2top.borderSetting });
                setAdvancedSetting({ ...advancedSetting, ...go2top.advancedSetting });
                setResponsive({ ...responsive, ...go2top.responsive });
            }
        }
    }, [result.hasFinishedResolution]);
}

export default useSavedSettings;

/**
 * WordPress dependencies.
 */
import { createContext, useContext, useState } from '@wordpress/element';

/**
 * Context Component.
 */
const SettingsContext = createContext();

export function useSettings() {
    return useContext(SettingsContext);
}

const SettingsProvider = ({ children }) => {

    const [enabled, setEnabled] = useState(false);
    const [showNotice, setShowNotice] = useState(false);
    const [disableButton, setDisableButton] = useState(false);
    const [generalSetting, setGeneralSetting] = useState({
        selectedIcon: 'arrowUp',
        buttonPosition: 'center'
    });
    const [dimensionSetting, setDimensionSetting] = useState({
        padding: {
            top: '18px',
            left: '18px',
            bottom: '18px',
            right: '18px'
        },
        margin: {
            top: '30px',
            left: '30px',
            bottom: '30px',
            right: '30px'
        }
    });
    const [colorSetting, setColorSetting] = useState({
        buttonColor: {
            default: '#000',
            hover: '#000000D4'
        },
        iconColor: {
            default: '#fff'
        }
    });
    const [borderSetting, setBorderSetting] = useState({
        radius: '100%'
    });
    const [advancedSetting, setAdvancedSetting] = useState({});
    const [responsive, setResponsive] = useState({});

    return (
        <SettingsContext.Provider
            value={{
                enabled,
                setEnabled,
                showNotice,
                setShowNotice,
                disableButton,
                setDisableButton,
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
                setResponsive,
            }}
        >
            {children}
        </SettingsContext.Provider>
    );
}

export default SettingsProvider;
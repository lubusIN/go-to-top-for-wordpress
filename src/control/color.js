/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';
import {
    Button,
    Dropdown,
    TabPanel,
    ColorIndicator,
    __experimentalZStack as ZStack,
    __experimentalHStack as HStack,
    __experimentalToolsPanel as ToolsPanel,
    __experimentalToolsPanelItem as ToolsPanelItem,
    ColorPalette,
} from '@wordpress/components';
import { useState } from '@wordpress/element';

/**
 * Internal Dependencies
 */
import { useSettings } from '../data';

/**
 * Render Color Picker 
 */
function ColorControlDropdown({ label, colorValue, onChangeColor }) {
    const [activeTab, setActiveTab] = useState('default');

    return (
        <Dropdown
            popoverProps={{ placement: 'left' }}
            renderToggle={({ isOpen, onToggle }) => (
                <Button
                    aria-expanded={isOpen}
                    onClick={onToggle}
                >
                    <HStack justify='left'>
                        <ZStack offset={10}>
                            <ColorIndicator colorValue={colorValue['default']} />
                            <ColorIndicator colorValue={colorValue['hover']} />
                        </ZStack>
                        <text>{label}</text>
                    </HStack>
                </Button>
            )}
            renderContent={() => (
                <TabPanel
                    onSelect={(tab) => setActiveTab(tab)}
                    tabs={[
                        {
                            name: 'default',
                            title: 'Default'
                        },
                        {
                            name: 'hover',
                            title: 'Hover'
                        }
                    ]}
                >
                    {(tab) => (
                        <ColorPalette
                            __experimentalIsRenderedInSidebar
                            value={colorValue[tab.name] || ''}
                            onChange={(color) => {
                                onChangeColor({ ...colorValue, [tab.name]: color });
                            }}
                            enableAlpha
                        />
                    )}
                </TabPanel>
            )}
        />
    );
};

/**
 * Render Color Setting Control 
 */
function ColorControl() {

    const { colorSetting, setColorSetting } = useSettings();

    return (
        <ToolsPanel label={__('Color')} hasInnerWrapper={true} >
            <div className='ls_gtp_color_container'>
                <ToolsPanelItem label={__('Button')} hasValue={() => !!colorSetting.buttonColor}>
                    <ColorControlDropdown
                        label={__('Button')}
                        colorValue={colorSetting.buttonColor}
                        onChangeColor={(color) => setColorSetting({ ...colorSetting, buttonColor: color })}
                    />
                </ToolsPanelItem>
                <ToolsPanelItem label={__('Icon')} hasValue={() => !!colorSetting.iconColor}>
                    <ColorControlDropdown
                        label={__('Icon')}
                        colorValue={colorSetting.iconColor}
                        onChangeColor={(color) => setColorSetting({ ...colorSetting, iconColor: color })}
                    />
                </ToolsPanelItem>
            </div>
        </ToolsPanel>
    );
};

export default ColorControl;

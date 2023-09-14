import React, { useState, useEffect } from 'react';
import {
    Button,
    Card,
    __experimentalHeading as Heading,
    __experimentalGrid as Grid,
    Panel, PanelBody, Icon,
    RangeControl, ColorPalette,
    __experimentalToggleGroupControlOption as ToggleGroupControlOption,
    __experimentalToggleGroupControl as ToggleGroupControl,
} from "@wordpress/components";


function App() {
    const [selectedIcon, setSelectedIcon] = useState('arrow-up-alt2');
    const [iconPosition, setIconPosition] = useState('center');
    const [iconPadding, setIconPadding] = useState('10px');
    const [iconSize, setIconSize] = useState(24);
    const [borderRadius, setBorderRadius] = useState(0);
    const [buttonColor, setButtonColor] = useState();

    useEffect(() => {
        switch (selectedIcon) {
            case 'arrow-up-alt2':
                setIconSize(24);
                break;
            case 'arrow-down-alt2':
                setIconSize(32);
                break;
            case 'arrow-left-alt2':
            case 'arrow-right-alt2':
                setIconSize(28);
                break;
            default:
                setIconSize(24);
        }
    }, [selectedIcon]);

    const handleIconChange = (value) => {
        setSelectedIcon(value);
    };

    const handleIconPositionChange = (value) => {
        setIconPosition(value);
    };

    const handleIconPaddingChange = (value) => {
        setIconPadding(value + 'px');
    };

    const handleIconSizeChange = (value) => {
        setIconSize(value);
    };

    const handleColorChange = (color) => {
        setButtonColor(color);
    };

    const handleBorderRadiusChange = (value) => {
        setBorderRadius(value);
    };

    const getButtonStyle = () => {
        const style = {
            padding: iconPadding,
            borderRadius: `${borderRadius}px`,
            fontSize: `${iconSize}px`,
            backgroundColor: buttonColor,
        };

        return style;
    };

    return (
        <div className='app-container'>
            <Card>
                <Heading color="black" level={1}>Go-To-Top</Heading>
            </Card>
            <Grid columns={2} gap={1} templateColumns="3fr repeat(1,1fr)">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: iconPosition === 'center' ? 'center' : (iconPosition === 'left' ? 'flex-start' : 'flex-end'), height: '100vh' }}>
                    <Button
                        label="Go to Top"
                        variant="secondary"
                        style={getButtonStyle()}
                    >
                        <Icon
                            icon={selectedIcon}
                            size={iconSize}
                            style={{ maxWidth: '100%', height: 'auto' }}
                        />
                    </Button>
                </div>

                <Panel className="sidepanel" style={{ height: '100%' }} header='Settings Panel' >
                    <PanelBody title="Button Settings" initialOpen={true}>
                        <ToggleGroupControl
                            label="Select an Icon"
                            selected={selectedIcon}
                            onChange={handleIconChange}
                        >
                            <ToggleGroupControlOption
                                label="Up"
                                value={'arrow-up-alt2'}
                            />
                            <ToggleGroupControlOption
                                label="Down"
                                value={'arrow-down-alt2'}
                            />
                            <ToggleGroupControlOption
                                label="Left"
                                value={'arrow-left-alt2'}
                            />
                            <ToggleGroupControlOption
                                label="Right"
                                value={'arrow-right-alt2'}
                            />
                        </ToggleGroupControl>

                        <ToggleGroupControl
                            label="Icon Position"
                            selected={iconPosition}
                            onChange={handleIconPositionChange}
                        >
                            <ToggleGroupControlOption
                                label="Center"
                                value="center"
                            />
                            <ToggleGroupControlOption
                                label="Left"
                                value="left"
                            />
                            <ToggleGroupControlOption
                                label="Right"
                                value="right"
                            />
                        </ToggleGroupControl>

                        <RangeControl
                            label="Icon Padding"
                            min={0}
                            max={50}
                            value={parseInt(iconPadding)}
                            onChange={handleIconPaddingChange}
                        />

                        <RangeControl
                            label="Icon Size"
                            min={1}
                            max={100}
                            value={iconSize}
                            onChange={handleIconSizeChange}
                        />
                    </PanelBody>
                    <PanelBody title="Color Settings">
                        <ColorPalette
                            colors={[
                                {
                                    color: '#f00',
                                    name: 'Red'
                                },
                                {
                                    color: '#fff',
                                    name: 'White'
                                },
                                {
                                    color: '#00f',
                                    name: 'Blue'
                                }
                            ]}
                            label="Button Color"
                            value={buttonColor}
                            onChange={handleColorChange}
                        />
                    </PanelBody>
                    <PanelBody title="Border Settings">
                        <RangeControl
                            label="Border Radius"
                            min={0}
                            max={50}
                            value={borderRadius}
                            onChange={handleBorderRadiusChange}
                        />
                    </PanelBody>
                </Panel>
            </Grid>
        </ div >
    );
}

export default App;

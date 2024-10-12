/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';
import { useEffect } from '@wordpress/element';
import { dispatch } from '@wordpress/data';
import { store as coreDataStore } from '@wordpress/core-data';
import {
    Button,
    Card,
    CardHeader,
    Icon,
    ToggleControl,
    __experimentalHeading as Heading,
    __experimentalHStack as HStack,
    __experimentalText as Text,
} from "@wordpress/components";

/**
 * Internal Dependencies
 */
import { useSettings } from '../data';

/**
 * Render Header Component
 */
function Header() {

    const {
        enabled,
        setEnabled,
        setShowNotice,
        disableButton,
        setDisableButton,
        generalSetting,
        dimensionSetting,
        colorSetting,
        borderSetting,
        advancedSetting,
        responsive,
    } = useSettings();

    const handleSaveSettings = () => {
        dispatch(coreDataStore).saveEntityRecord(
            'root',
            'site',
            {
                go2top: {
                    enabled,
                    generalSetting,
                    dimensionSetting,
                    colorSetting,
                    borderSetting,
                    advancedSetting,
                    responsive,
                },
            },
        );

        setShowNotice(true);
        setDisableButton(true);
    }

    useEffect(() => {
        setDisableButton(false);
    }, [enabled, generalSetting, dimensionSetting, colorSetting, borderSetting, advancedSetting, responsive]);

    return (
        <Card>
            <CardHeader>
                <HStack>
                    <HStack justify='left'>
                        <Icon icon={'arrow-up-alt'} size={25} />
                        <Heading upperCase>
                            Go To Top
                        </Heading>
                    </HStack>
                    <HStack>
                        <HStack justify='right'>
                            <Text>{enabled ? 'Enabled' : 'Disabled'}</Text>
                            <ToggleControl
                                __nextHasNoMarginBottom
                                checked={enabled}
                                onChange={(value) => setEnabled(value)}
                            />
                        </HStack>
                        <Button
                            label={__('Save')}
                            variant='primary'
                            style={{ padding: '10px 30px' }}
                            disabled={disableButton}
                            onClick={handleSaveSettings}>
                            Save
                        </Button>
                    </HStack>
                </HStack>
            </CardHeader>
        </Card>
    );
};

export default Header;

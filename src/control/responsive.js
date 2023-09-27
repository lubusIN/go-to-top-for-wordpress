/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';
import { PanelBody, ToggleControl } from "@wordpress/components";

/**
 * Internal Dependencies
 */
import { useSettings } from '../data';

/**
 * Render Responsive Setting Control
 */
function ResponsiveControl() {

    const { responsive, setResponsive } = useSettings();

    return (
        <PanelBody title="Responsive" initialOpen={false}>
            <ToggleControl
                label={__('Hide on Mobile')}
                checked={responsive.mobile}
                onChange={(value) => setResponsive({ ...responsive, mobile: value })}
            />
            <ToggleControl
                label={__("Hide on Deskptop")}
                checked={responsive.desktop}
                onChange={(value) => setResponsive({ ...responsive, desktop: value })}
            />
            <ToggleControl
                label={__("Hide on Tablet")}
                checked={responsive.tablet}
                onChange={(value) => setResponsive({ ...responsive, tablet: value })}
            />
        </PanelBody>
    );
};

export default ResponsiveControl;
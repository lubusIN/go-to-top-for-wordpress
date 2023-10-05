/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';
import { Panel, __experimentalGrid as Grid } from "@wordpress/components";

/**
 * Internal Dependencies
 */
import { Header, PreviewButton, SaveNotice } from './component';
import { useSavedSettings } from './data';
import {
    AdvancedControl,
    BorderControl,
    ColorControl,
    DimensionControl,
    GeneralControl,
    ResponsiveControl
} from './control'

/**
 * Render App
 */
function App() {

    useSavedSettings();

    return (
        <div className='ls_g2t_container'>
            <Header />
            <Grid className="ls_g2t_section" columns={2} templateColumns="3fr repeat(1,1fr)">
                <PreviewButton />
                <Panel className="ls_g2t_sidepanel" header={__('Settings Panel')} >
                    <GeneralControl />
                    <DimensionControl />
                    <ColorControl />
                    <BorderControl />
                    <AdvancedControl />
                    <ResponsiveControl />
                </Panel>
            </Grid>
            <SaveNotice />
        </div>
    );
}

export default App;

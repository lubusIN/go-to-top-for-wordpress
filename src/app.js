import React from 'react';
import {
    Button,
    __experimentalGrid as Grid,
    Panel,
    PanelBody,
} from "@wordpress/components";
import { settings } from "@wordpress/icons"

function App() {
    return (
        <div>
            <Grid
                columns={2}
                gap={1}
                templateColumns="3fr 1fr"
            >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                    <Button
                        label="Go to Top"
                        variant="secondary"
                        icon={"arrow-up-alt2"}
                    ></Button>
                </div>
                <Panel>
                    <PanelBody title="Button Settings" icon={settings} />
                </Panel>
            </Grid>
        </div>
    );
}

export default App;
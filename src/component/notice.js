import { Snackbar } from '@wordpress/components';
import { useSettings } from '../data';

function SaveNotice() {

    const { showNotice, setShowNotice } = useSettings();

    return showNotice ?
        <Snackbar
            className='ls_g2top_notice'
            explicitDismiss
            onRemove={(value) => setShowNotice(value)}
        >
            Settings Saved.
        </Snackbar>
        : null;
};

export default SaveNotice;

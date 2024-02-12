import React from 'react';
import {Button} from "@material-ui/core";

class ChargeExchange extends React.Component{

    goDownloadPage() {
        window.open(
            'https://down.ad-lib.live',
            '_blank'
        );
    }

    render() {
        const {t} = this.props;
        return (
            <div style={{textAlign:'center'}}>
                {t('PLEASE_USE_APP')}
                <div>
                    <Button
                        variant='outlined'
                        onClick={() => {this.goDownloadPage()}}
                    >
                        {t('APPDOWNLOAD')}
                    </Button>
                </div>
            </div>
        );
    }
}

export default ChargeExchange
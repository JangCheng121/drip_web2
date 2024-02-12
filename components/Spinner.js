/**
 * Spinner
 * */

import React from 'react';
import { FadeLoader } from 'react-spinners';

export default class Spinner extends React.Component {

    render() {
        return (
            <div style={{justifyContent: 'center', marginTop : 50, display : 'flex'}}>
                {/*<img alt='' src="../static/img/common/loading.gif" width="50" height="50"/>*/}
                <FadeLoader
                    // css={override}
                    sizeUnit={"%"}
                    size={20}
                    color={'#adadad'}
                    loading={true}
                />
            </div>
        );
    }
}


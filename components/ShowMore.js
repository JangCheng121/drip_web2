import React from 'react';
import Link from './Link';
import {withTranslation} from "../i18n";

const ShowMore = (props) => {
    return (
        <div style={{flex:1, textAlign:'right', marginRight:10}}>
            <Link href={props.href}>{props.t('SHOW_MORE')}</Link>
        </div>
    )
}

export default withTranslation('common')(ShowMore)
import React from 'react';
import Link from "./Link";
import Typography from "@material-ui/core/Typography";

export default (props) => {
    return (
        <Link href="/">
            <div style={{alignItems:"center", display:"flex", marginRight:15}}>
                <img src="../static/image/logo.png" style={{width:40, height: 40}}/>
            </div>
        </Link>
    )
}
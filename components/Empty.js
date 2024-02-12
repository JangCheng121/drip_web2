import React from 'react';

class Empty extends React.Component {

    render() {
        return (
            <div style={{display:'flex', justifyContent:'center'}}>
                <img
                    src={"../static/img/common/empty-box.png"} width="25%" height="25%" alt="Empty"/>
            </div>
        );
    }
}

export default Empty;

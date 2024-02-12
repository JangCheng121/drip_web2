import React, {useState} from 'react';
import Button from "@material-ui/core/Button";
import {connect} from "react-redux";
import Cropper from "react-cropper";
import 'cropperjs/dist/cropper.css';
import PropTypes from "prop-types";
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Camera from 'react-html5-camera-photo';
import CameraIcon from '@material-ui/icons/PhotoCameraOutlined';
import 'react-html5-camera-photo/build/css/index.css';

const UploadImage=(props)=>{
    const {mi, onChangeImage, noCamera, default_image} = props;
    const [cropping, setCropping] = useState(false);
    const [openDialog, setOpenDialog] = React.useState(false);
    const [image, setImage] = useState(default_image ? default_image :'../static/image/chanel_default.png');//
        let cropper = null;

    function onChange(e) {
        e.preventDefault();
        let files;
        if (e.dataTransfer) {
            files = e.dataTransfer.files;
        } else if (e.target) {
            files = e.target.files;
        }
        const reader = new FileReader();
        reader.onload = () => {
            setImage(reader.result);
            setCropping(true);
        };
        reader.readAsDataURL(files[0]);
    }

    function cropImage() {
        if (typeof cropper.getCroppedCanvas() === 'undefined') {
            return;
        }
        setImage(cropper.getCroppedCanvas().toDataURL());
        setCropping(false);
        onChangeImage(image, true);
    }

    function cancelCrop() {
        setCropping(false);
        setImage(mi.picture);
        onChangeImage(image, false);
        cropper = null;
    }

    function onTakePhoto (dataUri) {
        // Do stuff with the dataUri photo...
        setImage(dataUri);
        onChangeImage(dataUri, true);
        funcClickCapture()
    }

    function funcClickCapture() {
        // setCapturing(!capturing)
        setOpenDialog(!openDialog);
    }
    function handleClose() {
        setOpenDialog(!openDialog);
    }

    return(
        <>
            {!cropping ?
                <div style={{width: "fit-content", flexDirection:"row", display:"flex"}}>
                    <div style={{backgroundColor:'#e2e2e2'}}>
                        <label htmlFor="upload" style={{width: '100%', minWidth: 100, display:'flex'}}>
                            <img alt={'여기를 클릭하세요'} src={image} style={{ maxWidth:100, maxHeight:100}}/>
                        </label>
                        <input type="file" id="upload" name="file"
                               accept='image/*'
                               style={{display: 'none'}}
                               onChange={onChange}
                        />
                    </div>
                    {noCamera ? null
                        :<Button variant="contained"
                                style={{margin: 10, height: "fit-content", width: "fit-content"}}
                                onClick={() => {
                                    funcClickCapture()
                                }}
                        >
                            <CameraIcon />
                        </Button>
                    }
                </div> :
                <div>
                    <Cropper
                        ref={data => {
                            cropper = data
                        }}
                        src={image}
                        style={{height: 400, width: '100%'}}
                        aspectRatio={16 / 16}
                        guides={false}
                    />
                    <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                        <Button variant="contained" color="primary"
                                onClick={cropImage}>자르기</Button>
                        <Button variant="contained" color="secondary" style={{marginLeft: 10}}
                                onClick={cancelCrop}>취소</Button>
                    </div>
                </div>
            }
            <Dialog
                open={openDialog}
                onClose={handleClose}
                maxWidth='md'
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent style={{padding:0}}>
                    <Camera
                        onTakePhoto={(dataUri) => {
                            onTakePhoto(dataUri);
                        }}
                        idealResolution={{width: 500, height: 500}}
                        imageType={'jpg'}
                        imageCompression={0.97}
                        isMaxResolution={false}
                        isImageMirror={false}
                        isSilentMode={true}
                        isDisplayStartCameraError={true}
                        isFullscreen={false}
                        sizeFactor={1}
                    />
                </DialogContent>
            </Dialog>
        </>
    )
}

UploadImage.propTypes = {
    onChangeImage: PropTypes.func,
};

export default connect(
    state=>({
        mi:state.system.mi
    })
)(UploadImage);
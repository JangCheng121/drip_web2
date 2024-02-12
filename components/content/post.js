import React, {Component} from 'react';
import '../../static/css/post.css';
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux'
import * as Medias from '../../redux/modules/medias'
import * as Post from '../../redux/modules/post'
import {dataService} from '../../model/DataService';
import * as System from "../../redux/modules/system";
import * as CONST from "../../model/Const";
import AlertModal from "../../components/AlertModal";
import PhotoSwipeGallery from 'photoswipe';
import PhotoswipeUIDefault from 'photoswipe/dist/photoswipe-ui-default';
import 'photoswipe/dist/photoswipe.css';
import 'photoswipe/dist/default-skin/default-skin.css';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import LinearProgress from '@material-ui/core/LinearProgress';

let vm = null;
class PostPage extends Component {

    state = {
        fileList: [],
        uploading: false,
        isOpen: false,
        galleryIdx: 0,
        isAdvert: false,
        point: 0,
        advertLink:'',
        modalStatus:false,
        modalContentStr:'',
        modalBtnStr:'',
        modalGoStatus:'page',
    };

    constructor(props) {
        super(props);
        vm = this;
        const {data} = this.props.setting, {mi} = this.props;
        if (!data || !data.advert_point_guarantee) {
            const {setting} = this.props;
            if (setting.status !== CONST.STATUS_REQ_START)
                this.props.getSetting();
        }
        if (!mi.member) {
            const {funcPostBack} = this.props;
            funcPostBack && funcPostBack();
        }
    }

    componentDidMount() {
        this.input.addEventListener('change', this.addItem);
        const {status} = this.props.post;
        if (status === Post.STATUS_IDLE) {
            this.props.resetPost();
        }

    }

    addItem(e) {
        const {t} = vm.props;
        let contentType = vm.props.post.contentType;
        let medias = vm.input.files;
        for (let i = 0; i < medias.length; i++) {
            let item = medias[i];
            let type = '';
            if (item.type)
                type = dataService.getMediaType(item.type);
            if(type !== contentType){
                alert(t('FILEERROR'));
                continue;
            }
            if(type==='image' || type==='video'){
                let media = Object.assign({}, Medias.MEDIA);
                let path = window.URL.createObjectURL(item)
                media.path = path;
                media.type = type;
                media.from = 'social';
                media.direction = Medias.DIRECTION_UP;
                media.file = item;
                let payload = {
                    url: path,
                    value: media,
                }

                vm.props.addMediaItem(payload);
                vm.props.addPostItem(path);
            }else{
                alert(t('FILEERROR'));
                return;
            }
        }
    }

    cancelItem(item, index) {
        let {medias, removePostItem} = vm.props;
        let media = medias[item.path];
        if (!media)
            return;

        removePostItem(index);
    }

    renderImageItem(item, index) {
        const {items} = this.props.post;
        let medias = vm.props.medias;
        if (!medias[item.path])
            return ([]);

        let media = medias[item.path];

        return (
            <div key={index} style={{width:media.type === 'image'?'10%':'20%', padding:10}}>
                {media.type === 'image' ?
                    <img alt='' src={media.path} style={{width:'100%'}} onClick={() => this.openGallery(media.path, items,index)}/>

                    :
                    <video style={{width: '100%'}} controls>
                        <source src={media.path} type={'video/mp4'}/>
                    </video>
                }
                <i className="icon-close icons font-2xl close-position"
                   onClick={() => this.cancelItem(item, index)} />
                <LinearProgress style={{display: media.progress > 0 ? 'flex' : 'none'}}
                                variant="determinate" value={media.progress} />
            </div>
        )
    }

    openGallery = (item, itemList, index) => {
        const items = [];
        for (var num in itemList) {
            items[num] = {src:itemList[num].path ,w:0,h:0}
        }
        const pswpElement = this.pswpElement;
        const options = {index: index};
        this.gallery = new PhotoSwipeGallery( pswpElement, PhotoswipeUIDefault, items, options);
        this.gallery.listen('gettingData', (index, item) => {
            if (item.w < 1 || item.h < 1) { // unknown size
                var img = new Image();
                img.onload = function() { // will get size after load
                    item.w = this.width; // set image width
                    item.h = this.height; // set image height
                    vm.gallery.invalidateCurrItems(); // reinit Items
                    vm.gallery.updateSize(true); // reinit Items
                };
                img.src = item.src; // let's download image
            }
        });
        this.gallery.init();
    };
    closeGallery = () => {
        if (!this.gallery) return;
        this.gallery.close();
    };

    onChangeTitle(e) {
        let title = e.target.value;
        vm.props.setPostTitle(title);
    }

    onChangeText(e) {
        let content = e.target.value;
        vm.props.setPostText(content);
    }

    onChangePoint(e) {
        let point = e.target.value;
        let invalid = isNaN(point);
        if (invalid) return;
        // this.setState({point: point});
        vm.props.postUpdate({cost: point?parseInt(point):0});
    }

    onChangeType(e) {
        let title = vm.props.post.title;
        // vm.props.resetPost();
        vm.props.postUpdate({items: []});
        let type = e.target.value;
        vm.props.setPostTitle(title);
        // vm.props.setPostType(type.toLowerCase());
        vm.props.postUpdate({contentType: type.toLowerCase()});
    }

    changeAdvert = (e) => {
        const {advert_point_guarantee,  advert_point_min, } = this.props.setting.data;
        let isAdvert = e.target.value === Post.POST_TYPE_CONTENT ? false : true;
        vm.props.postUpdate({type: isAdvert?Post.POST_TYPE_ADVERT:Post.POST_TYPE_CONTENT,
            guarantee:isAdvert?advert_point_guarantee:0,
            cost:isAdvert?advert_point_min:0
        });
    };

    funcChangeAdvertLink(linkUrl){
        vm.props.postUpdate({url:linkUrl});
    }

    funcModalCallBack() {
        const {funcPostBack} = this.props;
        this.props.doPost();
        funcPostBack();
        this.funcToggleModal();
    }
    funcPostBtnClick() {
        const {mi, post, setting, t, funcPostBack} = this.props;
        if (post.type === Post.POST_TYPE_CONTENT) {
            this.props.doPost();
            funcPostBack();
            return;
        }
        if (post.guarantee > mi.point) {
            this.setState({
                modalContentStr:t('HAVENOPOINT'),
                modalBtnStr:t('MONEYCHARGE'),
                modalGoStatus:'charge',
            })
        } else {
            this.setState({
                modalContentStr:t('ADVERT_ALERT_MODAL_STR',
                    {
                        advertDays:setting.data.advert_days?setting.data.advert_days:0,
                        guarantee:setting.data.advert_point_guarantee?setting.data.advert_point_guarantee:0
                    }),
                modalBtnStr:t('DONE'),
                modalGoStatus:'page',
            })
        }
        this.funcToggleModal()
    }
    funcToggleModal() {
        this.setState({modalStatus:!this.state.modalStatus})
    }

    render() {
        const {items, text, title, type,status, cost, contentType, url} = this.props.post,
            {advert_point_guarantee, advert_days, advert_point_min, advert_point_max} = this.props.setting.data,
            {funcPostBack, t} = this.props;
        if (status === Post.STATUS_SUCCESS) {
            funcPostBack&&funcPostBack();
        }

        let accept='';
        let multiple ='';
        if(contentType==='image'){
            accept='image/*';
            multiple= true
        }else if(contentType === 'video'){
            accept='video/*';
            multiple =  false;
        }
        let {isOpen} = this.state; ///isAdvert: default false->square, true->advert 광고로 올라간다.
        let btnDisabled = (items.length || text.length) ? false : true
        let images = [];
        for (let i in items) {
            let item = {};
            item.src = items[i].path;
            images.push(item)
        }
        let renderOption = [];
        let inputItem = advert_point_min;
        while (inputItem <= advert_point_max) {
            renderOption.push(inputItem>advert_point_max?advert_point_max:inputItem);
            inputItem += 5;
        }
        return (
            <div className="animated fadeIn m-4">
                {/*<Back props={this.props}/>*/}
                <div className="d-flex justify-content-center">
                    <div className='col-auto'>
                        <div style={{alignItems:"center"}}>
                            <RadioGroup
                                aria-label="gender"
                                name="advert_square"
                                style={{margin:10, flexDirection:"row", display:"flex"}}
                                value={type}
                                onChange={this.changeAdvert}
                            >
                                <FormControlLabel value={Post.POST_TYPE_CONTENT} control={<Radio />} label={t("SQUARE")} />
                                <FormControlLabel value={Post.POST_TYPE_ADVERT} control={<Radio />} label={t("ADVERT")} />
                            </RadioGroup>
                        </div>
                        <div style={{flexDirection:'row', alignItems:"center", display:'flex'}} >
                            <TextField
                                select
                                style={{margin:5, width: 250}}
                                variant="filled"
                                hiddenLabel
                                inputProps={{ 'aria-label': 'dense hidden label' }}
                                margin="dense"
                                value={contentType}
                                onChange={this.onChangeType}
                            >
                                {/*<MenuItem key='text' value='text'>*/}
                                {/*    문자*/}
                                {/*</MenuItem>*/}
                                <MenuItem key='image' value='image'>
                                    {t('IMAGE')}
                                </MenuItem>
                                <MenuItem key='video' value='video'>
                                    {t('VIDEO')}
                                </MenuItem>
                            </TextField>
                            <FormLabel style={{marginLeft:10}}>{t("POINT")}</FormLabel>
                            <div className="mt-2 col-auto pl-0 pr-0">
                                {type===Post.POST_TYPE_ADVERT?
                                    <TextField
                                        select
                                        style={{margin:5, width: 250}}
                                        variant="filled"
                                        inputProps={{ 'aria-label': 'dense hidden label' }}
                                        margin="dense"
                                        hiddenLabel
                                        value={cost}
                                        onChange={this.onChangePoint}
                                    >
                                        {renderOption.map((item, index)=> {
                                            return (
                                                <MenuItem key={index} value={item}>
                                                    {item}
                                                </MenuItem>
                                            )
                                        })}
                                    </TextField>
                                    :<TextField
                                            id="filled-adornment-password"
                                            style={{margin:5,}}
                                            variant="filled"
                                            hiddenLabel
                                            inputProps={{'aria-label': 'dense hidden label' }}
                                            margin="dense"
                                            value={cost}
                                            placeholder={t('INPUT')}
                                            onChange={this.onChangePoint.bind(this)}
                                        />
                                }
                            </div>
                            <FormLabel className='mb-0 mt-2 ml-2'>{type===Post.POST_TYPE_ADVERT? t("TOPAYMENTPOINT") :t("CANGETPOINT")}</FormLabel>
                            {type===Post.POST_TYPE_ADVERT ?
                                <div style={{flexDirection:"row", alignItems:"end", display:'flex'}} >
                                    <div title={t('ADVERT_GUARANTEE_HINT')}
                                         className='row ml-0 mr-0 align-items-end'>
                                        <FormLabel style={{fontSize:18}} className='mb-0 mt-2 ml-2'><strong>{t('ADVERT_GUARANTEE')}</strong></FormLabel>
                                        <FormLabel style={{fontSize:18}} className='mb-0 mt-2'>:{advert_point_guarantee}</FormLabel>
                                        <FormLabel className='mb-0 mt-2'>{t('POINT')}</FormLabel>
                                    </div>
                                    <div className='' title={t('POST_COST_ADVERT_HINT')}>
                                        <FormLabel style={{fontSize:18}} className='mb-0 mt-2 ml-2'><strong>{t('ADVERT_DAYS')}</strong></FormLabel>
                                        <FormLabel style={{fontSize:18}} className='mb-0 mt-2 ml-2'>:{advert_days}</FormLabel>
                                        <FormLabel className='mb-0 mt-2'>{t('DAYTOP')}</FormLabel>
                                    </div>
                                </div>
                                :null
                            }
                        </div>
                        <div className="mt-2">
                            <TextField
                                id="filled-adornment-password"
                                style={{padding:5, width:'100%'}}
                                variant="filled"
                                hiddenLabel
                                multiline
                                label='설명글'
                                inputProps={{'aria-label': 'dense hidden label' }}
                                margin="dense"
                                value={text}
                                placeholder={t('INPUT')}
                                onChange={this.onChangeText}
                            />
                        </div>
                        <div style={{flexDirection:'row', alignItems:"center", display:'flex', width:'100%'}} >
                            {items.map((item, key) => {
                                return (
                                    vm.renderImageItem(item, key)
                                )
                            })}

                            <div style={{display: contentType === 'text' ||(type==='video' && items.length)? 'none' : 'unset'}}>
                                <label htmlFor="upload">
                                    <img alt='' src='../../static/img/add.png' style={{width:60}}/>
                                </label>
                                <input ref={e => this.input = e}
                                       type="file" id="upload" name="file"
                                       multiple={multiple}
                                       accept = {accept}
                                       style={{display: 'none'}}
                                />
                            </div>
                        </div>
                        {type===Post.POST_TYPE_ADVERT?
                            <TextField
                                id="filled-adornment-password"
                                style={{margin:5,}}
                                variant="filled"
                                hiddenLabel
                                inputProps={{'aria-label': 'dense hidden label' }}
                                margin="dense"
                                value={url}
                                placeholder={t('ADVERT_LINK')}
                                onChange={(e)=>{this.funcChangeAdvertLink(e.target.value)}}
                            />
                            :null
                        }
                        <div className="flex-row-reverse" style={{display:'flex'}}>
                            <Button  variant="outlined" color="primary"
                                     style={{ marginLeft:"auto", margin:10 }}
                                     onClick={() => {this.funcPostBtnClick();}}
                                     disabled={btnDisabled || status=== Post.STATUS_POSTING}
                                     className="btn red point-btn m-3 "
                            >
                                {t('POST')}
                            </Button>
                        </div>
                        <div className='pl-3'>
                            <strong>{t('CAUTION')}:</strong><br/>
                            {t('CAUTIONCONTENT')}
                        </div>
                        <AlertModal {...this.props}
                                    modalStatus={this.state.modalStatus}
                                    alertStr={this.state.modalContentStr}
                                    btnOkStr={this.state.modalBtnStr}
                                    funcBtnOkCallback={this.funcModalCallBack.bind(this)}
                                    goStatus={this.state.modalGoStatus}
                                    toggleFunc={this.funcToggleModal.bind(this)}
                        />
                    </div>
                </div>
                <div className="pswp" tabIndex="-1" role="dialog" aria-hidden="true" ref={(div) => {this.pswpElement = div;} }>
                    <div className="pswp__bg" />
                    <div className="pswp__scroll-wrap">
                        <div className="pswp__container">
                            <div className="pswp__item" />
                            <div className="pswp__item" />
                            <div className="pswp__item" />
                        </div>
                        <div className="pswp__ui pswp__ui--hidden">
                            <div className="pswp__top-bar">
                                <div className="pswp__counter" />
                                <button className="pswp__button pswp__button--close" title="Close (Esc)" />
                                <button className="pswp__button pswp__button--share" title="Share" />
                                <button className="pswp__button pswp__button--fs" title="Toggle fullscreen" />
                                <button className="pswp__button pswp__button--zoom" title="Zoom in/out" />
                                <div className="pswp__preloader">
                                    <div className="pswp__preloader__icn">
                                        <div className="pswp__preloader__cut">
                                            <div className="pswp__preloader__donut" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                                <div className="pswp__share-tooltip" />
                            </div>
                            <button className="pswp__button pswp__button--arrow--left" title="Previous (arrow left)" />
                            <button className="pswp__button pswp__button--arrow--right" title="Next (arrow right)" />
                            <div className="pswp__caption">
                                <div className="pswp__caption__center" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(
    state => ({
        mi : state.system.mi,
        medias: state.medias,
        post: state.post,
        setting:state.system.setting,
    }),
    dispatch => ({
        // getMediaItem: (path) => dispatch(Medias.get(path)),
        addMediaItem: (payload) => dispatch(Medias.addNew(payload)),
        addPostItem: (path) => dispatch(Post.addMedia(path)),
        postUpdate: (data) => dispatch(Post.setUpdatePost(data)),
        setPostTitle: (title) => dispatch(Post.setTitle(title)),
        setPostText: (text) => dispatch(Post.setText(text)),
        // setPostType: (type) => dispatch(Post.setType(type)),
        resetPost: () => dispatch(Post.reset()),
        doPost: () => dispatch(Post.doPost()),
        removePostItem: (index) => dispatch(Post.removeMedia(index)),
        getSetting: () => dispatch(System.getSettingAsync()),
    })
)(PostPage)

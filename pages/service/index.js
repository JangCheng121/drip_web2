import React, {useState} from 'react'
import PropTypes from "prop-types";
import {withTranslation} from '../../i18n';
import Notification from './Notification'
import FAQ from './Faq'
import Consultation from './Consultation'
import {connect} from "react-redux";
import MainTab from "../../components/MainTab";
import Warning from "../../components/Warning";


const Service = (props) => {
    const {notiData, faqData, t} = props;

    const tabData = [
        {label: t("NOTICE"), value: "notice"},
        {label: t("FAQ"), value: "faq"},
        // {label: t("SERVICECOMMUNITY"), value:"consultation"},
    ];

    const [value, setValue] = useState('notice');
    const [noticeName, setNoticeName] = useState('');
    const [noticeContent, setNoticeContent] = useState('');

    function handleChange(event, newValue) {
        if (newValue === 'consultation') {
            setNoticeName('login');
            setNoticeContent("이 기능은 회원만 가능합니다.회원가입 하시겠습니까?");
            return;
        }
        setValue(newValue);
    }

    function closeNotice() {
        setNoticeName('');
        setNoticeContent('');
    }

    function renderTabPanel(value) {
        if (value === 'notice') {
            return <Notification notiData={notiData}/>
        } else if (value === 'faq') {
            return <FAQ faqData={faqData}/>
        } else if (value === 'consultation') {
            return <Consultation {...props}/>
        }
    }

    return (
        <>
            <MainTab
                type={'service'}
                tabs={tabData}
                value={value}
                onChange={handleChange}
                panel={renderTabPanel(value)}
                btn_add={false}
            />
            <Warning
                isOpen={noticeName.length > 0}
                context_t={t}
                content={noticeContent}
                close={closeNotice}
                action={noticeName}
            />
        </>
    )
}
export default withTranslation('common')(Service);


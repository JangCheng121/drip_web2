/*
import NextI18Next from 'next-i18next';

const NextI18NextInstance = new NextI18Next({
    defaultLanguage: 'cn',
    otherLanguages: ['en', 'ko']
})

export default NextI18NextInstance

export const {
    appWithTranslation,
    withTranslation,
    i18n,
} = NextI18NextInstance
*/

const NextI18Next = require('next-i18next').default;

module.exports = new NextI18Next({
    defaultLanguage: 'cn',
    otherLanguages: ['en', 'ko']
});
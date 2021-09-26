module.exports = {
    title: 'BSN - 文昌链门户网站',
    description: '',
    base:'/',
    head: [
        [ 'link', {rel:'icon',href:''}],
        [ 'meta', {name:'keywords',content:''}],
        [ 'meta', {property:'og:image',content:''}],
        [ 'meta', {property:'og:title',content:''}],
        [ 'meta', {property:'og:description',content:''}],
        [ 'meta', {name:'viewport',content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0'}]
    ],
    themeConfig: {
        logo: '/favicon.ico',
        search: false,
        navbar: false,
        nav: [
            {text:'BSN 文昌链', link: '/', target: '_self'},
            {text:'技术文档', link: '/wenchangchain', target: '_self'},
            {text:'关于 IRITA', link: 'https://irita.bianjie.ai/', target:'_blank'},
            {text:'关于边界',link:'https://www.bianjie.ai', target: '_blank'}
        ]
    },
}

module.exports = {
    base:'/',
    head: [
        [ 'link', {rel:'icon',href:'/favicon.ico'}],
        [ 'meta', { name: 'keywords', content: '文昌链、文昌链官网、开放联盟链、开放联盟链框架、开放许可链 、IRITAOPB、iritaopb' }],
        [ 'meta', { name: 'description', content: '「文昌链」基于边界智能的企业级联盟链产品 IRITA 打造，具备全生态商业服务能力的开放联盟链。' }],
        [ 'meta', {property:'og:image',content:'https://www.bianjie.ai/resources/WenChangChain/Bianjie-Logo-WenChangChain-Vertical-Black.png'}],
        [ 'meta', {property:'og:title',content:'文昌链'}],
        [ 'meta', {property:'og:description',content:'「文昌链」基于边界智能的企业级联盟链产品 IRITA 打造，具备全生态商业服务能力的开放联盟链。'}],
        [ 'meta', { name: 'baidu-site-verification', content: 'code-15TAd5g0es' }],
        [ 'meta', { name: '360-site-verification', content: '2b7620fde40334818af18b339f863ca2' }],
        [ 'meta', {name:'viewport',content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0'}]
    ],
    themeConfig: {
        search: false,
        navbar: false,
        nav: [
            {text:'关于文昌链', link: '/', target: '_self'},
            {text:'生态应用', link: '/ecological-application', target: '_self'},
            {text:'技术文档', link: 'https://docs.avata.bianjie.ai', target: '_blank'},
            {text:'浏览器', link: 'https://explorer.wenchang.bianjie.ai', target: '_blank'},
            {text:'关于 IRITA', link: 'https://irita.bianjie.ai/', target:'_blank'},
            {text:'关于边界',link:'https://www.bianjie.ai', target: '_blank'},
            {text:'更多公告',link:'/notices', target: '_self'}
        ]
    },
    plugins:{
        '@vuepress/pwa': {
            generateSWConfig : {               
                globPatterns: [
                    '**/*.{js,css,png,jpg,jpeg,gif,svg,woff,woff2,eot,ttf,otf}'
                ],
            }
        }
    },
    chainWebpack: config => {
		const imagesRule = config.module.rule('images');
			imagesRule.uses.clear()
			imagesRule
			.test(/\.(jpg|gif|png|svg)$/)
			.exclude
			.end()
			.use('url-loader')
				.loader('url-loader')
				.options({name:"img/[name].[hash:8].[ext]",limit: 3})
	}
}

;/*FB_PKG_DELIM*/

__d("PolarisLoggedOutMobileTrendingPostChainingModuleQuery$Parameters",["PolarisFeedShareMenu.relayprovider","PolarisIsLoggedIn.relayprovider"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"27855875370678610",metadata:{},name:"PolarisLoggedOutMobileTrendingPostChainingModuleQuery",operationKind:"query",text:null,providedVariables:{__relay_internal__pv__PolarisIsLoggedInrelayprovider:b("PolarisIsLoggedIn.relayprovider"),__relay_internal__pv__PolarisFeedShareMenurelayprovider:b("PolarisFeedShareMenu.relayprovider")}}};e.exports=a}),null);
__d("PolarisPostRoot.entrypoint",["JSResourceForInteraction","PolarisLoggedOutMobileTrendingPostChainingModuleQuery$Parameters","PolarisSeoCrawlingPoolRootQuery$Parameters","usePolarisLoggedOutExperimentQuery$Parameters"],(function(a,b,c,d,e,f,g){"use strict";var h=5;a={getPreloadProps:function(a){var c={dialogUpsellExperimentQueryReference:{options:{},parameters:b("usePolarisLoggedOutExperimentQuery$Parameters"),variables:{checks:[{name:"ig_www_desktop_dialog_upsell"}]}}};a.routeProps.enable_seo_crawling_pool&&(c=babelHelpers["extends"]({},c,{seoCrawlingPoolQuery:{options:{},parameters:b("PolarisSeoCrawlingPoolRootQuery$Parameters"),variables:{caller:"ig_post"}}}));a.routeProps.should_chain_with_trending_content!=null&&a.routeProps.should_chain_with_trending_content&&(c=babelHelpers["extends"]({},c,{trendingContentQueryReference:{parameters:b("PolarisLoggedOutMobileTrendingPostChainingModuleQuery$Parameters"),variables:{country:a.routeProps.specified_country,first:h,language:a.routeProps.specified_language}}}));return{queries:c}},root:c("JSResourceForInteraction")("PolarisPostRoot.react").__setRef("PolarisPostRoot.entrypoint")};g["default"]=a}),98);
__d("PolarisRelatedMediaGridConstants",[],(function(a,b,c,d,e,f){"use strict";a=4;f.MINIMUM_POST_COUNT=a}),66);
__d("PolarisRelatedMediaUsernameHeader.react",["fbt","IGDSButton.react","PolarisIGCoreText","PolarisLinkBuilder","PolarisSEOEventsLogger","polarisLogAction","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=(i||(i=d("react"))).c,k=i;function a(a){var b=j(5),e=a.analyticsContext;a=a.username;var f;b[0]!==e?(f=function(){c("polarisLogAction")("relatedMediaUsernameClick"),d("PolarisSEOEventsLogger").logSEOEvent({containermodule:e,eventName:"relatedMediaUsernameClick"})},b[0]=e,b[1]=f):f=b[1];f=f;var g;b[2]!==a||b[3]!==f?(g=k.jsx(c("PolarisIGCoreText").BodyEmphasized,{color:"ig-secondary-text",children:h._("__JHASH__Br1wiOT_wXn__JHASH__",[h._param("UserLink",k.jsx(c("IGDSButton.react"),{display:"block",href:d("PolarisLinkBuilder").buildUserLink(a),label:a,onClick:f,variant:"secondary_link"}))])}),b[2]=a,b[3]=f,b[4]=g):g=b[4];return g}g["default"]=a}),226);
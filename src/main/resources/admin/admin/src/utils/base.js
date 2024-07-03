const base = {
    get() {
        return {
            url : "http://localhost:8080/springboot5h4b7/",
            name: "springboot5h4b7",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboot5h4b7/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "基于工程教育认证的计算机课程管理平台"
        } 
    }
}
export default base

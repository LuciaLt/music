import React,{Component} from 'react'

class Footer extends Component{
render(){
    return(
        <div>

                <div className="g-ft ">
                    <div className="m-ft">
                        <div className="wrap f-cb">
                            <div className="copy">
                                <p className="link" id="music-link">
                                    <a href="//music.163.com/about" target="_blank" className="item s-fc4">关于网易</a><span className="line">|</span>
                                    <a href="//help.mail.163.com/service.html" target="_blank" className="item s-fc4">客户服务</a><span className="line">|</span>
                                    <a href="//music.163.com/html/web2/service.html" target="_blank" className="item s-fc4">服务条款</a><span className="line">|</span>
                                    <a href="//corp.163.com/gb/legal.html" target="_blank" className="item s-fc4">隐私政策</a><span className="line">|</span>
                                    <a href="//music.163.com/st/staticdeal/complaints.html" target="_blank" className="item s-fc4">版权投诉指引</a><span className="line">|</span>
                                    <a id="g_feedback" href="#" className="item s-fc4" onClick="nm.x.feedback();return false;" hidefocus="true">意见反馈</a>
                                    <span className="line">|</span><a className="s-fc4"></a>
                                </p>
                                <p className="right s-fc3">
                                    <span className="sep span">网易公司版权所有©1997-2019</span><span className="span">杭州乐读科技有限公司运营：</span><a href="http://p1.music.126.net/03WF0APmm-J0TqdbOc8-XQ==/109951163649544962.png" target="_blank" className="alink s-fc3">浙网文[2018]3506-263号</a>
                                </p>
                                <p className="contact s-fc3">
                                    <span className="sep span">违法和不良信息举报电话：0571-89853516</span>
                                    <span className="span">举报邮箱：</span><a className="alink" href="mailto:ncm5990@163.com">ncm5990@163.com</a>
                                </p>
                            </div>
                            <ul className="enter f-fr">
                                <li className="unit">
                                    <a className="logo logonew logo-auth f-tid" href="//music.163.com/st/userbasic#/auth" target="_blank"></a>
                                    <span className="tt tt-auth"></span>
                                </li>
                                <li className="unit">
                                    <a className="logo logonew logo-musician f-tid" href="//music.163.com/recruit" target="_blank"></a>
                                    <span className="tt tt-musician"></span>
                                </li>
                                <li className="unit">
                                    <a className="logo logonew logo-reward f-tid" href="//music.163.com/web/reward" target="_blank"></a>
                                    <span className="tt tt-reward"></span>
                                </li>
                                <li className="unit">
                                    <a className="logo logonew logo-cash f-tid" href="//music.163.com/uservideo#/plan" target="_blank"></a>
                                    <span className="tt tt-cash"></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>



        </div>
    )
}
}
export default Footer
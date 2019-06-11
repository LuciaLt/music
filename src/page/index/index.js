import React,{Component} from 'react'
import "../../css/index.css"
import axios from 'axios';

class Content extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount(){
       axios.get('http://localhost:3000/recommend/resource')
        .then(res => {
            console.log(res)
            if(res.data.code === 200){
                this.setState({data: res.data.data})
            }
        })
    }
 

    render(){
        return(
            <div>


                <div className="n-ban d-flag total">
                    <div className="wrap">

                        <div className="ban f-pr">
                            <a className="active d-flag" href="/album?id=490106" >
                            
                            <img className="d-flag" src="http://p1.music.126.net/HcxJaW0-vRJAsObLEMr5_g==/109951164118165274.jpg" />
                            </a>

                            <a hidefocus="true" href="javascript:void(0)" className="btnl click-flag f-alpha">&lt; </a>
                           
                            <a hidefocus="true" href="javascript:void(0)" className="btnr click-flag f-alpha">&gt;</a>

                        </div>

                    </div>
                </div>





                <div id="discover-module" className="g-bd1 f-cb">
                    <div className="g-mn1">
                    <div className="g-mn1c">
                    <div className="g-wrap3">
                    <div className="n-rcmd">
                        <div className="v-hd2">
                        <a href="/discover/playlist/" className="tit f-ff2 f-tdn">热门推荐</a>
                                <div className="tab">
                                <a href="/discover/playlist/?cat=%E5%8D%8E%E8%AF%AD" className="s-fc3">华语</a>
                                <span className="line">|</span>
                                <a href="/discover/playlist/?cat=%E6%B5%81%E8%A1%8C" className="s-fc3">流行</a>
                                <span className="line">|</span>
                                <a href="/discover/plaulylist/?cat=%E6%91%87%E6%BB%9A" className="s-fc3">摇滚</a>
                                <span className="line">|</span>
                                <a href="/discover/playlist/?cat=%E6%B0%91%E8%B0%A3" className="s-fc3">民谣</a>
                                <span className="line">|</span>
                                <a href="/discover/playlist/?cat=%E7%94%B5%E5%AD%90" className="s-fc3">电子</a>
                                </div>
                            <span className="more"><a href="/discover/playlist/" className="s-fc3">更多</a><i className="cor s-bg s-bg-6">&nbsp;</i></span>
                        </div>


                
                    {/* <ul className="m-cvrlst f-cb">
                    <li>
                    <div className="u-cover u-cover-1">
                    <img src="http://p2.music.126.net/r4AmK3NdGjFlltfncXQweg==/109951164120425583.jpg?param=140y140" />
                    <a title="华语速爆新歌" href="/playlist?id=924680166" className="msk" data-res-id="924680166" data-res-type="13" data-res-action="log" data-res-data="recommendclick|0|featured|user-playlist"></a>
                    <div className="bottom">
                    <a className="icon-play f-fr" title="播放" href="javascript:;" data-res-type="13" data-res-id="924680166" data-res-action="play"></a>
                    <span className="icon-headset"></span>
                    <span className="nb">48482万</span>
                    </div>
                    </div>
                    <p className="dec">
                    <a title="华语速爆新歌" className="tit s-fc0" href="/playlist?id=924680166" data-res-id="924680166" data-res-type="13" data-res-action="log" data-res-data="recommendclick|0|featured|user-playlist">
                    华语速爆新歌
                    </a>
                    </p>
                    </li>
                    <li>
                    <div className="u-cover u-cover-1">
                    <img src="http://p2.music.126.net/mbWmuCkUPmGQyVPPi6K6Ag==/109951163046516516.jpg?param=140y140" />
                    <a title="专供｜T台魅影，秀场律动。" href="/playlist?id=592463480" className="msk" data-res-id="592463480" data-res-type="13" data-res-action="log" data-res-data="recommendclick|1|featured|user-playlist"></a>
                    <div className="bottom">
                    <a className="icon-play f-fr" title="播放" href="javascript:;" data-res-type="13" data-res-id="592463480" data-res-action="play"></a>
                    <span className="icon-headset"></span>
                    <span className="nb">22万</span>
                    </div>
                    </div>
                    <p className="dec">
                    <a title="专供｜T台魅影，秀场律动。" className="tit s-fc0" href="/playlist?id=592463480" data-res-id="592463480" data-res-type="13" data-res-action="log" data-res-data="recommendclick|1|featured|user-playlist">
                    专供｜T台魅影，秀场律动。
                    </a>
                    </p>
                    </li>
                    <li>
                    <div className="u-cover u-cover-1">
                    <img src="http://p2.music.126.net/MROOTGahtFUMvRv7phGSuQ==/109951164073925923.jpg?param=140y140" />
                    <a title="「民谣」边走边唱如诗如歌如理想" href="/playlist?id=2765579776" className="msk" data-res-id="2765579776" data-res-type="13" data-res-action="log" data-res-data="recommendclick|2|cityLevel_B|user-playlist"></a>
                    <div className="bottom">
                    <a className="icon-play f-fr" title="播放" href="javascript:;" data-res-type="13" data-res-id="2765579776" data-res-action="play"></a>
                    <span className="icon-headset"></span>
                    <span className="nb">270万</span>
                    </div>
                    </div>
                    <p className="dec">
                    <a title="「民谣」边走边唱如诗如歌如理想" className="tit s-fc0" href="/playlist?id=2765579776" data-res-id="2765579776" data-res-type="13" data-res-action="log" data-res-data="recommendclick|2|cityLevel_B|user-playlist">
                    「民谣」边走边唱如诗如歌如理想
                    </a>
                    </p>
                    </li>
                    <li>
                    <div className="u-cover u-cover-1">
                    <img src="http://p2.music.126.net/TvuPe4sDHT6b2Ey6-ldt-Q==/109951164118258396.jpg?param=140y140" />
                    <a title="好不容易做了个美梦，一醒就忘了……美梦重温了解一下？" href="/dj?id=2061453530" className="msk" data-res-id="2061453530" data-res-type="13" data-res-action="log" data-res-data="recommendclick|3|featured|user-playlist"></a>
                    <div className="bottom">
                    <a className="icon-play f-fr" title="播放" href="javascript:;" data-res-type="17" data-res-id="2061453530" data-res-action="play"></a>
                    <span className="icon-headset"></span>
                    <span className="nb">6726</span>
                    </div>
                    </div>
                    <p className="dec">
                    <a title="好不容易做了个美梦，一醒就忘了……美梦重温了解一下？" className="tit s-fc0" href="/dj?id=2061453530" data-res-id="2061453530" data-res-type="17" data-res-action="log" data-res-data="recommendclick|3|featured|user-playlist">
                    <i className="u-icn u-icn-53"></i>
                    好不容易做了个美梦，一醒就忘了……美梦重温了解一下...
                    </a>
                    </p>
                    </li>
                    <li>
                    <div className="u-cover u-cover-1">
                    <img src="http://p2.music.126.net/zGzNJcfLZfLW7E0bkI0opg==/109951163815887214.jpg?param=140y140" />
                    <a title="精选 | 网络热歌分享" href="/playlist?id=2602222983" className="msk" data-res-id="2602222983" data-res-type="13" data-res-action="log" data-res-data="recommendclick|4|cityLevel_B|user-playlist"></a>
                    <div className="bottom">
                    <a className="icon-play f-fr" title="播放" href="javascript:;" data-res-type="13" data-res-id="2602222983" data-res-action="play"></a>
                    <span className="icon-headset"></span>
                    <span className="nb">13631万</span>
                    </div>
                    </div>
                    <p className="dec">
                    <a title="精选 | 网络热歌分享" className="tit s-fc0" href="/playlist?id=2602222983" data-res-id="2602222983" data-res-type="13" data-res-action="log" data-res-data="recommendclick|4|cityLevel_B|user-playlist">
                    精选 | 网络热歌分享
                    </a>
                    </p>
                    </li>
                    <li>
                    <div className="u-cover u-cover-1">
                    <img src="http://p2.music.126.net/-q8ZdzXe6nzBZj_oJmy4yg==/109951164093261204.jpg?param=140y140" />
                    <a title="爱上一个人的自己.喜欢上一个人的习惯！" href="/dj?id=2061437282" className="msk" data-res-id="2061437282" data-res-type="13" data-res-action="log" data-res-data="recommendclick|5|featured|user-playlist"></a>
                    <div className="bottom">
                    <a className="icon-play f-fr" title="播放" href="javascript:;" data-res-type="17" data-res-id="2061437282" data-res-action="play"></a>
                    <span className="icon-headset"></span>
                    <span className="nb">171</span>
                    </div>
                    </div>
                    <p className="dec">
                    <a title="爱上一个人的自己.喜欢上一个人的习惯！" className="tit s-fc0" href="/dj?id=2061437282" data-res-id="2061437282" data-res-type="17" data-res-action="log" data-res-data="recommendclick|5|featured|user-playlist">
                    <i className="u-icn u-icn-53"></i>
                    爱上一个人的自己.喜欢上一个人的习惯！
                    </a>
                    </p>
                    </li>
                    <li>
                    <div className="u-cover u-cover-1">
                    <img src="http://p2.music.126.net/eoWEhtwRZMHr6oluXj-bDQ==/109951164021292185.jpg?param=140y140" />
                    <a title="炸场必备 刚柔并济教科书" href="/playlist?id=2051816335" className="msk" data-res-id="2051816335" data-res-type="13" data-res-action="log" data-res-data="recommendclick|6|cityLevel_B|user-playlist"></a>
                    <div className="bottom">
                    <a className="icon-play f-fr" title="播放" href="javascript:;" data-res-type="13" data-res-id="2051816335" data-res-action="play"></a>
                    <span className="icon-headset"></span>
                    <span className="nb">177万</span>
                    </div>
                    </div>
                    <p className="dec">
                    <a title="炸场必备 刚柔并济教科书" className="tit s-fc0" href="/playlist?id=2051816335" data-res-id="2051816335" data-res-type="13" data-res-action="log" data-res-data="recommendclick|6|cityLevel_B|user-playlist">
                    炸场必备 刚柔并济教科书
                    </a>
                    </p>
                    </li>
                    <li>
                    <div className="u-cover u-cover-1">
                    <img src="http://p2.music.126.net/ltI1bsDL6ueLDsujLbnczg==/109951164114904684.jpg?param=140y140" />
                    <a title="【秋水小剧场哄睡】6.1儿童节姐姐的特别节目" href="/dj?id=2061431753" className="msk" data-res-id="2061431753" data-res-type="13" data-res-action="log" data-res-data="recommendclick|7|hot_server|user-playlist"></a>
                    <div className="bottom">
                    <a className="icon-play f-fr" title="播放" href="javascript:;" data-res-type="17" data-res-id="2061431753" data-res-action="play"></a>
                    <span className="icon-headset"></span>
                    <span className="nb">32万</span>
                    </div>
                    </div>
                    <p className="dec">
                    <a title="【秋水小剧场哄睡】6.1儿童节姐姐的特别节目" className="tit s-fc0" href="/dj?id=2061431753" data-res-id="2061431753" data-res-type="17" data-res-action="log" data-res-data="recommendclick|7|hot_server|user-playlist">
                    <i className="u-icn u-icn-53"></i>
                    【秋水小剧场哄睡】6.1儿童节姐姐的特别节目
                    </a>
                    </p>
                    </li>
                    </ul> */}


                    </div>
                    <div className="n-rcmd" id="personalRec"></div>
                    <div id="j-music-ad" className="n-clmnad" data-has-music-ad="0">
                    <div className="j-flag f-hide" id="auto-id-WJuqsgO5o7O1ybyy"></div>
                    <div className="f-hide j-flag">
                    <ins className="adsbydm" inner-prod="adbid" inner-width="689" inner-height="75" inner-src="https://iad.g.163.com/wa/ad?site=netease&amp;affiliate=music&amp;cat=homepage&amp;type=column689x75&amp;location=1" check-src="https://iad.g.163.com/wa/ad_check?site=netease&amp;affiliate=music&amp;cat=homepage&amp;type=column689x75&amp;location=1"></ins>
                    </div>
                    </div>


                    {/* <div className="n-new">
                    <div className="v-hd2">
                    <a href="/discover/album/" className="tit f-ff2 f-tdn">新碟上架</a>
                    <span className="more"><a href="/discover/album/" className="s-fc3">更多</a><i className="cor s-bg s-bg-6">&nbsp;</i></span>
                    </div>
                    <div className="n-disk">

                    <div className="inner" id="album-roller">
                    <a hidefocus="true" href="#" className="click-flag pre s-bg s-bg-7 f-tdn">&nbsp;</a>
                    <div className="roll f-pr">
                    <ul className="f-cb roller-flag">
                    <li>
                    <div className="u-cover u-cover-alb1">
                    <img className="j-img" data-src="http://p3.music.126.net/FUPDFVpUDiattFrRdULIbw==/109951164111319845.jpg?param=100y100" />
                    <a title="Never Really Over" href="/album?id=79513603" className="msk"></a>
                    <a href="javascript:;" className="icon-play f-alpha f-fr" title="播放" data-res-type="19" data-res-id="79513603" data-res-action="play"></a>
                    </div>
                    <p className="f-thide"><a title="Never Really Over" href="/album?id=79513603" className="s-fc0 tit">Never Really Over</a></p>
                    <p className="tit f-thide" title="Katy Perry">
                    <a className="s-fc3" href="/artist?id=62888">Katy Perry</a>
                    </p></li>
                    <li>
                    <div className="u-cover u-cover-alb1">
                    <img className="j-img" data-src="http://p4.music.126.net/8N3IrtEEupueYo1rkY-NNw==/109951164105788682.jpg?param=100y100" />
                    <a title="BlackACE" href="/album?id=79433669" className="msk"></a>
                    <a href="javascript:;" className="icon-play f-alpha f-fr" title="播放" data-res-type="19" data-res-id="79433669" data-res-action="play"></a>
                    </div>
                    <p className="f-thide"><a title="BlackACE" href="/album?id=79433669" className="s-fc0 tit">BlackACE</a></p>
                    <p className="tit f-thide" title="BlackACE">
                    <a className="s-fc3" href="/artist?id=32357582">BlackACE</a>
                    </p></li>
                    <li>
                    <div className="u-cover u-cover-alb1">
                    <img className="j-img" data-src="http://p4.music.126.net/qXoj3GTwWWtDDETq72oovQ==/109951164107576105.jpg?param=100y100" />
                    <a title="你曾是少年" href="/album?id=79466941" className="msk"></a>
                    <a href="javascript:;" className="icon-play f-alpha f-fr" title="播放" data-res-type="19" data-res-id="79466941" data-res-action="play"></a>
                    </div>
                    <p className="f-thide"><a title="你曾是少年" href="/album?id=79466941" className="s-fc0 tit">你曾是少年</a></p>
                    <p className="tit f-thide" title="焦迈奇">
                    <a className="s-fc3" href="/artist?id=12084229">焦迈奇</a>
                    </p></li>
                    <li>
                    <div className="u-cover u-cover-alb1">
                    <img className="j-img" data-src="http://p4.music.126.net/nD3D-XDHKsCcbTVVFpjAGw==/109951164085483585.jpg?param=100y100" />
                    <a title="B:COMPLETE" href="/album?id=79245849" className="msk"></a>
                    <a href="javascript:;" className="icon-play f-alpha f-fr" title="播放" data-res-type="19" data-res-id="79245849" data-res-action="play"></a>
                    </div>
                    <p className="f-thide"><a title="B:COMPLETE" href="/album?id=79245849" className="s-fc0 tit">B:COMPLETE</a></p>
                    <p className="tit f-thide" title="AB6IX">
                    <a className="s-fc3" href="/artist?id=31809277">AB6IX</a>
                    </p></li>
                    <li>
                    <div className="u-cover u-cover-alb1">
                    <img className="j-img" data-src="http://p4.music.126.net/VLNEsftixpNC3vT-j90u9A==/109951164096112276.jpg?param=100y100" />
                    <a title="CHA CHA CHA" href="/album?id=79371395" className="msk"></a>
                    <a href="javascript:;" className="icon-play f-alpha f-fr" title="播放" data-res-type="19" data-res-id="79371395" data-res-action="play"></a>
                    </div>
                    <p className="f-thide"><a title="CHA CHA CHA" href="/album?id=79371395" className="s-fc0 tit">CHA CHA CHA</a></p>
                    <p className="tit f-thide" title="新风暴">
                    <a className="s-fc3" href="/artist?id=32277292">新风暴</a>
                    </p></li>
                    </ul>
                    <ul className="f-cb roller-flag">
                    <li>
                    <div className="u-cover u-cover-alb1">
                    <img className="j-img" data-src="http://p3.music.126.net/uEZTdKWoHctIQ9O81WCxoA==/109951164087369428.jpg?param=100y100" />
                    <a title="Lil Ghost 2.0" href="/album?id=79256820" className="msk"></a>
                    <a href="javascript:;" className="icon-play f-alpha f-fr" title="播放" data-res-type="19" data-res-id="79256820" data-res-action="play"></a>
                    </div>
                    <p className="f-thide"><a title="Lil Ghost 2.0" href="/album?id=79256820" className="s-fc0 tit">Lil Ghost 2.0</a></p>
                    <p className="tit f-thide" title="Lil Ghost小鬼">
                    <a className="s-fc3" href="/artist?id=12493781">Lil Ghost小鬼</a>
                    </p></li>
                    <li>
                    <div className="u-cover u-cover-alb1">
                    <img className="j-img" data-src="http://p3.music.126.net/IfcW6N5vKzF8AyD40esCiw==/109951164079562852.jpg?param=100y100" />
                    <a title="Lovebird (Remix)" href="/album?id=79164184" className="msk"></a>
                    <a href="javascript:;" className="icon-play f-alpha f-fr" title="播放" data-res-type="19" data-res-id="79164184" data-res-action="play"></a>
                    </div>
                    <p className="f-thide"><a title="Lovebird (Remix)" href="/album?id=79164184" className="s-fc0 tit">Lovebird (Remix)</a></p>
                    <p className="tit f-thide" title="Far East Movement / 张艺兴">
                    <a className="s-fc3" href="/artist?id=92526">Far East Movement</a>
                    &nbsp;/&nbsp;
                    <a className="s-fc3" href="/artist?id=1047015">张艺兴</a>
                    </p></li>
                    <li>
                    <div className="u-cover u-cover-alb1">
                    <img className="j-img" data-src="http://p4.music.126.net/ibXSsyVeMggh99R31ZML1Q==/109951164105938094.jpg?param=100y100" />
                    <a title="That Girl (CORSAK Remix)" href="/album?id=79444828" className="msk"></a>
                    <a href="javascript:;" className="icon-play f-alpha f-fr" title="播放" data-res-type="19" data-res-id="79444828" data-res-action="play"></a>
                    </div>
                    <p className="f-thide"><a title="That Girl (CORSAK Remix)" href="/album?id=79444828" className="s-fc0 tit">That Girl (CORSAK Remix)</a></p>
                    <p className="tit f-thide" title="Olly Murs / 摩登兄弟 / CORSAK">
                    <a className="s-fc3" href="/artist?id=41034">Olly Murs</a>
                    &nbsp;/&nbsp;
                    <a className="s-fc3" href="/artist?id=1094010">摩登兄弟</a>
                    &nbsp;/&nbsp;
                    <a className="s-fc3" href="/artist?id=28083351">CORSAK</a>
                    </p></li>
                    <li>
                    <div className="u-cover u-cover-alb1">
                    <img className="j-img" data-src="http://p3.music.126.net/jBpXM2nlImE7GF7AgBkktQ==/109951164063410613.jpg?param=100y100" />
                    <a title="I Don't Care" href="/album?id=79012635" className="msk"></a>
                    <a href="javascript:;" className="icon-play f-alpha f-fr" title="播放" data-res-type="19" data-res-id="79012635" data-res-action="play"></a>
                    </div>
                    <p className="f-thide"><a title="I Don't Care" href="/album?id=79012635" className="s-fc0 tit">I Don't Care</a></p>
                    <p className="tit f-thide" title="Ed Sheeran / Justin Bieber">
                    <a className="s-fc3" href="/artist?id=33184">Ed Sheeran</a>
                    &nbsp;/&nbsp;
                    <a className="s-fc3" href="/artist?id=35531">Justin Bieber</a>
                    </p></li>
                    <li>
                    <div className="u-cover u-cover-alb1">
                    <img className="j-img" data-src="http://p4.music.126.net/NgIotppbv3RGGi9FpslMUQ==/109951164092096675.jpg?param=100y100" />
                    <a title="残酷月光" href="/album?id=79317683" className="msk"></a>
                    <a href="javascript:;" className="icon-play f-alpha f-fr" title="播放" data-res-type="19" data-res-id="79317683" data-res-action="play"></a>
                    </div>
                    <p className="f-thide"><a title="残酷月光" href="/album?id=79317683" className="s-fc0 tit">残酷月光</a></p>
                    <p className="tit f-thide" title="费启鸣">
                    <a className="s-fc3" href="/artist?id=30035218">费启鸣</a>
                    </p></li>
                    </ul>
                    <ul className="f-cb roller-flag">
                    <li>
                    <div className="u-cover u-cover-alb1">
                    <img className="j-img" data-src="http://p3.music.126.net/FUPDFVpUDiattFrRdULIbw==/109951164111319845.jpg?param=100y100" />
                    <a title="Never Really Over" href="/album?id=79513603" className="msk"></a>
                    <a href="javascript:;" className="icon-play f-alpha f-fr" title="播放" data-res-type="19" data-res-id="79513603" data-res-action="play"></a>
                    </div>
                    <p className="f-thide"><a title="Never Really Over" href="/album?id=79513603" className="s-fc0 tit">Never Really Over</a></p>
                    <p className="tit f-thide" title="Katy Perry">
                    <a className="s-fc3" href="/artist?id=62888">Katy Perry</a>
                    </p></li>
                    <li>
                    <div className="u-cover u-cover-alb1">
                    <img className="j-img" data-src="http://p4.music.126.net/8N3IrtEEupueYo1rkY-NNw==/109951164105788682.jpg?param=100y100" />
                    <a title="BlackACE" href="/album?id=79433669" className="msk"></a>
                    <a href="javascript:;" className="icon-play f-alpha f-fr" title="播放" data-res-type="19" data-res-id="79433669" data-res-action="play"></a>
                    </div>
                    <p className="f-thide"><a title="BlackACE" href="/album?id=79433669" className="s-fc0 tit">BlackACE</a></p>
                    <p className="tit f-thide" title="BlackACE">
                    <a className="s-fc3" href="/artist?id=32357582">BlackACE</a>
                    </p></li>
                    <li>
                    <div className="u-cover u-cover-alb1">
                    <img className="j-img" data-src="http://p4.music.126.net/qXoj3GTwWWtDDETq72oovQ==/109951164107576105.jpg?param=100y100" />
                    <a title="你曾是少年" href="/album?id=79466941" className="msk"></a>
                    <a href="javascript:;" className="icon-play f-alpha f-fr" title="播放" data-res-type="19" data-res-id="79466941" data-res-action="play"></a>
                    </div>
                    <p className="f-thide"><a title="你曾是少年" href="/album?id=79466941" className="s-fc0 tit">你曾是少年</a></p>
                    <p className="tit f-thide" title="焦迈奇">
                    <a className="s-fc3" href="/artist?id=12084229">焦迈奇</a>
                    </p></li>
                    <li>
                    <div className="u-cover u-cover-alb1">
                    <img className="j-img" data-src="http://p4.music.126.net/nD3D-XDHKsCcbTVVFpjAGw==/109951164085483585.jpg?param=100y100" />
                    <a title="B:COMPLETE" href="/album?id=79245849" className="msk"></a>
                    <a href="javascript:;" className="icon-play f-alpha f-fr" title="播放" data-res-type="19" data-res-id="79245849" data-res-action="play"></a>
                    </div>
                    <p className="f-thide"><a title="B:COMPLETE" href="/album?id=79245849" className="s-fc0 tit">B:COMPLETE</a></p>
                    <p className="tit f-thide" title="AB6IX">
                    <a className="s-fc3" href="/artist?id=31809277">AB6IX</a>
                    </p></li>
                    <li>
                    <div className="u-cover u-cover-alb1">
                    <img className="j-img" data-src="http://p4.music.126.net/VLNEsftixpNC3vT-j90u9A==/109951164096112276.jpg?param=100y100" />
                    <a title="CHA CHA CHA" href="/album?id=79371395" className="msk"></a>
                    <a href="javascript:;" className="icon-play f-alpha f-fr" title="播放" data-res-type="19" data-res-id="79371395" data-res-action="play"></a>
                    </div>
                    <p className="f-thide"><a title="CHA CHA CHA" href="/album?id=79371395" className="s-fc0 tit">CHA CHA CHA</a></p>
                    <p className="tit f-thide" title="新风暴">
                    <a className="s-fc3" href="/artist?id=32277292">新风暴</a>
                    </p></li>
                    </ul>
                    <ul className="f-cb roller-flag">
                    <li>
                    <div className="u-cover u-cover-alb1">
                    <img className="j-img" data-src="http://p3.music.126.net/uEZTdKWoHctIQ9O81WCxoA==/109951164087369428.jpg?param=100y100" />
                    <a title="Lil Ghost 2.0" href="/album?id=79256820" className="msk"></a>
                    <a href="javascript:;" className="icon-play f-alpha f-fr" title="播放" data-res-type="19" data-res-id="79256820" data-res-action="play"></a>
                    </div>
                    <p className="f-thide"><a title="Lil Ghost 2.0" href="/album?id=79256820" className="s-fc0 tit">Lil Ghost 2.0</a></p>
                    <p className="tit f-thide" title="Lil Ghost小鬼">
                    <a className="s-fc3" href="/artist?id=12493781">Lil Ghost小鬼</a>
                    </p></li>
                    <li>
                    <div className="u-cover u-cover-alb1">
                    <img className="j-img" data-src="http://p3.music.126.net/IfcW6N5vKzF8AyD40esCiw==/109951164079562852.jpg?param=100y100" />
                    <a title="Lovebird (Remix)" href="/album?id=79164184" className="msk"></a>
                    <a href="javascript:;" className="icon-play f-alpha f-fr" title="播放" data-res-type="19" data-res-id="79164184" data-res-action="play"></a>
                    </div>
                    <p className="f-thide"><a title="Lovebird (Remix)" href="/album?id=79164184" className="s-fc0 tit">Lovebird (Remix)</a></p>
                    <p className="tit f-thide" title="Far East Movement / 张艺兴">
                    <a className="s-fc3" href="/artist?id=92526">Far East Movement</a>
                    &nbsp;/&nbsp;
                    <a className="s-fc3" href="/artist?id=1047015">张艺兴</a>
                    </p></li>
                    <li>
                    <div className="u-cover u-cover-alb1">
                    <img className="j-img" data-src="http://p4.music.126.net/ibXSsyVeMggh99R31ZML1Q==/109951164105938094.jpg?param=100y100" />
                    <a title="That Girl (CORSAK Remix)" href="/album?id=79444828" className="msk"></a>
                    <a href="javascript:;" className="icon-play f-alpha f-fr" title="播放" data-res-type="19" data-res-id="79444828" data-res-action="play"></a>
                    </div>
                    <p className="f-thide"><a title="That Girl (CORSAK Remix)" href="/album?id=79444828" className="s-fc0 tit">That Girl (CORSAK Remix)</a></p>
                    <p className="tit f-thide" title="Olly Murs / 摩登兄弟 / CORSAK">
                    <a className="s-fc3" href="/artist?id=41034">Olly Murs</a>
                    &nbsp;/&nbsp;
                    <a className="s-fc3" href="/artist?id=1094010">摩登兄弟</a>
                    &nbsp;/&nbsp;
                    <a className="s-fc3" href="/artist?id=28083351">CORSAK</a>
                    </p></li>
                    <li>
                    <div className="u-cover u-cover-alb1">
                    <img className="j-img" data-src="http://p3.music.126.net/jBpXM2nlImE7GF7AgBkktQ==/109951164063410613.jpg?param=100y100" />
                    <a title="I Don't Care" href="/album?id=79012635" className="msk"></a>
                    <a href="javascript:;" className="icon-play f-alpha f-fr" title="播放" data-res-type="19" data-res-id="79012635" data-res-action="play"></a>
                    </div>
                    <p className="f-thide"><a title="I Don't Care" href="/album?id=79012635" className="s-fc0 tit">I Don't Care</a></p>
                    <p className="tit f-thide" title="Ed Sheeran / Justin Bieber">
                    <a className="s-fc3" href="/artist?id=33184">Ed Sheeran</a>
                    &nbsp;/&nbsp;
                    <a className="s-fc3" href="/artist?id=35531">Justin Bieber</a>
                    </p></li>
                    <li>
                    <div className="u-cover u-cover-alb1">
                    <img className="j-img" data-src="http://p4.music.126.net/NgIotppbv3RGGi9FpslMUQ==/109951164092096675.jpg?param=100y100" />
                    <a title="残酷月光" href="/album?id=79317683" className="msk"></a>
                    <a href="javascript:;" className="icon-play f-alpha f-fr" title="播放" data-res-type="19" data-res-id="79317683" data-res-action="play"></a>
                    </div>
                    <p className="f-thide"><a title="残酷月光" href="/album?id=79317683" className="s-fc0 tit">残酷月光</a></p>
                    <p className="tit f-thide" title="费启鸣">
                    <a className="s-fc3" href="/artist?id=30035218">费启鸣</a>
                    </p></li>
                    </ul>
                    </div>
                    <a hidefocus="true" href="#" className="click-flag nxt s-bg s-bg-8 f-tdn">&nbsp;</a>
                    </div>


                    </div>
                    </div> */}


                    <div className="n-bill">
                    <div className="v-hd2">
                    <a href="/discover/toplist" className="tit f-ff2 f-tdn">榜单</a>
                    <span className="more"><a href="/discover/toplist" className="s-fc3">更多</a><i className="cor s-bg s-bg-6">&nbsp;</i></span>
                    </div>
                    <div className="n-bilst" id="top-flag">
                    <dl className="blk ">
                    <dt className="top">
                    <div className="cver u-cover u-cover-4">
                    <img className="j-img" src="http://p3.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=100y100" />
                    <a href="/discover/toplist?id=19723756" className="msk" title="云音乐飙升榜"></a>
                    </div>
                    <div className="tit">
                    <a href="/discover/toplist?id=19723756" title="云音乐飙升榜"><h3 className="f-fs1 f-thide">云音乐飙升榜</h3></a>
                    <div className="btn">
                    <a href="javascript:;" className="s-bg s-bg-9 f-tdn" hidefocus="true" title="播放" data-res-type="13" data-res-id="19723756" data-res-action="play" data-res-from="31" data-res-data="19723756">播放</a>
                    <a href="javascript:;" hidefocus="true" className="s-bg s-bg-10 f-tdn subscribe-flag " data-plid="19723756" title="收藏">收藏</a>
                    </div>
                    </div>
                    </dt>
                    <dd>
                    <ol>
                    <li>
                    <span className="no no-top">1</span>
                    <a href="/song?id=1368711349" className="nm s-fc0 f-thide" title="想">想</a>
                    <div className="oper">
                    <a href="#" className="s-bg s-bg-11" title="播放" hidefocus="true" data-res-type="18" data-res-id="1368711349" data-res-action="play" data-res-from="31" data-res-data="19723756"></a>
                    <a href="#" className="u-icn u-icn-81" title="添加到播放列表" hidefocus="true" data-res-type="18" data-res-id="1368711349" data-res-action="addto" data-res-from="31" data-res-data="19723756"></a>
                    <a href="#" className="s-bg s-bg-12" title="收藏" hidefocus="true" data-res-level="1000" data-res-fee="8" data-res-type="18" data-res-id="1368711349" data-res-action="subscribe"></a>
                    </div>
                    </li>
                    <li>
                    <span className="no no-top">2</span>
                    <a href="/song?id=1347181386" className="nm s-fc0 f-thide" title="公子向北走">公子向北走</a>
                    <div className="oper">
                    <a href="#" className="s-bg s-bg-11" title="播放" hidefocus="true" data-res-type="18" data-res-id="1347181386" data-res-action="play" data-res-from="31" data-res-data="19723756"></a>
                    <a href="#" className="u-icn u-icn-81" title="添加到播放列表" hidefocus="true" data-res-type="18" data-res-id="1347181386" data-res-action="addto" data-res-from="31" data-res-data="19723756"></a>
                    <a href="#" className="s-bg s-bg-12" title="收藏" hidefocus="true" data-res-level="0" data-res-fee="8" data-res-type="18" data-res-id="1347181386" data-res-action="subscribe"></a>
                    </div>
                    </li>
                    <li>
                    <span className="no no-top">3</span>
                    <a href="/song?id=1363575028" className="nm s-fc0 f-thide" title="自言自语">自言自语</a>
                    <div className="oper">
                    <a href="#" className="s-bg s-bg-11" title="播放" hidefocus="true" data-res-type="18" data-res-id="1363575028" data-res-action="play" data-res-from="31" data-res-data="19723756"></a>
                    <a href="#" className="u-icn u-icn-81" title="添加到播放列表" hidefocus="true" data-res-type="18" data-res-id="1363575028" data-res-action="addto" data-res-from="31" data-res-data="19723756"></a>
                    <a href="#" className="s-bg s-bg-12" title="收藏" hidefocus="true" data-res-level="0" data-res-fee="8" data-res-type="18" data-res-id="1363575028" data-res-action="subscribe"></a>
                    </div>
                    </li>
                    <li>
                    <span className="no">4</span>
                    <a href="/song?id=1368756029" className="nm s-fc0 f-thide" title="好想我是她">好想我是她</a>
                    <div className="oper">
                    <a href="#" className="s-bg s-bg-11" title="播放" hidefocus="true" data-res-type="18" data-res-id="1368756029" data-res-action="play" data-res-from="31" data-res-data="19723756"></a>
                    <a href="#" className="u-icn u-icn-81" title="添加到播放列表" hidefocus="true" data-res-type="18" data-res-id="1368756029" data-res-action="addto" data-res-from="31" data-res-data="19723756"></a>
                    <a href="#" className="s-bg s-bg-12" title="收藏" hidefocus="true" data-res-level="0" data-res-fee="8" data-res-type="18" data-res-id="1368756029" data-res-action="subscribe"></a>
                    </div>
                    </li>
                    <li>
                    <span className="no">5</span>
                    <a href="/song?id=1368327462" className="nm s-fc0 f-thide" title="耿">耿</a>
                    <div className="oper">
                    <a href="#" className="s-bg s-bg-11" title="播放" hidefocus="true" data-res-type="18" data-res-id="1368327462" data-res-action="play" data-res-from="31" data-res-data="19723756"></a>
                    <a href="#" className="u-icn u-icn-81" title="添加到播放列表" hidefocus="true" data-res-type="18" data-res-id="1368327462" data-res-action="addto" data-res-from="31" data-res-data="19723756"></a>
                    <a href="#" className="s-bg s-bg-12" title="收藏" hidefocus="true" data-res-level="0" data-res-fee="8" data-res-type="18" data-res-id="1368327462" data-res-action="subscribe"></a>
                    </div>
                    </li>
                    <li>
                    <span className="no">6</span>
                    <a href="/song?id=554241732" className="nm s-fc0 f-thide" title="我的名字">我的名字</a>
                    <div className="oper">
                    <a href="#" className="s-bg s-bg-11" title="播放" hidefocus="true" data-res-type="18" data-res-id="554241732" data-res-action="play" data-res-from="31" data-res-data="19723756"></a>
                    <a href="#" className="u-icn u-icn-81" title="添加到播放列表" hidefocus="true" data-res-type="18" data-res-id="554241732" data-res-action="addto" data-res-from="31" data-res-data="19723756"></a>
                    <a href="#" className="s-bg s-bg-12" title="收藏" hidefocus="true" data-res-level="0" data-res-fee="8" data-res-type="18" data-res-id="554241732" data-res-action="subscribe"></a>
                    </div>
                    </li>
                    <li>
                    <span className="no">7</span>
                    <a href="/song?id=1368712158" className="nm s-fc0 f-thide" title="我会怀念此刻的我们">我会怀念此刻的我们</a>
                    <div className="oper">
                    <a href="#" className="s-bg s-bg-11" title="播放" hidefocus="true" data-res-type="18" data-res-id="1368712158" data-res-action="play" data-res-from="31" data-res-data="19723756"></a>
                    <a href="#" className="u-icn u-icn-81" title="添加到播放列表" hidefocus="true" data-res-type="18" data-res-id="1368712158" data-res-action="addto" data-res-from="31" data-res-data="19723756"></a>
                    <a href="#" className="s-bg s-bg-12" title="收藏" hidefocus="true" data-res-level="0" data-res-fee="8" data-res-type="18" data-res-id="1368712158" data-res-action="subscribe"></a>
                    </div>
                    </li>
                    <li>
                    <span className="no">8</span>
                    <a href="/song?id=1365238185" className="nm s-fc0 f-thide" title="Love is Love">Love is Love</a>
                    <div className="oper">
                    <a href="#" className="s-bg s-bg-11" title="播放" hidefocus="true" data-res-type="18" data-res-id="1365238185" data-res-action="play" data-res-from="31" data-res-data="19723756"></a>
                    <a href="#" className="u-icn u-icn-81" title="添加到播放列表" hidefocus="true" data-res-type="18" data-res-id="1365238185" data-res-action="addto" data-res-from="31" data-res-data="19723756"></a>
                    <a href="#" className="s-bg s-bg-12" title="收藏" hidefocus="true" data-res-level="0" data-res-fee="8" data-res-type="18" data-res-id="1365238185" data-res-action="subscribe"></a>
                    </div>
                    </li>
                    <li>
                    <span className="no">9</span>
                    <a href="/song?id=1353427383" className="nm s-fc0 f-thide" title="失重">失重</a>
                    <div className="oper">
                    <a href="#" className="s-bg s-bg-11" title="播放" hidefocus="true" data-res-type="18" data-res-id="1353427383" data-res-action="play" data-res-from="31" data-res-data="19723756"></a>
                    <a href="#" className="u-icn u-icn-81" title="添加到播放列表" hidefocus="true" data-res-type="18" data-res-id="1353427383" data-res-action="addto" data-res-from="31" data-res-data="19723756"></a>
                    <a href="#" className="s-bg s-bg-12" title="收藏" hidefocus="true" data-res-level="0" data-res-fee="8" data-res-type="18" data-res-id="1353427383" data-res-action="subscribe"></a>
                    </div>
                    </li>
                    <li>
                    <span className="no">10</span>
                    <a href="/song?id=1359356908" className="nm s-fc0 f-thide" title="晚安">晚安</a>
                    <div className="oper">
                    <a href="#" className="s-bg s-bg-11" title="播放" hidefocus="true" data-res-type="18" data-res-id="1359356908" data-res-action="play" data-res-from="31" data-res-data="19723756"></a>
                    <a href="#" className="u-icn u-icn-81" title="添加到播放列表" hidefocus="true" data-res-type="18" data-res-id="1359356908" data-res-action="addto" data-res-from="31" data-res-data="19723756"></a>
                    <a href="#" className="s-bg s-bg-12" title="收藏" hidefocus="true" data-res-level="0" data-res-fee="8" data-res-type="18" data-res-id="1359356908" data-res-action="subscribe"></a>
                    </div>
                    </li>
                    </ol>
                    <div className="more"><a href="/discover/toplist?id=19723756" className="s-fc0">查看全部&gt;</a></div>
                    </dd>
                    </dl>
                    <dl className="blk ">
                    <dt className="top">
                    <div className="cver u-cover u-cover-4">
                    <img className="j-img" src="http://p4.music.126.net/N2HO5xfYEqyQ8q6oxCw8IQ==/18713687906568048.jpg?param=100y100" />
                    <a href="/discover/toplist?id=3779629" className="msk" title="云音乐新歌榜"></a>
                    </div>
                    <div className="tit">
                    <a href="/discover/toplist?id=3779629" title="云音乐新歌榜"><h3 className="f-fs1 f-thide">云音乐新歌榜</h3></a>
                    <div className="btn">
                    <a href="javascript:;" className="s-bg s-bg-9 f-tdn" hidefocus="true" title="播放" data-res-type="13" data-res-id="3779629" data-res-action="play" data-res-from="31" data-res-data="3779629">播放</a>
                    <a href="javascript:;" hidefocus="true" className="s-bg s-bg-10 f-tdn subscribe-flag " data-plid="3779629" title="收藏">收藏</a>
                    </div>
                    </div>
                    </dt>
                    <dd>
                    <ol>
                    <li>
                    <span className="no no-top">1</span>
                    <a href="/song?id=1367368790" className="nm s-fc0 f-thide" title="情深深雨濛濛">情深深雨濛濛</a>
                    <div className="oper">
                    <a href="#" className="s-bg s-bg-11" title="播放" hidefocus="true" data-res-type="18" data-res-id="1367368790" data-res-action="play" data-res-from="31" data-res-data="3779629"></a>
                    <a href="#" className="u-icn u-icn-81" title="添加到播放列表" hidefocus="true" data-res-type="18" data-res-id="1367368790" data-res-action="addto" data-res-from="31" data-res-data="3779629"></a>
                    <a href="#" className="s-bg s-bg-12" title="收藏" hidefocus="true" data-res-level="0" data-res-fee="8" data-res-type="18" data-res-id="1367368790" data-res-action="subscribe"></a>
                    </div>
                    </li>
                    <li>
                    <span className="no no-top">2</span>
                    <a href="/song?id=1368371706" className="nm s-fc0 f-thide" title="你曾是少年">你曾是少年</a>
                    <div className="oper">
                    <a href="#" className="s-bg s-bg-11" title="播放" hidefocus="true" data-res-type="18" data-res-id="1368371706" data-res-action="play" data-res-from="31" data-res-data="3779629"></a>
                    <a href="#" className="u-icn u-icn-81" title="添加到播放列表" hidefocus="true" data-res-type="18" data-res-id="1368371706" data-res-action="addto" data-res-from="31" data-res-data="3779629"></a>
                    <a href="#" className="s-bg s-bg-12" title="收藏" hidefocus="true" data-res-level="0" data-res-fee="8" data-res-type="18" data-res-id="1368371706" data-res-action="subscribe"></a>
                    </div>
                    </li>
                    <li>
                    <span className="no no-top">3</span>
                    <a href="/song?id=1367452194" className="nm s-fc0 f-thide" title="我的一个道姑朋友">我的一个道姑朋友</a>
                    <div className="oper">
                    <a href="#" className="s-bg s-bg-11" title="播放" hidefocus="true" data-res-type="18" data-res-id="1367452194" data-res-action="play" data-res-from="31" data-res-data="3779629"></a>
                    <a href="#" className="u-icn u-icn-81" title="添加到播放列表" hidefocus="true" data-res-type="18" data-res-id="1367452194" data-res-action="addto" data-res-from="31" data-res-data="3779629"></a>
                    <a href="#" className="s-bg s-bg-12" title="收藏" hidefocus="true" data-res-level="0" data-res-fee="8" data-res-type="18" data-res-id="1367452194" data-res-action="subscribe"></a>
                    </div>
                    </li>
                    <li>
                    <span className="no">4</span>
                    <a href="/song?id=1365221826" className="nm s-fc0 f-thide" title="四块五">四块五</a>
                    <div className="oper">
                    <a href="#" className="s-bg s-bg-11" title="播放" hidefocus="true" data-res-type="18" data-res-id="1365221826" data-res-action="play" data-res-from="31" data-res-data="3779629"></a>
                    <a href="#" className="u-icn u-icn-81" title="添加到播放列表" hidefocus="true" data-res-type="18" data-res-id="1365221826" data-res-action="addto" data-res-from="31" data-res-data="3779629"></a>
                    <a href="#" className="s-bg s-bg-12" title="收藏" hidefocus="true" data-res-level="0" data-res-fee="8" data-res-type="18" data-res-id="1365221826" data-res-action="subscribe"></a>
                    </div>
                    </li>
                    <li>
                    <span className="no">5</span>
                    <a href="/song?id=1365898499" className="nm s-fc0 f-thide" title="失眠飞行">失眠飞行</a>
                    <div className="oper">
                    <a href="#" className="s-bg s-bg-11" title="播放" hidefocus="true" data-res-type="18" data-res-id="1365898499" data-res-action="play" data-res-from="31" data-res-data="3779629"></a>
                    <a href="#" className="u-icn u-icn-81" title="添加到播放列表" hidefocus="true" data-res-type="18" data-res-id="1365898499" data-res-action="addto" data-res-from="31" data-res-data="3779629"></a>
                    <a href="#" className="s-bg s-bg-12" title="收藏" hidefocus="true" data-res-level="0" data-res-fee="8" data-res-type="18" data-res-id="1365898499" data-res-action="subscribe"></a>
                    </div>
                    </li>
                    <li>
                    <span className="no">6</span>
                    <a href="/song?id=1362247767" className="nm s-fc0 f-thide" title="别叫我达芬奇">别叫我达芬奇</a>
                    <div className="oper">
                    <a href="#" className="s-bg s-bg-11" title="播放" hidefocus="true" data-res-type="18" data-res-id="1362247767" data-res-action="play" data-res-from="31" data-res-data="3779629"></a>
                    <a href="#" className="u-icn u-icn-81" title="添加到播放列表" hidefocus="true" data-res-type="18" data-res-id="1362247767" data-res-action="addto" data-res-from="31" data-res-data="3779629"></a>
                    <a href="#" className="s-bg s-bg-12" title="收藏" hidefocus="true" data-res-level="0" data-res-fee="8" data-res-type="18" data-res-id="1362247767" data-res-action="subscribe"></a>
                    </div>
                    </li>
                    <li>
                    <span className="no">7</span>
                    <a href="/song?id=1356350562" className="nm s-fc0 f-thide" title="这一生关于你的风景">这一生关于你的风景</a>
                    <div className="oper">
                    <a href="#" className="s-bg s-bg-11" title="播放" hidefocus="true" data-res-type="18" data-res-id="1356350562" data-res-action="play" data-res-from="31" data-res-data="3779629"></a>
                    <a href="#" className="u-icn u-icn-81" title="添加到播放列表" hidefocus="true" data-res-type="18" data-res-id="1356350562" data-res-action="addto" data-res-from="31" data-res-data="3779629"></a>
                    <a href="#" className="s-bg s-bg-12" title="收藏" hidefocus="true" data-res-level="0" data-res-fee="8" data-res-type="18" data-res-id="1356350562" data-res-action="subscribe"></a>
                    </div>
                    </li>
                    <li>
                    <span className="no">8</span>
                    <a href="/song?id=1365393542" className="nm s-fc0 f-thide" title="孤身">孤身</a>
                    <div className="oper">
                    <a href="#" className="s-bg s-bg-11" title="播放" hidefocus="true" data-res-type="18" data-res-id="1365393542" data-res-action="play" data-res-from="31" data-res-data="3779629"></a>
                    <a href="#" className="u-icn u-icn-81" title="添加到播放列表" hidefocus="true" data-res-type="18" data-res-id="1365393542" data-res-action="addto" data-res-from="31" data-res-data="3779629"></a>
                    <a href="#" className="s-bg s-bg-12" title="收藏" hidefocus="true" data-res-level="0" data-res-fee="8" data-res-type="18" data-res-id="1365393542" data-res-action="subscribe"></a>
                    </div>
                    </li>
                    <li>
                    <span className="no">9</span>
                    <a href="/song?id=1366957080" className="nm s-fc0 f-thide" title="残酷月光">残酷月光</a>
                    <div className="oper">
                    <a href="#" className="s-bg s-bg-11" title="播放" hidefocus="true" data-res-type="18" data-res-id="1366957080" data-res-action="play" data-res-from="31" data-res-data="3779629"></a>
                    <a href="#" className="u-icn u-icn-81" title="添加到播放列表" hidefocus="true" data-res-type="18" data-res-id="1366957080" data-res-action="addto" data-res-from="31" data-res-data="3779629"></a>
                    <a href="#" className="s-bg s-bg-12" title="收藏" hidefocus="true" data-res-level="0" data-res-fee="8" data-res-type="18" data-res-id="1366957080" data-res-action="subscribe"></a>
                    </div>
                    </li>
                    <li>
                    <span className="no">10</span>
                    <a href="/song?id=1368725399" className="nm s-fc0 f-thide" title="Never Really Over">Never Really Over</a>
                    <div className="oper">
                    <a href="#" className="s-bg s-bg-11" title="播放" hidefocus="true" data-res-type="18" data-res-id="1368725399" data-res-action="play" data-res-from="31" data-res-data="3779629"></a>
                    <a href="#" className="u-icn u-icn-81" title="添加到播放列表" hidefocus="true" data-res-type="18" data-res-id="1368725399" data-res-action="addto" data-res-from="31" data-res-data="3779629"></a>
                    <a href="#" className="s-bg s-bg-12" title="收藏" hidefocus="true" data-res-level="0" data-res-fee="8" data-res-type="18" data-res-id="1368725399" data-res-action="subscribe"></a>
                    </div>
                    </li>
                    </ol>
                    <div className="more"><a href="/discover/toplist?id=3779629" className="s-fc0">查看全部&gt;</a></div>
                    </dd>
                    </dl>
                    {/* <dl className="blk blk-1">
                    <dt className="top">
                    <div className="cver u-cover u-cover-4">
                    <img className="j-img" src="http://p4.music.126.net/sBzD11nforcuh1jdLSgX7g==/18740076185638788.jpg?param=100y100" />
                    <a href="/discover/toplist?id=2884035" className="msk" title="网易原创歌曲榜"></a>
                    </div>
                    <div className="tit">
                    <a href="/discover/toplist?id=2884035" title="网易原创歌曲榜"><h3 className="f-fs1 f-thide">网易原创歌曲榜</h3></a>
                    <div className="btn">
                    <a href="javascript:;" className="s-bg s-bg-9 f-tdn" hidefocus="true" title="播放" data-res-type="13" data-res-id="2884035" data-res-action="play" data-res-from="31" data-res-data="2884035">播放</a>
                    <a href="javascript:;" hidefocus="true" className="s-bg s-bg-10 f-tdn subscribe-flag " data-plid="2884035" title="收藏">收藏</a>
                    </div>
                    </div>
                    </dt>
                    <dd>
                    <ol>
                    <li onMouseOver="this.className='z-hvr'" onMouseOut="this.className=''">
                    <span className="no no-top">1</span>
                    <a href="/song?id=1365393542" className="nm s-fc0 f-thide" title="孤身">孤身</a>
                    <div className="oper">
                    <a href="#" className="s-bg s-bg-11" title="播放" hidefocus="true" data-res-type="18" data-res-id="1365393542" data-res-action="play" data-res-from="31" data-res-data="2884035"></a>
                    <a href="#" className="u-icn u-icn-81" title="添加到播放列表" hidefocus="true" data-res-type="18" data-res-id="1365393542" data-res-action="addto" data-res-from="31" data-res-data="2884035"></a>
                    <a href="#" className="s-bg s-bg-12" title="收藏" hidefocus="true" data-res-level="0" data-res-fee="8" data-res-type="18" data-res-id="1365393542" data-res-action="subscribe"></a>
                    </div>
                    </li>
                    <li onMouseOver="this.className='z-hvr'" onMouseOut="this.className=''">
                    <span className="no no-top">2</span>
                    <a href="/song?id=1365861342" className="nm s-fc0 f-thide" title="Fire Loop">Fire Loop</a>
                    <div className="oper">
                    <a href="#" className="s-bg s-bg-11" title="播放" hidefocus="true" data-res-type="18" data-res-id="1365861342" data-res-action="play" data-res-from="31" data-res-data="2884035"></a>
                    <a href="#" className="u-icn u-icn-81" title="添加到播放列表" hidefocus="true" data-res-type="18" data-res-id="1365861342" data-res-action="addto" data-res-from="31" data-res-data="2884035"></a>
                    <a href="#" className="s-bg s-bg-12" title="收藏" hidefocus="true" data-res-level="0" data-res-fee="8" data-res-type="18" data-res-id="1365861342" data-res-action="subscribe"></a>
                    </div>
                    </li>
                    <li onMouseOver="this.className='z-hvr'" onMouseOut="this.className=''">
                    <span className="no no-top">3</span>
                    <a href="/song?id=1367648100" className="nm s-fc0 f-thide" title="把这青春唱完">把这青春唱完</a>
                    <div className="oper">
                    <a href="#" className="s-bg s-bg-11" title="播放" hidefocus="true" data-res-type="18" data-res-id="1367648100" data-res-action="play" data-res-from="31" data-res-data="2884035"></a>
                    <a href="#" className="u-icn u-icn-81" title="添加到播放列表" hidefocus="true" data-res-type="18" data-res-id="1367648100" data-res-action="addto" data-res-from="31" data-res-data="2884035"></a>
                    <a href="#" className="s-bg s-bg-12" title="收藏" hidefocus="true" data-res-level="0" data-res-fee="8" data-res-type="18" data-res-id="1367648100" data-res-action="subscribe"></a>
                    </div>
                    </li>
                    <li onMouseOver="this.className='z-hvr'" onMouseOut="this.className=''">
                    <span className="no">4</span>
                    <a href="/song?id=1365695697" className="nm s-fc0 f-thide" title="金陵谣">金陵谣</a>
                    <div className="oper">
                    <a href="#" className="s-bg s-bg-11" title="播放" hidefocus="true" data-res-type="18" data-res-id="1365695697" data-res-action="play" data-res-from="31" data-res-data="2884035"></a>
                    <a href="#" className="u-icn u-icn-81" title="添加到播放列表" hidefocus="true" data-res-type="18" data-res-id="1365695697" data-res-action="addto" data-res-from="31" data-res-data="2884035"></a>
                    <a href="#" className="s-bg s-bg-12" title="收藏" hidefocus="true" data-res-level="0" data-res-fee="8" data-res-type="18" data-res-id="1365695697" data-res-action="subscribe"></a>
                    </div>
                    </li>
                    <li onMouseOver="this.className='z-hvr'" onMouseOut="this.className=''">
                    <span className="no">5</span>
                    <a href="/song?id=1367867672" className="nm s-fc0 f-thide" title="是红">是红</a>
                    <div className="oper">
                    <a href="#" className="s-bg s-bg-11" title="播放" hidefocus="true" data-res-type="18" data-res-id="1367867672" data-res-action="play" data-res-from="31" data-res-data="2884035"></a>
                    <a href="#" className="u-icn u-icn-81" title="添加到播放列表" hidefocus="true" data-res-type="18" data-res-id="1367867672" data-res-action="addto" data-res-from="31" data-res-data="2884035"></a>
                    <a href="#" className="s-bg s-bg-12" title="收藏" hidefocus="true" data-res-level="0" data-res-fee="8" data-res-type="18" data-res-id="1367867672" data-res-action="subscribe"></a>
                    </div>
                    </li>
                    <li onMouseOver="this.className='z-hvr'" onMouseOut="this.className=''">
                    <span className="no">6</span>
                    <a href="/song?id=1363561034" className="nm s-fc0 f-thide" title="附加题">附加题</a>
                    <div className="oper">
                    <a href="#" className="s-bg s-bg-11" title="播放" hidefocus="true" data-res-type="18" data-res-id="1363561034" data-res-action="play" data-res-from="31" data-res-data="2884035"></a>
                    <a href="#" className="u-icn u-icn-81" title="添加到播放列表" hidefocus="true" data-res-type="18" data-res-id="1363561034" data-res-action="addto" data-res-from="31" data-res-data="2884035"></a>
                    <a href="#" className="s-bg s-bg-12" title="收藏" hidefocus="true" data-res-level="0" data-res-fee="8" data-res-type="18" data-res-id="1363561034" data-res-action="subscribe"></a>
                    </div>
                    </li>
                    <li onMouseOver="this.className='z-hvr'" onMouseOut="this.className=''">
                    <span className="no">7</span>
                    <a href="/song?id=1368228293" className="nm s-fc0 f-thide" title="通往永恒的票难求">通往永恒的票难求</a>
                    <div className="oper">
                    <a href="#" className="s-bg s-bg-11" title="播放" hidefocus="true" data-res-type="18" data-res-id="1368228293" data-res-action="play" data-res-from="31" data-res-data="2884035"></a>
                    <a href="#" className="u-icn u-icn-81" title="添加到播放列表" hidefocus="true" data-res-type="18" data-res-id="1368228293" data-res-action="addto" data-res-from="31" data-res-data="2884035"></a>
                    <a href="#" className="s-bg s-bg-12" title="收藏" hidefocus="true" data-res-level="0" data-res-fee="8" data-res-type="18" data-res-id="1368228293" data-res-action="subscribe"></a>
                    </div>
                    </li>
                    <li onMouseOver="this.className='z-hvr'" onMouseOut="this.className=''">
                    <span className="no">8</span>
                    <a href="/song?id=1366774713" className="nm s-fc0 f-thide" title="算了">算了</a>
                    <div className="oper">
                    <a href="#" className="s-bg s-bg-11" title="播放" hidefocus="true" data-res-type="18" data-res-id="1366774713" data-res-action="play" data-res-from="31" data-res-data="2884035"></a>
                    <a href="#" className="u-icn u-icn-81" title="添加到播放列表" hidefocus="true" data-res-type="18" data-res-id="1366774713" data-res-action="addto" data-res-from="31" data-res-data="2884035"></a>
                    <a href="#" className="s-bg s-bg-12" title="收藏" hidefocus="true" data-res-level="0" data-res-fee="8" data-res-type="18" data-res-id="1366774713" data-res-action="subscribe"></a>
                    </div>
                    </li>
                    <li onMouseOver="this.className='z-hvr'" onMouseOut="this.className=''">
                    <span className="no">9</span>
                    <a href="/song?id=1367433319" className="nm s-fc0 f-thide" title="满天星">满天星</a>
                    <div className="oper">
                    <a href="#" className="s-bg s-bg-11" title="播放" hidefocus="true" data-res-type="18" data-res-id="1367433319" data-res-action="play" data-res-from="31" data-res-data="2884035"></a>
                    <a href="#" className="u-icn u-icn-81" title="添加到播放列表" hidefocus="true" data-res-type="18" data-res-id="1367433319" data-res-action="addto" data-res-from="31" data-res-data="2884035"></a>
                    <a href="#" className="s-bg s-bg-12" title="收藏" hidefocus="true" data-res-level="0" data-res-fee="8" data-res-type="18" data-res-id="1367433319" data-res-action="subscribe"></a>
                    </div>
                    </li>
                    <li onMouseOver="this.className='z-hvr'" onMouseOut="this.className=''">
                    <span className="no">10</span>
                    <a href="/song?id=1367452185" className="nm s-fc0 f-thide" title="我想直接爱你">我想直接爱你</a>
                    <div className="oper">
                    <a href="#" className="s-bg s-bg-11" title="播放" hidefocus="true" data-res-type="18" data-res-id="1367452185" data-res-action="play" data-res-from="31" data-res-data="2884035"></a>
                    <a href="#" className="u-icn u-icn-81" title="添加到播放列表" hidefocus="true" data-res-type="18" data-res-id="1367452185" data-res-action="addto" data-res-from="31" data-res-data="2884035"></a>
                    <a href="#" className="s-bg s-bg-12" title="收藏" hidefocus="true" data-res-level="0" data-res-fee="8" data-res-type="18" data-res-id="1367452185" data-res-action="subscribe"></a>
                    </div>
                    </li>
                    </ol>
                    <div className="more"><a href="/discover/toplist?id=2884035" className="s-fc0">查看全部&gt;</a></div>
                    </dd>
                    </dl> */}
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    <div className="g-sd1">
                    <div className="n-myinfo n-myinfo-1 s-bg s-bg-1">
                    {/* <p className="note s-fc3">登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
                    <a id="index-enter-default" href="#" onclick="top.login();return false;" className="btn s-bg s-bg-2 f-tdn" tabIndex="1">用户登录</a> */}
                    </div>
                    <div className="n-singer">
                    {/* <h3 className="v-hd3">
                    <span className="f-fl">入驻歌手</span>
                    <a href="/discover/artist/signed/" className="more s-fc3">查看全部 &gt;</a>
                    </h3>
                    <ul className="n-enter f-cb" id="singer-list">
                    <li>
                    <a href="/user/home?id=29879272" className="itm f-tdn">
                    <div className="head"><img className="j-img" src="http://p1.music.126.net/p9U80ex1B1ciPFa125xV5A==/5931865232210340.jpg?param=62y62" /></div>
                    <div className="ifo">
                    <h4><span className="nm f-fs1 f-ib f-thide">张惠妹aMEI</span></h4>
                    <p className="f-thide s-fc3">台湾歌手张惠妹</p>
                    </div>
                    </a>
                    </li>
                    <li>
                    <a href="/user/home?id=100167517" className="itm f-tdn">
                    <div className="head"><img className="j-img" src="http://p1.music.126.net/1EN_iqQWU_E3DafzEOh3cA==/3302932937408956.jpg?param=62y62" /></div>
                    <div className="ifo">
                    <h4><span className="nm f-fs1 f-ib f-thide">Fine乐团</span></h4>
                    <p className="f-thide s-fc3">独立音乐人</p>
                    </div>
                    </a>
                    </li>
                    <li>
                    <a href="/user/home?id=58426904" className="itm f-tdn">
                    <div className="head"><img className="j-img" src="http://p1.music.126.net/ZuktZvjcxpYBjcWC3gmbPg==/19027048718765608.jpg?param=62y62" /></div>
                    <div className="ifo">
                    <h4><span className="nm f-fs1 f-ib f-thide">萬曉利</span></h4>
                    <p className="f-thide s-fc3">民谣歌手、中国现代民谣的代表人物之一</p>
                    </div>
                    </a>
                    </li>
                    <li>
                    <a href="/user/home?id=93504818" className="itm f-tdn">
                    <div className="head"><img className="j-img" src="http://p1.music.126.net/v_zYgE9kmAwVGWV2c8hFxA==/7943971513291094.jpg?param=62y62" /></div>
                    <div className="ifo">
                    <h4><span className="nm f-fs1 f-ib f-thide">音乐人赵雷</span></h4>
                    <p className="f-thide s-fc3">民谣歌手</p>
                    </div>
                    </a>
                    </li>
                    <li>
                    <a href="/user/home?id=46998208" className="itm f-tdn">
                    <div className="head"><img className="j-img" src="http://p1.music.126.net/6wPGl_ddgAbJTx5kOohcyw==/109951163892302996.jpg?param=62y62" /></div>
                    <div className="ifo"> 
                    <h4><span className="nm f-fs1 f-ib f-thide">王三溥</span></h4>
                    <p className="f-thide s-fc3">音乐人</p>
                    </div>
                    </a>
                    </li>
                    </ul>
                    <div><a target="_blank" href="/recruit" hidefocus="true" className="u-btn2 u-btn2-1"><i>申请成为网易音乐人</i></a></div> */}
                    </div>
                    <div className="n-dj n-dj-1">
                    <h3 className="v-hd3">热门主播</h3>
                    <ul className="n-hotdj f-cb" id="hotdj-list">
                    <li>
                    <a href="/user/home?id=278438485" className="cver"><img className="j-img" src="http://s4.music.126.net/style/web2/img/default/default_avatar_40.jpg" src="http://p1.music.126.net/H3QxWdf0eUiwmhJvA4vrMQ==/1407374893913311.jpg?param=40y40" /></a>
                    <div className="info">
                    <p><a href="/user/home?id=278438485" className="nm-icn f-thide s-fc0">陈立</a> <sup className="u-icn u-icn-1 "></sup>
                    </p>
                    <p className="f-thide s-fc3">心理学家、美食家陈立教授</p>
                    </div>
                    </li>
                    <li>
                    <a href="/user/home?id=91239965" className="cver"><img className="j-img" src="http://s4.music.126.net/style/web2/img/default/default_avatar_40.jpg" src="http://p1.music.126.net/y5-sM7tjnxnu_V9LWKgZlw==/7942872001461517.jpg?param=40y40" /></a>
                    <div className="info">
                    <p><a href="/user/home?id=91239965" className="nm-icn f-thide s-fc0">DJ艳秋</a> <sup className="u-icn u-icn-1 "></sup>
                    </p>
                    <p className="f-thide s-fc3">著名音乐节目主持人</p>
                    </div>
                    </li>
                    <li>
                    <a href="/user/home?id=324314596" className="cver"><img className="j-img" src="http://s4.music.126.net/style/web2/img/default/default_avatar_40.jpg" src="http://p1.music.126.net/6cc6lgOfQTo6ovNnTHPyJg==/3427177769086282.jpg?param=40y40" /></a>
                    <div className="info">
                    <p><a href="/user/home?id=324314596" className="nm-icn f-thide s-fc0">国家大剧院古典音乐频道</a> <sup className="u-icn u-icn-1 "></sup>
                    </p>
                    <p className="f-thide s-fc3">国家大剧院古典音乐官方</p>
                    </div>
                    </li>
                    <li>
                    <a href="/user/home?id=1611157" className="cver"><img className="j-img" src="http://s4.music.126.net/style/web2/img/default/default_avatar_40.jpg" src="http://p1.music.126.net/xa1Uxrrn4J0pm_PJwkGYvw==/3130309604335651.jpg?param=40y40" /></a>
                    <div className="info">
                    <p><a href="/user/home?id=1611157" className="nm-icn f-thide s-fc0">谢谢收听</a> <sup className="u-icn u-icn-1 "></sup>
                    </p>
                    <p className="f-thide s-fc3">南京电台主持人王馨</p>
                    </div>
                    </li>
                    <li>
                    <a href="/user/home?id=2313954" className="cver"><img className="j-img" src="http://s4.music.126.net/style/web2/img/default/default_avatar_40.jpg" src="http://p1.music.126.net/slpd09Tf5Ju82Mv-h8MP4w==/3440371884651965.jpg?param=40y40" /></a>
                    <div className="info">
                    <p><a href="/user/home?id=2313954" className="nm-icn f-thide s-fc0">DJ晓苏</a> <sup className="u-icn u-icn-1 "></sup>
                    </p>
                    <p className="f-thide s-fc3">独立DJ，CRI环球旅游广播特邀DJ</p>
                    </div>
                    </li>
                    </ul>
                    </div>
                    </div>
                </div>
                




            </div>
        )
    }
}
export default Content
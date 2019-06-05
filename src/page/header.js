import React,{Component} from 'react'
import '../css/header.css'
import { Menu, Dropdown, Button } from 'antd';

class Header extends Component{
   
render(){
    const menu = (
        <Menu>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" className="login_item" href="http://www.alipay.com/">
                <em>手机号登录</em>
            </a>
          </Menu.Item>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" className="login_item" href="https://music.163.com/api/sns/authorize?snsType=10&amp;clientType=web2&amp;callbackType=Login&amp;forcelogin=true">

                <em>微信登录</em>
            </a>
          </Menu.Item>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" className="login_item" href="https://music.163.com/api/sns/authorize?snsType=5&amp;clientType=web2&amp;callbackType=Login&amp;forcelogin=true">
                <em>QQ登录</em>
            </a>
          </Menu.Item>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" className="login_item" href="https://music.163.com/api/sns/authorize?snsType=2&amp;clientType=web2&amp;callbackType=Login&amp;forcelogin=true">
                <em>新浪微博登录</em>
            </a>
          </Menu.Item>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" className="login_item" href="http://www.tmall.com/">
                <em>网易邮箱帐号登录</em>
            </a>
          </Menu.Item>
        </Menu>
      )
    return(
        //头部内容
    <div className="g-topbar">

        <div className="m-top">
            <div className="wrap f-cb">
                <div className="logo">
                    <a href="/#"></a>
                </div>
                <ul className="m-nav j-tflag">
                    <li className="fst">
                        <span>
                            <a href="/#" data-module="discover" className="z-slt">
                            <em>发现音乐</em>
                            <sub className="cor">&nbsp;</sub>
                            </a>
                        </span>
                    </li>
                    <li>
                        <span>
                        <a data-action="bilog" data-log-action="page" data-log-json="{&quot;type&quot;:&quot;my&quot;}" href="/my/" data-module="my">
                        <em>我的音乐</em>
                        <sub className="cor">&nbsp;</sub>
                        </a>
                        </span>
                    </li>
                </ul>


                {/* <div className="m-tophead f-pr j-tflag"><a href="#" className="link s-fc3" data-action="login">登录</a>
                    <div className="m-tlist j-uflag">
                        <div className="inner">
                            <ul className="f-cb">
                            <li className="lb"><a className="itm-1" href="#" data-action="login" data-type="mobile"><i className="icn icn-mb"></i><em>手机号登录</em></a></li>
                            <li className="ltb"><a className="itm-2" href="https://music.163.com/api/sns/authorize?snsType=10&amp;clientType=web2&amp;callbackType=Login&amp;forcelogin=true" target="_blank" data-action="login" data-type="tencent"><i className="icn icn-wx"></i><em>微信登录</em></a></li>
                            <li className="lb"><a className="itm-2" href="https://music.163.com/api/sns/authorize?snsType=5&amp;clientType=web2&amp;callbackType=Login&amp;forcelogin=true" target="_blank" data-action="login" data-type="tencent"><i className="icn icn-qq"></i><em>QQ登录</em></a></li>
                            <li className="ltb"><a className="itm-2" href="https://music.163.com/api/sns/authorize?snsType=2&amp;clientType=web2&amp;callbackType=Login&amp;forcelogin=true" target="_blank" data-action="login" data-type="sina"><i className="icn icn-sn"></i><em>新浪微博登录</em></a></li>
                            <li className="lb"><a className="itm-2" href="#" data-action="login" data-type="netease"><i className="icn icn-wy"></i><em>网易邮箱帐号登录</em></a></li>
                            </ul>
                        </div>
                        <i className="arr"></i>
                    </div>
                </div> */}
                <Dropdown overlay={menu} placement="bottomLeft" className="m-tophead f-pr j-tflag">
                    <a href="#" className="link s-fc3 login_name" data-action="login">登录</a>
                </Dropdown>


                {/* <div className="m-srch f-pr j-suggest">
                    <div className="srchbg">
                    <   span className="parent">
                            <input type="text" name="srch" className="txt j-flag"/>
                            <label className="ph j-flag">音乐/视频/电台/用户</label>
                        </span>
                    </div>
                    <div className="j-showoff u-showoff f-hide"><p>现在支持搜索MV啦~</p></div>
                        <span className="j-flag">&nbsp;</span>
                    <div className="u-lstlay j-flag"></div>
                </div> */}

                {/* <div class="m-subnav m-subnav-up f-pr j-tflag f-hide"></div> */}



            </div>
        </div>


        <div className="m-subnav j-tflag">
            <div className="wrap f-pr">
                <ul className="nav">
                    <li><a data-module="discover" href="/discover" className="z-slt"><em>推荐</em></a></li>
                    <li><a data-module="toplist" href="/discover/toplist"><em>排行榜</em></a></li>
                    <li><a data-module="playlist" href="/discover/playlist"><em className="f-pr">歌单<span className="f-pa f-r-white-icon" ></span></em></a></li>
                    <li><a data-module="djradio" href="/discover/djradio"><em>主播电台</em></a></li>
                    <li><a data-module="artist" href="/discover/artist"><em>歌手</em></a></li>
                    <li><a data-module="album" href="/discover/album"><em>新碟上架</em></a></li>
                </ul>
            </div>
        </div>
        <div className="clear"></div>
    </div>
    
    )
}
}
export default Header
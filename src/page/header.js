import React,{Component} from 'react'
import '../css/header.css'
import { Menu, Dropdown, Button,Modal } from 'antd';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import index from './index/index'
import Leaderboard from './leaderboard/leaderboard'
import Songlist from './songlist/songlist'
import login from './login/login'
import '../css/login.css'
class Header extends Component{
    state = {
        ModalText: 'Content of the modal',
        visible: false,
        confirmLoading: false,
      };
    
      showModal = () => {
        this.setState({
          visible: true,
        });
      };
    
      handleOk = () => {
        this.setState({
          ModalText: 'The modal will be closed after two seconds',
          confirmLoading: true,
        });
        setTimeout(() => {
          this.setState({
            visible: false,
            confirmLoading: false,
          });
        }, 2000);
      };
    
      handleCancel = () => {
        console.log('Clicked cancel button');
        this.setState({
          visible: false,
          
        });
      };
render(){
    const { visible, confirmLoading, ModalText } = this.state;
    const menu = (
        <Menu>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" className="login_item" onClick={this.showModal}>
                <em>手机号登录</em>
            </a> 
            <Modal
            title="手机号登录"
            visible={visible}
            onOk={this.handleOk}
            confirmLoading={confirmLoading}
            onCancel={this.handleCancel}
            >  



<div class="n-log2 n-log2-2">
    <div class="j-mob"><div class="u-phonewrap" id="auto-id-QSNu4mhs8i7Oe6JZ">
        <a class="current" href="javascript:;" data-action="toggle">
        <span class="j-code">+86</span>
        <span class="icn u-icn2 u-icn2-17"></span>
        </a>
        <div class="txtwrap">
        <input type="text" name="p" id="p" class="j-phone txt u-txt" placeholder="请输入手机号" autocomplete="off" />
        </div>
        <ul class="j-list options f-hide">
        <li class="itm f-cb" data-action="select" data-index="0">
        <span class="lt">中国</span>
        <span class="rt">+86</span>
        </li>
        <li class="itm f-cb" data-action="select" data-index="1"><span class="lt">中国香港</span><span class="rt">+852</span></li>
        <li class="itm f-cb" data-action="select" data-index="2"><span class="lt">中国澳门</span><span class="rt">+853</span></li>
        <li class="itm f-cb" data-action="select" data-index="3"><span class="lt">中国台湾</span><span class="rt">+886</span></li>
        <li class="itm f-cb" data-action="select" data-index="4"><span class="lt">日本</span><span class="rt">+81</span></li>
        <li class="itm f-cb" data-action="select" data-index="5"><span class="lt">韩国</span><span class="rt">+82</span></li>
        <li class="itm f-cb" data-action="select" data-index="6"><span class="lt">英国</span><span class="rt">+44</span></li>
        <li class="itm f-cb" data-action="select" data-index="7"><span class="lt">美国</span><span class="rt">+1</span></li>
        <li class="itm f-cb" data-action="select" data-index="8"><span class="lt">加拿大</span><span class="rt">+1</span></li>
        <li class="itm f-cb" data-action="select" data-index="9"><span class="lt">法国</span><span class="rt">+33</span></li>
        <li class="itm f-cb" data-action="select" data-index="10"><span class="lt">芬兰</span><span class="rt">+358</span></li>
        <li class="itm f-cb" data-action="select" data-index="11"><span class="lt">德国</span><span class="rt">+49</span></li>
        <li class="itm f-cb" data-action="select" data-index="12"><span class="lt">荷兰</span><span class="rt">+31</span></li>
        <li class="itm f-cb" data-action="select" data-index="13"><span class="lt">意大利</span><span class="rt">+39</span></li>
        <li class="itm f-cb" data-action="select" data-index="14"><span class="lt">印度</span><span class="rt">+91</span></li>
        <li class="itm f-cb" data-action="select" data-index="15"><span class="lt">泰国</span><span class="rt">+66</span></li>
        <li class="itm f-cb" data-action="select" data-index="16"><span class="lt">新西兰</span><span class="rt">+64</span></li>
        <li class="itm f-cb" data-action="select" data-index="17"><span class="lt">葡萄牙</span><span class="rt">+351</span></li>
        <li class="itm f-cb" data-action="select" data-index="18"><span class="lt">俄罗斯</span><span class="rt">+7</span></li>
        <li class="itm f-cb" data-action="select" data-index="19"><span class="lt">新加坡</span><span class="rt">+65</span></li>
        <li class="itm f-cb" data-action="select" data-index="20"><span class="lt">马来西亚</span><span class="rt">+60</span></li>
        <li class="itm f-cb" data-action="select" data-index="21"><span class="lt">西班牙</span><span class="rt">+34</span></li>
        <li class="itm f-cb" data-action="select" data-index="22"><span class="lt">南非</span><span class="rt">+27</span></li>
        <li class="itm f-cb" data-action="select" data-index="23"><span class="lt">瑞典</span><span class="rt">+46</span></li>
        <li class="itm f-cb" data-action="select" data-index="24"><span class="lt">安哥拉</span><span class="rt">+244</span></li>
        <li class="itm f-cb" data-action="select" data-index="25"><span class="lt">阿富汗</span><span class="rt">+93</span></li>
        <li class="itm f-cb" data-action="select" data-index="26"><span class="lt">阿尔巴尼亚</span><span class="rt">+355</span></li>
        <li class="itm f-cb" data-action="select" data-index="27"><span class="lt">阿尔及利亚</span><span class="rt">+213</span></li>
        <li class="itm f-cb" data-action="select" data-index="28"><span class="lt">安道尔共和国</span><span class="rt">+376</span></li>
        <li class="itm f-cb" data-action="select" data-index="29"><span class="lt">安圭拉岛</span><span class="rt">+1264</span></li>
        <li class="itm f-cb" data-action="select" data-index="30"><span class="lt">安提瓜和巴布达</span><span class="rt">+1268</span></li>
        <li class="itm f-cb" data-action="select" data-index="31"><span class="lt">阿根廷</span><span class="rt">+54</span></li>
        <li class="itm f-cb" data-action="select" data-index="32"><span class="lt">亚美尼亚</span><span class="rt">+374</span></li>
        </ul>
        </div></div>
        <div class="f-mgt10">
        <input type="password" name="pw" id="pw" class="j-pwd u-txt" placeholder="请输入密码" autocomplete="new-password" />
        </div>
        <div class="j-err u-err"><i class="u-icn u-icn-25"></i><span></span></div>
        <div class="f-mgt10">
        <label class="s-fc3"><input type="checkbox" checked="checked" class="j-auto u-auto" />自动登录</label>
        <a href="#" class="f-fr s-fc3" data-action="forget">忘记密码？</a>
        </div>
        <div class="f-mgt20">
        <a class="j-primary u-btn2 u-btn2-2" hidefocus="true" href="#" data-action="login"><i>登　录</i></a>
        </div>
        </div>
        <div class="js-btmbar n-loglink2 f-cb">
        <a href="javascript:;" data-action="select" class="f-fl s-primary">&lt;&nbsp;&nbsp;其他登录方式</a>
        <a href="javascript:;" data-action="reg" class="f-fr">没有帐号？免费注册&nbsp;&nbsp;&gt;</a>
        </div>







            
              
            </Modal>    
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
          {/* <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" className="login_item" href="http://www.tmall.com/">
                <em>网易邮箱帐号登录</em>
            </a>
          </Menu.Item> */}
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

    <Router>
        <div className="m-subnav j-tflag">
            <div className="wrap f-pr">
                <ul className="nav">
                    <li><Link to="/index" className="z-slt"><em>推荐</em></Link></li>
                    <li><Link to="/Leaderboard" component={Leaderboard}><em>排行榜</em></Link></li>
                    <li><Link to="/Songlist" component={Songlist}><em className="f-pr">歌单<span className="f-pa f-r-white-icon" ></span></em></Link></li>
                    <li><a data-module="djradio" href="/discover/djradio"><em>主播电台</em></a></li>
                    <li><a data-module="artist" href="/discover/artist"><em>歌手</em></a></li>
                    {/* <li><a data-module="album" href="/discover/album"><em>新碟上架</em></a></li> */}
                </ul>
            </div>
        </div>


        <div>
            <Route path="/index" component={index}/>
            <Route path="/Leaderboard" component={Leaderboard}/>
            <Route path="/Songlist" component={Songlist}/>
        </div>
    </Router>
        <div className="clear"></div>
    </div>

    )
}
}
export default Header
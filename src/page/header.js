import React,{Component} from 'react'
import '../css/header.css'
import { Modal,Menu, Dropdown, Button,Form, Icon, Input,  Checkbox } from 'antd';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import index from './index/index'
import Leaderboard from './leaderboard/leaderboard'
import Songlist from './songlist/songlist'
import login from './login/login'
import '../css/login.css'
import axios from 'axios';
class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            userName: '',
            passWord:''
        };
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handlePassChange = this.handlePassChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
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

     
      handleUserChange(event) {
        this.setState({
            userName: event.target.value ,  
        });
      }
      handlePassChange(event) {
        this.setState({
            passWord: event.target.value ,  
        });
      }
    
      handleSubmit() {
        window.alert(this.state.userName)
        window.alert(this.state.passWord)
        axios.get('http://localhost:3000/login/cellphone', {
            phone: this.state.userName,
            password: this.state.passWord
          })
        .then(function (res) {
            console.log(res);
          })
      }
      
render(){
    // const { getFieldDecorator } = this.props.form;
    const { visible, confirmLoading, ModalText } = this.state;
    

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
                <div placement="bottomLeft" className="m-tophead f-pr j-tflag">
                    <a href="#" className="link s-fc3 login_name" data-action="login" onClick={this.showModal}>手机号登录</a>
                </div>

        <Modal
          title="手机号登录"
          visible={visible}
          onOk={this.handleOk}
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel}
          footer={null}
        >


<Form className="login-form">
        <Form.Item>
            <Input
              name="userName"
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="请输入手机号码"
              value={this.state.userName} 
              onChange={this.handleUserChange}
            />
        </Form.Item>
        <Form.Item>
            <Input
              name="passWord"
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="请输入密码"
              value={this.state.passWord} 
              onChange={this.handlePassChange}
            />
        </Form.Item>
        <Form.Item>
            {/* (<Checkbox>Remember me</Checkbox>)} */}
          {/* <a className="login-form-forgot" href="">
            Forgot password
          </a> */}
          <Button type="primary submit" htmlType="submit" className="login-form-button" onClick={this.handleSubmit}>
            登录
          </Button>
          {/* Or <a href="">register now!</a> */}
        </Form.Item>
      </Form>





        </Modal>

               


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
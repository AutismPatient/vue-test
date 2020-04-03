<template>
  <div id="app" class="layout">
    <Layout>
        <!-- 导航 -->
        <header>
          <div class="nav-div">
            <a class="nav-logo" href="/">
              <img src="./assets/logo.png"/>
            </a>
            <a href="/" class="logo-text">
              MIT
            </a>
            <div class="path-list">
              <Dropdown>
                <a href="javascript:void(0)" class="text-sub">
                  快捷入口
                  <Icon type="ios-arrow-down"></Icon>
                </a>
                <DropdownMenu slot="list">
                  <DropdownItem><a href="https://www.baidu.com/" target="_blank">百度</a></DropdownItem>
                  <DropdownItem><a href="https://juejin.im/" target="_blank">掘金</a></DropdownItem>
                  <DropdownItem disabled><a disabled href="https://www.github.com/" target="_blank">Github</a></DropdownItem>
                  <DropdownItem><a href="https://www.bilibili.com/" target="_blank">哗哩哗哩</a></DropdownItem>
                  <DropdownItem divided><a href="https://www.iviewui.com/" target="_blank">视图更新</a></DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
            <div class="nav-search">
              <Input size="small" v-model="search_text" placeholder="在 23,455 个视频中搜索" />
            </div>
            <div class="nav-right">
              <a href="#"><Icon type="md-stopwatch" size="18"/> 我看过的</a>
            </div>
            <div class="nav-right">
              <dropdown class="add_some">
                <a href="#">
                  <Icon type="md-add" size="22"/>
                </a>
                <dropdown-menu slot="list">
                  <dropdown-item>发布</dropdown-item>
                  <dropdown-item>上传视频</dropdown-item>
                </dropdown-menu>
              </dropdown>
            </div>
            <div class="nav-right" style="margin-left: 24px;line-height: 58px;">
              <Dropdown trigger="click" style="margin-left: 20px" class="user_info">
                <a href="javascript:void(0)">
                   <avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" size="30"/>
                </a>
                <DropdownMenu slot="list">
                  <DropdownItem>
                    <strong style="font-size: 16px">猪大肠</strong>
                    <small>普通会员 <Icon type="md-flash" /></small>
                  </DropdownItem>
                  <DropdownItem divided><Icon type="md-contact" />  个人资料</DropdownItem>
                  <DropdownItem><Icon type="md-medal" /> 充值VIP <badge status="error"/></DropdownItem>
                  <DropdownItem><Icon type="ios-star" /> 我的收藏</DropdownItem>
                  <DropdownItem divided><Icon type="md-exit" />  退出登录</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
            <div class="nav-right">
              <Menu mode="horizontal" active-name="3">
                <menu-item name="1">
                  国内电影
                </menu-item>
                <menu-item name="2">
                  欧美电影
                </menu-item>
                <submenu name="4">
                  <template slot="title">
                    其他地区
                  </template>
                  <menu-group title="亚太">
                    <menu-item>中国</menu-item>
                    <menu-item>日本</menu-item>
                    <menu-item>韩国</menu-item>
                    <menu-item>柬埔寨</menu-item>
                  </menu-group>
                  <menu-group title="欧洲">
                    <menu-item>法国</menu-item>
                    <menu-item>英国</menu-item>
                    <menu-item>意大利</menu-item>
                  </menu-group>
                </submenu>
                <menu-item name="3">
                  电视剧
                </menu-item>
                <menu-item name="5">
                  VIP <Badge status="error" />
                </menu-item>
                <menu-item>
                  影评
                </menu-item>
              </Menu>
            </div>
          </div>
        </header>
        <!--  侧边栏   -->
        <layout>
          <sider hide-trigger :style="{background:'#fff',paddingTop:'40px'}">
            <Menu active-name="0" theme="light" width="auto" :open-names="['1','2','3']">
              <menu-item name="0">
                <Icon type="ios-home" />
                主页
              </menu-item>
              <Submenu name="1">
                <template slot="title">
                  <Icon type="ios-navigate"></Icon>
                  圈子
                </template>
                <menu-item name="1-1">电影</menu-item>
                <menu-item name="1-2">电视剧</menu-item>
              </Submenu>
              <Submenu name="2">
                <template slot="title">
                  <Icon type="ios-keypad"></Icon>
                  超感话题
                </template>
                <menu-item name="2-1">重口味</menu-item>
                <menu-item name="2-2">血腥</menu-item>
                <menu-item name="2-3">黑暗</menu-item>
                <menu-item name="2-4">深度评说</menu-item>
              </Submenu>
              <Submenu name="3">
                <template slot="title">
                  <Icon type="ios-analytics"></Icon>
                  活动
                </template>
                <menu-item name="3-1">线上</menu-item>
                <menu-item name="3-2">线下</menu-item>
                <menu-item name="3-3">展会</menu-item>
              </Submenu>
            </Menu>
          </sider>
          <layout>
            <Breadcrumb :style="{margin: '24px'}">
              <BreadcrumbItem>首页</BreadcrumbItem>
              <BreadcrumbItem>N/A</BreadcrumbItem>
            </Breadcrumb>
            <content :style="{padding: '24px',height:'100vh',minHeight: '280px'}">
              <router-view />
            </content>
          </layout>
        </layout>
    </Layout>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      theme1: 'light',
      theme2: 'light',
      search_text: ''
    }
  }
}
</script>

<style>
#app {
  width: 100vw;
  height: 100vh;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
}
a{
  color: #515a6e;
}
header{
  border-bottom: 1px solid #ddd;
}
.ivu-layout{
    height: 100vh;
}
.user_info .ivu-dropdown-item{
  padding: 8px 4px;
}
.ivu-menu-light.ivu-menu-horizontal .ivu-menu-item-active,.ivu-menu-light.ivu-menu-horizontal .ivu-menu-item:hover{
  border-bottom: none;
}
.ivu-menu-light.ivu-menu-horizontal .ivu-menu-item,.ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu,.ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu:hover{
  border-bottom: none;
}
.add_some{
  padding: 0px 14px;
}
.nav-right{
  float: right;
}
.nav-right ul{
  height: inherit;
}
.nav-search{
  float: left;
  margin-left: 60px;
}
.nav-search input{
  border: none;
}
.nav-search input:focus{
  border: none;
  box-shadow: none;
}
.path-list{
  float: left;
  margin-left: 20px;
  padding-left: 12px;
  position: relative;
}
.path-list:after{
  content: "";
  display: block;
  width: 1px;
  height: 24px;
  background: #ebedee;
  position: absolute;
  top: 20px;
  left: 0;
}
.logo-text{
  float: left;
  height: 35px;
  font-family: "Bodoni MT";
  font-size: 18px;
  padding-left: 12px;
  color: #2b85e4;
}
header{
  background-color: white;
}
.nav-div{
  width: 95%;
  height: 65px;
  margin: 0 auto;
  line-height: 65px;
}
.nav-logo{
  height: 35px;
  margin-top: 12px;
  float: left;
}
  .nav-logo img{
    height: 100%;
  }
</style>

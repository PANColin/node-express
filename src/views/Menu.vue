<template>
	<div class="content">
		<a-switch :default-checked="false" @change="changeMode" />
		改变模式
		<span className="ant-divider" style="margin: 0 1em" />
		<a-switch :default-checked="false" @change="changeTheme" />
		改变主题
		<br />
		<br />
		<a-menu style="width: 256px" :default-selected-keys="['1']" :default-open-keys="['sub1']" :mode="mode" :theme="theme">
			<a-menu-item key="1">
				<a-icon type="mail" />
				博客管理
			</a-menu-item>
			<a-menu-item key="2">
				<a-icon type="calendar" />
				评论类别管理
			</a-menu-item>
			<a-sub-menu key="sub1">
				<span slot="title">
					<a-icon type="appstore" />
					<span>博客管理</span>
				</span>
				<a-menu-item key="3">写博客</a-menu-item>
				<a-menu-item key="4">修改博客</a-menu-item>
				<a-sub-menu key="sub1-2" title="test">
					<a-menu-item key="5">Option 5</a-menu-item>
					<a-menu-item key="6">Option 6</a-menu-item>
				</a-sub-menu>
			</a-sub-menu>
			<a-sub-menu key="sub2">
				<span slot="title">
					<a-icon type="setting" />
					<span>系统设置</span>
				</span>
				<a-menu-item key="7">刷新系统缓存</a-menu-item>
				<a-menu-item key="8">修改密码</a-menu-item>
				<a-menu-item key="9">修改链接</a-menu-item>
				<a-menu-item key="10">退出系统</a-menu-item>
			</a-sub-menu>
		</a-menu>
	</div>
</template>
<script>
export default {
	data() {
		return {
			mode: 'inline',
			theme: 'light'
		};
	},
	methods: {
		changeMode(checked) {
			this.mode = checked ? 'vertical' : 'inline';
		},
		changeTheme(checked) {
			this.theme = checked ? 'dark' : 'light';
		}
	}
};
</script>
<style scope="scope">
.content {
	width: 100%;
	height: 700px;
}
.ant-menu {
	height: 100%;
	display: flex;
	flex-wrap: wrap;
	/* align-content: space-around; */
	flex-direction: column;
	justify-content: space-around;
}
.ant-menu .ant-menu-item{
	/* width: 100%;
	height: 50px;
	line-height: 50px;
	border:1px double #ddd; */
}
</style>

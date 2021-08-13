<template>
	<div id="app">
		<a-card title="BLOG" style="width: 50%;margin: 0 auto;text-align: center;" v-if="show" ref="show">
			<a-card-grid style="width:50%;text-align:center;font-size: 20px;"><router-link to="/login">登录</router-link></a-card-grid>
			<a-card-grid style="width:50%;text-align:center;font-size: 20px;" :hoverable="false"><router-link to="/register">注册</router-link></a-card-grid>
		</a-card>

		<keep-alive>
			<!-- 这里是会被缓存的视图组件， -->
			<router-view v-if="$route.meta.isKeepAlive"></router-view>
		</keep-alive>
		<!-- 这里是不被缓存的视图组件，-->
		<router-view v-if="!$route.meta.isKeepAlive"></router-view>
	</div>
</template>
<script>
import { mapState, mapMutations } from 'vuex';
export default {
	data() {
		return {};
	},
	computed: {
		...mapState(['show'])
	},
	components: {},
	methods: {}
};
</script>

<style>
@import '~@/assets/css/base.css';
</style>

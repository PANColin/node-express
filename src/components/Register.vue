<template>
	<a-card>
		<a-form id="components-form-demo-normal-login" :form="form" class="login-form" @submit="handleSubmit">
			<a-form-item>
				<a-input v-decorator="['userName', { rules: [{ required: true, message: '请输入用户名!' }] }]" placeholder="Username">
					<a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
				</a-input>
			</a-form-item>
			<a-form-item>
				<a-input v-decorator="['password', { rules: [{ required: true, message: '请输入密码!' }] }]" type="password" placeholder="Password">
					<a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
				</a-input>
			</a-form-item>
			<a-form-item>
				<a-button type="primary" html-type="submit" class="login-form-button">注册</a-button>
				<a @click="$router.replace('/login')">已有帐号？登录</a>
			</a-form-item>
		</a-form>
	</a-card>
</template>

<script>
import { blogAPI } from '@/request/exports.js';
export default {
	beforeCreate() {
		this.form = this.$form.createForm(this, {
			name: 'normal_login'
		});
	},
	methods: {
		// 注册博主
		handleSubmit(e) {
			e.preventDefault();
			this.form.validateFields((err, values) => {
				if (!err) {
					console.log(this);
					this.$axios
						.post('http://localhost:3000/api/blogger/add', values)
						.then(res => {
							console.log(res);
							if (!res.data.code == 'succuss') return  this.$message.error('注册失败');
							 this.$message.success('注册成功');
							 this.$router.push("/login");
							// console.log(res.data);
						})
						.catch(err => {
							console.log(err);
						});
					// blogAPI.register(values).then(res=>{
					// 	console.log(res);
					// })

					console.log('Received values of form: ', values);
				}
			});
		}
	}
};
</script>
<style scoped="scoped">
#components-form-demo-normal-login .login-form {
	max-width: 300px;
}

#components-form-demo-normal-login .login-form-forgot {
	float: right;
}

#components-form-demo-normal-login .login-form-button {
	width: 100%;
}

.ant-card {
	width: fit-content;
	margin: 0 auto;
}
</style>

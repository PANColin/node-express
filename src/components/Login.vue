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
				<a-checkbox
					v-decorator="[
						'remember',
						{
							valuePropName: 'checked',
							initialValue: true
						}
					]"
				>
					记住我
				</a-checkbox>
				<a class="login-form-forgot" href="">忘记密码？</a>
				<a-button type="primary" html-type="submit" class="login-form-button">登录</a-button>
				<a @click="$router.push('/register')">现在注册</a>
			</a-form-item>
		</a-form>
	</a-card>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
	beforeCreate() {
		this.form = this.$form.createForm(this, {
			name: 'normal_login'
		});
	},
	methods: {
		...mapMutations(['changeShow']),
		handleSubmit(e) {
			// console.log(this.$refs);
			e.preventDefault();
			this.form.validateFields((err, values) => {
				if (!err) {
					console.log(this.$store);
					this.$axios
						.post('http://localhost:3000/api/blogger/login', values)
						.then(res => {
							console.log(res);
							if (res.data.msg !== 'success') return this.$message.error(res.data.msg);
							this.$message.success('登录成功');
							this.$store.commit('changeShow');
							this.$router.replace('/menu');
						})
						.catch(err => {
							console.log(err);
						});
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

<template>
	<div class="register">
		<div class="register-content">
			<div class="register-content-top">
			</div>
			<div class="register-content-list">
				<div class="ch-title">欢迎来到ET社区</div>
				<div class="en-title">Welcome to the ET community</div>
				<el-form :model="registerForm" ref="registerForm" :rules="registerRules" label-width="10.375rem"
					status-icon>
					<el-form-item label="用户名称" prop="userName">
						<el-input v-model="registerForm.userName"></el-input>
					</el-form-item>
					<el-form-item label="用户别名" prop="displayName">
						<el-input v-model="registerForm.displayName"></el-input>
					</el-form-item>
					<el-form-item label="密码" prop="passWord">
						<el-input v-model="registerForm.passWord" show-password></el-input>
					</el-form-item>
					<el-form-item label="确认密码" prop="passWordConfirm">
						<el-input v-model="registerForm.passWordConfirm" show-password></el-input>
					</el-form-item>
					<el-form-item label="邮箱" prop="email">
						<el-input v-model="registerForm.email"></el-input>
					</el-form-item>
					<el-form-item label="验证码" prop="emailCode">
						<el-input v-model="registerForm.emailCode"></el-input>
					</el-form-item>
					<el-form-item size="large" class="submit-button">
						<el-button type="primary" @click="onSubmit">注册</el-button>
					</el-form-item>
				</el-form>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			var checkPassWord = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('请输入密码'));
				} else {
					if (this.registerForm.passWordConfirm !== '') {
						this.$refs.registerForm.validateField('checkPass');
					}
					callback();
				}
			};
			var checkPassWordConfirm = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('请再次输入密码'));
				} else if (value !== this.registerForm.passWord) {
					callback(new Error('两次输入密码不一致!'));
				} else {
					callback();
				}
			};
			var checkEmail = (rule, value, callback) => {
				var emailReg = new RegExp("^[^@\s]+@[^@\s]+\.[^@\s]+$")
				if (value === '') {
					callback(new Error('请输入邮箱'));
				} else if (!emailReg.test(value)) {
					callback(new Error('请输入正确的邮箱'));
				} else {
					callback();
				}
			};
			return {
				registerForm: {
					userName: '',
					displayName: '',
					passWord: '',
					passWordConfirm: '',
					email: '',
					emailCode: '',
				},
				registerRules: {
					userName: [{
						required: true,
						message: '请输入用户名称',
						trigger: 'blur'
					}],
					displayName: [{
						required: true,
						message: '请输入用户别名',
						trigger: 'blur'
					}],
					passWord: [{
						required: true,
						validator: checkPassWord,
						trigger: 'blur'
					}],
					passWordConfirm: [{
						required: true,
						validator: checkPassWordConfirm,
						trigger: 'blur'
					}],
					email: [{
						required: true,
						validator: checkEmail,
						trigger: 'blur'
					}],
					emailCode: [{
						required: true,
						message: '请输入邮箱验证码',
						trigger: 'blur'
					}],
				},
			};
		},
		methods: {
			onSubmit(){
				
			}
		}
	}
</script>

<style lang="less" scoped>
	.register {
		width: 100%;
		height: 100%;

		.register-content {
			width: 100%;
			height: 100%;
			background-color: #FFFFFF;
			display: inline-block;
			box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0);

			.register-content-top {
				width: 80%;
				height: 10%;
				margin: auto;
				text-align: center;
			}

			.register-content-list {
				width: 60%;
				height: 90%;
				margin: auto;
				font-size: 1.25rem !important;
				font-weight: 700 !important;

				.submit-button {
					float: right;
				}

				.ch-title {
					margin-top: 0.625rem;
					font-size: 1.5625rem;
					margin-left: 1.25rem;
					text-align: center;
					color: #606266;
				}

				.en-title {
					color: #606266;
					text-align: center;
					font-size: 0.9375rem;
					margin-bottom: 0.9375rem;
					margin-left: 1.25rem;
				}
			}
		}
	}
</style>

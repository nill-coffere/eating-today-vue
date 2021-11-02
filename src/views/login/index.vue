<template>
	<div class="login">
		<div class="login-content">
			<div class="login-content-top">
			</div>
			<div class="login-content-list">
				<div class="login-content-list-form">
					<div class="ch-title">登录ET社区</div>
					<div class="en-title">Login to the ET community</div>
					<el-form :model="loginForm" ref="loginForm" :rules="loginRules" label-width="10.375rem"
						status-icon>
						<el-form-item label="用户名称/邮箱" prop="userName">
							<el-input v-model="loginForm.userName"></el-input>
						</el-form-item>
						<el-form-item label="密码" prop="passWord">
							<el-input v-model="loginForm.passWord" show-password></el-input>
						</el-form-item>
						<el-form-item size="large" class="submit-button">
							<el-button type="primary" @click="onSubmit">登录</el-button>
						</el-form-item>
					</el-form>
				</div>
			</div>
			<div class="login-content-bottom">
				
			</div>
		</div>
	</div>

	</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				loginForm: {
					userName: "",
					passWord: "",
				},
				loginRules: {
					userName: [{
						required: true,
						message: "请输入用户名称/邮箱",
						trigger: "blur"
					}],
					passWord: [{
						required: true,
						message: "请输入密码",
						trigger: 'blur'
					}]
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
	.login {
		width: 100%;
		height: 100%;

		.login-content {
			width: 100%;
			height: 100%;
			background-color: #FFFFFF;
			display: inline-block;
			
			.login-content-top {
				width: 100%;
				height: 5%;
				background-color: #EBEEF5;
				
			}
			
			.login-content-bottom{
				width: 100%;
				height: 35%;
				background-color: #EBEEF5;
			}
			
			.login-content-list {
				width: 100%;
				height: 60%;
				margin: auto;
				font-size: 1.25rem !important;
				font-weight: 700 !important;
				box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0);
			
				.login-content-list-form{
					height:100%;
					width: 60%;
					margin: auto;
					transform:translateY(20%);
					
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
	}
</style>

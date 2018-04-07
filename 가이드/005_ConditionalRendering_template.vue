<template v-if="loginType === 'username'">
  <label>사용자 이름</label>
  <input placeholder="사용자 이름을 입력하세요">
</template>
<template v-else>
  <label>이메일</label>
  <input placeholder="이메일 주소를 입력하세요">
</template>
<button @click="toggleLoginType"></button>

<script>
module.exports = {
	data : function(){
		return {
			loginType : 'username'
		}
	},
	methods : {
		toggleLoginType : function(){
			return this.loginType = this.loginType === 'username' ?'email' : 'username';
		}
	}
}
</script>
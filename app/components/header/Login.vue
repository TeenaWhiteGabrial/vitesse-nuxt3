<script lang="ts" setup>
  interface LoginRes {
    access_token: string
  }

  const config = useRuntimeConfig()
  const originUrl = window.location.origin
  const loiginUrl: string = `${config.public.loginUrl}${originUrl}`

  const userStore = useUserInfoStore()
  /** 获取code，如果有code，执行登录逻辑 */
  const searchParam = new URLSearchParams(window.location.href)
  const code = searchParam.get('##code')
  if (code) {
    await login(code)
  }
  /** 判断token，如果有token，执行获取用户信息逻辑 */
  if (useCookie('token').value) {
    await getUserInfo()
  }

  /** 获取token */
  async function login(code: string) {
    const url = config.public.redirectUrl || originUrl

    const response: any = await $fetch<LoginRes>(`${config.public.apiBase}/gateway/portal/user/token?code=${code}&redirectUri=${url}`)
    if (response.code === 200 && response.data.access_token) {
      userStore.isLogin = true
      useCookie('token').value = response.data.access_token
    }
  }
  /** 获取用户信息 */
  async function getUserInfo() {
    const resData: any = await $fetch(`${config.public.apiBase}/gateway/portal/user/info/token/${useCookie('token').value}`)
    if (resData.code === 200) {
      userStore.userName = resData.data.userName
      userStore.phone = resData.data.phone
      userStore.email = resData.data.email
    }
  }
</script>

<template>
  <!-- PC端 -->
  <div hidden h-18 w-50 flex-row-reverse pc:flex>
    <div v-if="!userStore.isLogin" m-y-auto mr-0 btn h-8 @click="jumpLink({ url: loiginUrl, type: '_self' })">
      登录/注册
    </div>
    <div v-else class="group relative m-y-auto mr-5 h-full flex cursor-pointer">
      <Icon name="i-solar:user-circle-outline" size="32" relative m-y-auto mr-0 />
      <div fixed right-0 top-total-header z-9 hidden max-w-40 border-b-4 bg-white group-hover:block>
        <table>
          <tbody>
            <tr>
              <td class="border border-slate-300 px-5 py-1 hover:text-link-color">
                {{ userStore.userName }}
              </td>
            </tr>
            <tr>
              <td class="border border-slate-300 px-5 py-1 hover:text-link-color" @click="jumpLink({ url: `${originUrl}/account-web/` })">
                账号中心
              </td>
            </tr>
            <tr>
              <td class="border border-slate-300 px-5 py-1 hover:text-link-color" @click="userStore.logout">
                退出登录
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div m-y-auto ml-8 mr-3 text-3.5>
      工作台
    </div>
  </div>
  <!-- 移动端 -->
  <div ml-10 h-full flex cursor-pointer items-center pc:hidden>
    <Icon v-if="!userStore.isLogin" name="i-solar:user-circle-outline" size="32" h-full @click="jumpLink({ url: loiginUrl, type: '_self' })" />
    <div v-else class="group h-full flex items-center">
      <Icon name="i-solar:user-circle-outline" size="32" cursor-pointer />
      <div absolute right-4 top-total-header z-9 hidden max-w-40 border-b-4 bg-white group-hover:block>
        <table>
          <tbody>
            <tr>
              <td class="border border-slate-300 px-5 py-1 hover:text-link-color">
                {{ userStore.userName }}
              </td>
            </tr>
            <tr>
              <td class="border border-slate-300 px-5 py-1 hover:text-link-color">
                工作台
              </td>
            </tr>
            <tr>
              <td class="border border-slate-300 px-5 py-1 hover:text-link-color" @click="jumpLink({ url: `${originUrl}/account-web/` })">
                账号中心
              </td>
            </tr>
            <tr>
              <td class="border border-slate-300 px-5 py-1 hover:text-link-color" @click="userStore.logout">
                退出登录
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

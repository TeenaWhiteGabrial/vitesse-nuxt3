<script setup lang="ts">
  const { friendLinks, statements, filing, contacts, follows }: { friendLinks: any, statements: any, filing: any, contacts: any, follows: any } = useWebsiteStore()
</script>

<template>
  <div w-full flex py-10 color-light class="bg-[#3c3c49]">
    <div mx-auto w-300 flex justify-between>
      <div ml-20 pc:ml-0>
        <div w-160 flex justify-between pc:w-220>
          <div max-w-80 flex-1>
            <div mb-5 text-6 font-bold>
              友情链接
            </div>
            <div grid grid-cols-2 gap-y-2 text-3>
              <div v-for="(item, index) in friendLinks" :key="index" cursor-pointer @click="jumpLink({ url: item.link })">
                {{ item.name }}
              </div>
            </div>
          </div>
          <div flex-1>
            <div mb-5 text-6 font-bold>
              联系我们
            </div>
            <div>
              <div v-for="(item, index) in contacts" :key="index" mb-3 max-w-80 cursor-pointer break-all>
                <Icon v-if="item.style === 'phone'" size="20" name="i-uil:phone" />
                <Icon v-if="item.style === 'email'" size="20" name="i-ic:outline-mail" />
                <span ml-5>
                  {{ item.name }}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div mt-10 flex text-3 color-coolgray>
          <div v-for="(item, index) in statements" :key="index">
            <span>{{ item.name }}</span>
            <span v-if="index !== statements.length - 1" mx-1>|</span>
          </div>
        </div>
        <div mt-1 flex text-3 color-coolgray>
          {{ filing[0]?.name }}
        </div>
      </div>

      <div w-80>
        <div mb-5 text-6 font-bold>
          关注我们
        </div>
        <div v-for="(item, index) in follows" :key="index" w-30>
          <img h-30 w-30 :src="item.uri">
          <div mt-2 text-align-center>
            {{ item.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

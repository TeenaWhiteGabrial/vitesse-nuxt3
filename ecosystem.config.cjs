module.exports = {
    apps: [
        {
            name: 'portal-nuxt3',
            port: '3000',
            exec_mode: 'fork', // 新进程。cluster：主进程的子进程
            instances: '1', // 实例数
            script: './.output/server/index.mjs',
        },
    ],
}

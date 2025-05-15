export const toAuth = debounce(() => {
  const router = useRouter()
  removeCacheToken()
  logger.error('登录过期/需要重新授权')
  const currentPages = getCurrentPages()
  const pageName = currentPages?.[currentPages.length - 1]?.route || ''
  if (pageName.includes('/pages/auth/index'))
    return
  router.replace({
    url: '/pages/auth/index',
  })
}, 500)

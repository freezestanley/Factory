const vconsole = function () {
  if (!/vconsole=true/.test(window.location.href)) return
  const vConsole = document.createElement('script')
  vConsole.setAttribute(
    'src',
    'https://unpkg.com/vconsole/dist/vconsole.min.js'
  )
  vConsole.setAttribute('id', 'vConsole')
  vConsole.setAttribute('async', 'true')
  vConsole.addEventListener('load', () => {
    new window.VConsole()
    console.warn('vConsole 注册成功！')
  })
  document.head.appendChild(vConsole)
}
export default vconsole

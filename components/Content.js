import Markdown from 'markdown-to-jsx'

function createOptions (classMap) {
  let options = {
    overrides: {}
  }
  Object.keys(classMap).forEach((element => {
    options.overrides[element] = classMap[element]
  }))
  return options
}

export default function Content ({ content, classMap = {} }) {
  const markdown = require(`../content/${content}.js`).default
  return <Markdown options={createOptions(classMap)}>{markdown}</Markdown>
}
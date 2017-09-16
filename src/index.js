import showdown from 'showdown'
import Handlebars from 'handlebars'
import { readdirSync, readFileSync, writeFileSync } from 'fs'
import { basename } from 'path'
import { flatten } from 'ramda'

import extensions from './extension'
import script from './inject'

module.exports = { parse }

const contentPath = './content'
const quizTemplate = readFileSync('./static/quiz.template.hbs').toString()
const indexTemplate = readFileSync('./static/index.template.hbs').toString()

const quizTempl = Handlebars.compile(quizTemplate)
const indexTempl = Handlebars.compile(indexTemplate)

const converter = new showdown.Converter({ 'tasklists': true, extensions: [extensions] })

function parseFiles() {
  const modules = readdirSync(contentPath)

  return modules.map(module => {
    const quizes = readdirSync(`${contentPath}/${module}`)
    return quizes.map(quiz => {
      const name = quiz.replace('.md', '')
      const path = `${contentPath}/${module}/${name}`
      const markdown = readFileSync(`${path}.md`).toString()
      const html = converter.makeHtml(markdown)

      const page = quizTempl({ quiz: { html, script } })

      writeFileSync(`./dist/${name}.html`, page)

      return {
        module: module,
        name: name,
        path: `${path}.html`,
        html: page
      }
    })
  })

}

function createIndex(files) {
  const paths = files.map(md =>
    md.map(({ name }) => ({
      name: name.replace(/_/g, ' '),
      link: `${name}.html`
    }))
  )

  const links = flatten(paths)
  const index = indexTempl(links)
  writeFileSync('./dist/index.html', index)
}

function parse() {
  const files = parseFiles()
  createIndex(files)
  return
}

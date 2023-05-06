import fs from 'fs'
import path, { basename, dirname } from 'path'

import { pageExamples } from '@/config/page-examples'

const payload = pageExamples.map((component) => {
  const files = component.files?.map((file) => {
    const content = fs.readFileSync(path.join(process.cwd(), file), 'utf8')

    return {
      name: basename(file),
      dir: dirname(file),
      content,
    }
  })

  return {
    ...component,
    files,
  }
})

fs.writeFileSync(
  path.join(process.cwd(), 'app/api/page-examples.json'),
  JSON.stringify(payload, null, 2)
)

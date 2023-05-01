import fs from 'fs'
import path, { basename, dirname } from 'path'

import { marketingComponents } from '@/config/marketing-components'

const payload = marketingComponents.map((component) => {
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
  path.join(process.cwd(), 'app/api/marketing-components.json'),
  JSON.stringify(payload, null, 2)
)

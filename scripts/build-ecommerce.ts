import fs from 'fs'
import path, { basename, dirname } from 'path'

import { ecommerceComponents } from '@/config/ecommerce-components'

const payload = ecommerceComponents.map((component) => {
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
  path.join(process.cwd(), 'app/api/ecommerce-components.json'),
  JSON.stringify(payload, null, 2)
)

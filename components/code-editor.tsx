import { langs, loadLanguage } from '@uiw/codemirror-extensions-langs'
import * as themes from '@uiw/codemirror-themes-all'
import CodeMirror from '@uiw/react-codemirror'
import { EditorView } from '@codemirror/view'
import { cn } from '@/lib/utils'
import { Icons } from '@/components/icons'

export const DEFAULT_BASE_SETUP = {
  foldGutter: false,
  highlightActiveLine: false,
  highlightActiveLineGutter: false,
  indentOnInput: true,
  lineNumbers: false,
  syntaxHighlighting: true,
  tabSize: 4,
}

export const clsx = (...classNames: string[]) => classNames.filter(Boolean).join(' ')

interface CodeEditorProps {
  selectedFile: string
  htmlCode?: string
  reactCode?: string
}

export function CodeEditor({ selectedFile, htmlCode, reactCode }: CodeEditorProps) {
  return (
    <div className="relative mt-4 min-h-min w-full rounded-md bg-[#0E1117] p-2 pb-0">
      <CodeMirror
        className={cn('CodeMirror__Main__Editor')}
        theme={themes['githubDark']}
        value={selectedFile?.toLocaleLowerCase() === 'html' ? htmlCode : reactCode}
        extensions={[
          selectedFile?.toLocaleLowerCase() === 'html' ? langs.jsx() : EditorView.lineWrapping,
          selectedFile?.toLocaleLowerCase() === 'react' ? langs.jsx() : EditorView.lineWrapping,
          EditorView.lineWrapping,
        ].filter((e) => e)}
        readOnly
        style={{
          marginBottom: '40px',
          fontSize: '16px',
        }}
        basicSetup={{
          ...DEFAULT_BASE_SETUP,
        }}
        indentWithTab
      />
    </div>
  )
}

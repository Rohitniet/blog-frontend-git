// src/Tiptap.tsx
import { useEditor, EditorContent, FloatingMenu, BubbleMenu } from '@tiptap/react'
import Heading from '@tiptap/extension-heading'
import StarterKit from '@tiptap/starter-kit'
import { ToolbarButton } from './toolbarButton'
import Color from "@tiptap/extension-color";
import TextStyle from '@tiptap/extension-text-style';
import { Button } from './Button';

// define your extension array
const extensions = [ StarterKit , Heading.configure({ levels: [1, 2, 3, 4, 5, 6] }), // Include heading
TextStyle,
Color, ]

const content = '<p>Hello World!</p>'

const Tiptap = ({passparent}:{passparent:(d:any)=>void}) => {
  const editor = useEditor({
    extensions,
    content,
    
      
      
    
  })


  if (!editor) {
    return null
  }

  function save(){
    console.log(editor?.getJSON())
    passparent(editor?.getJSON())
  }

  return (
   <div>

<div className="m-5 bg-gray-300 p-2">
<div className="flex flex-wrap gap-2 bg-gray-100 p-3 rounded-lg shadow-sm">
  <ToolbarButton
    onClick={() => editor.chain().focus().toggleBold().run()}
    isActive={editor.isActive("bold")}
    disabled={!editor.can().chain().focus().toggleBold().run()}
  >
    B
  </ToolbarButton>

  <ToolbarButton
    onClick={() => editor.chain().focus().toggleItalic().run()}
    isActive={editor.isActive("italic")}
    disabled={!editor.can().chain().focus().toggleItalic().run()}
  >
    Italic
  </ToolbarButton>

  <ToolbarButton
    onClick={() => editor.chain().focus().toggleStrike().run()}
    isActive={editor.isActive("strike")}
    disabled={!editor.can().chain().focus().toggleStrike().run()}
  >
    Strike
  </ToolbarButton>

  <ToolbarButton
    onClick={() => editor.chain().focus().toggleCode().run()}
    isActive={editor.isActive("code")}
    disabled={!editor.can().chain().focus().toggleCode().run()}
  >
    Code
  </ToolbarButton>

  <ToolbarButton onClick={() => editor.chain().focus().unsetAllMarks().run()}>
    Clear Marks
  </ToolbarButton>

  <ToolbarButton onClick={() => editor.chain().focus().clearNodes().run()}>
    Clear Nodes
  </ToolbarButton>

  
  <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
        >
          H1
        </button>

  <ToolbarButton
    onClick={() => editor.chain().focus().toggleBulletList().run()}
    isActive={editor.isActive("bulletList")}
  >
    Bullet List
  </ToolbarButton>

  <ToolbarButton
    onClick={() => editor.chain().focus().toggleOrderedList().run()}
    isActive={editor.isActive("orderedList")}
  >
    Ordered List
  </ToolbarButton>

  <ToolbarButton
    onClick={() => editor.chain().focus().toggleCodeBlock().run()}
    isActive={editor.isActive("codeBlock")}
  >
    Code Block
  </ToolbarButton>

  <ToolbarButton
    onClick={() => editor.chain().focus().toggleBlockquote().run()}
    isActive={editor.isActive("blockquote")}
  >
    Blockquote
  </ToolbarButton>

  <ToolbarButton onClick={() => editor.chain().focus().setHorizontalRule().run()}>
    Horizontal Rule
  </ToolbarButton>

  <ToolbarButton onClick={() => editor.chain().focus().setHardBreak().run()}>
    Hard Break
  </ToolbarButton>

  <ToolbarButton
    onClick={() => editor.chain().focus().undo().run()}
    disabled={!editor.can().chain().focus().undo().run()}
  >
    Undo
  </ToolbarButton>

  <ToolbarButton
    onClick={() => editor.chain().focus().redo().run()}
    disabled={!editor.can().chain().focus().redo().run()}
  >
    Redo
  </ToolbarButton>

  <button
        onClick={() => editor.chain().focus().setColor("#FF5733").run()}
        className="p-2 bg-red-500 text-white rounded-md"
      >
        Red Text
      </button>

  <ToolbarButton
    onClick={() => editor.chain().focus().setColor("#958DF1").run()}
    isActive={editor.isActive("textStyle", { color: "#958DF1" })}
  >
    Purple
  </ToolbarButton>
</div>

      </div>
<div className='flex flex-col justify-center items-center'>
      <EditorContent className=' bg-gray-300 p-5 m-5 rounded-2xl w-[60%] h-60' editor={editor} />
      
<div>
      <Button onClick={()=>save()} size='md' text='SAVE' color='bg-purple-500' textcol='white' /> 
      </div>
      </div>
   </div>
  )
}

export default Tiptap

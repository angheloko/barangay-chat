<template>
  <div class="editor">
    <editor-content :editor="editor" />
    <editor-menu-bar v-slot="{ commands, isActive }" :editor="editor">
      <div class="menubar">
        <button
          class="menubar__button"
          :class="{ 'menubar__button--active': isActive.bold() }"
          @click="commands.bold"
        >
          <icon-format-bold class="menubar__icon" />
        </button>
        <button
          class="menubar__button"
          :class="{ 'menubar__button--active': isActive.italic() }"
          @click="commands.italic"
        >
          <icon-format-italic class="menubar__icon" />
        </button>
        <button
          :class="{ 'menubar__button--active': isActive.bullet_list() }"
          class="menubar__button"
          @click="commands.bullet_list"
        >
          <icon-format-list-bulleted class="menubar__icon" />
        </button>
        <button
          :class="{ 'menubar__button--active': isActive.ordered_list() }"
          class="menubar__button"
          @click="commands.ordered_list"
        >
          <icon-format-list-numbered class="menubar__icon" />
        </button>
      </div>
    </editor-menu-bar>
  </div>
</template>

<script>
import { Editor, EditorContent, EditorMenuBar } from 'tiptap'
import { Bold, Italic, OrderedList, BulletList, ListItem, Placeholder } from 'tiptap-extensions'
import IconFormatBold from './icons/IconFormatBold'
import IconFormatItalic from './icons/IconFormatItalic'
import IconFormatListBulleted from './icons/IconFormatListBulleted'
import IconFormatListNumbered from './icons/IconFormatListNumbered'
export default {
  name: 'Editor',
  components: {
    EditorContent,
    EditorMenuBar,
    IconFormatBold,
    IconFormatItalic,
    IconFormatListBulleted,
    IconFormatListNumbered
  },
  data () {
    return {
      editor: null
    }
  },
  mounted () {
    this.editor = new Editor({
      extensions: [
        new Bold(),
        new Italic(),
        new OrderedList(),
        new BulletList(),
        new ListItem(),
        new Placeholder({
          emptyEditorClass: 'editor--empty',
          emptyNodeClass: 'editor__node--empty',
          emptyNodeText: 'Message barangay 1',
          showOnlyWhenEditable: true,
          showOnlyCurrent: true
        })
      ]
    })
  },
  beforeDestroy () {
    this.editor.destroy()
  }
}
</script>

<style scoped>
.menubar__button {
  @apply p-2 bg-gray-200 rounded;
}
.menubar__button:hover,
.menubar__button--active {
  @apply bg-gray-400;
}
.menubar__button:focus {
  outline: none;
}
.menubar__icon {
  @apply w-5 h-5 fill-current;
}
</style>

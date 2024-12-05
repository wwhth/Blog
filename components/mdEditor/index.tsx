import { useState } from 'react';
import { MdPreview, MdCatalog } from 'md-editor-rt';
import 'md-editor-rt/lib/preview.css';

 const editorMD =() => {
  const [id] = useState('preview-only');
  const [scrollElement] = useState(document.documentElement);
  const [text] = useState('hello md-editor-rt！');

  return (
    <>
      <MdPreview id={id} modelValue={text} />
      <MdCatalog editorId={id} scrollElement={scrollElement} />
    </>
  );
 };
 export default editorMD
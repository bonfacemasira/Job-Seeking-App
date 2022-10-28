import React, { useRef } from "react";
import JoditEditor from "jodit-react";

import RichTextCSS from "./RichText.module.css";

function RichText({setValue, value}){
  const editor = useRef(null);
  return (
    //RichText creates a table to add html text
    // not clearing the content after submission
    <div className={RichTextCSS.editor}>
      <JoditEditor ref={editor} onChange={(content) => setValue(content)} value={value} />
    </div>
  );
}

export default RichText;

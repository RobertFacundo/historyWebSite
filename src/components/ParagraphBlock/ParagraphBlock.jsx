import React from "react";
import ReactMarkdown from 'react-markdown';
import rehypeRaw from "rehype-raw";

import '../../styles/ParagraphBlock.css'

function ParagraphBlock({ content }) {

    console.log(content, 'content!!!!')
    return (
        <div className="section-content-block">
            <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                {content}
            </ReactMarkdown>
        </div>
    );
}

export default ParagraphBlock;
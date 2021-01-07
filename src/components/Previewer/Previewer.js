import React from 'react'
import marked from "marked"
import classes from "./Previewer.module.css";
const Previewer = (props) => {
	const createPreview = () => {
		const rawMarkdown= marked(props.preview, {gfm:true, breaks:true});
		 return {__html :rawMarkdown }
	 }
	return (
		<div id="preview" dangerouslySetInnerHTML={createPreview()} className={classes.Preview}  />
			
	)
}

export default Previewer

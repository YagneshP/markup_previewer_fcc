import React,{useState, useEffect} from 'react'
import classes from "./Markup.module.css"

import Previewer from '../Previewer/Previewer';
const Markup = () => {
	const [markupText, setMarkupText] = useState(``);
	useEffect(()=>{
		setMarkupText(
			`# Welcome to my React Markdown Previewer!   
  ## This is a sub-heading...
  ### And here's some other cool stuff:
Heres some code,\`<div></div>\`, between 2 backticks.
${"```"}
		// this is multi-line code:
		
		function anotherExample(firstLine, lastLine) {
			if (firstLine == ${'```'} && lastLine == ${'```'}) {
				return multiLineCode;
			}
		}
 ${"```"}
		
You can also make text **bold**... whoa!
		Or _italic_.
		Or... wait for it... **_both!_**
		And feel free to go crazy ~~crossing stuff out~~.
		
There's also [links](https://www.freecodecamp.com), and
> Block Quotes!
		

		
- And of course there are lists.
- Some are bulleted.
- With different indentation levels.
- That look like this.
		
		
1. And there are numbererd lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:
		
![React Logo w/ Text]('https://goo.gl/Umyytc')`);

	},[])
  

	const handleChange = (event) =>{   
		setMarkupText(event.target.value)  
	}
	return (

 <div className={classes.Can}> 
 		<div className={`${classes.Box} ${classes.Box_1}`} >
		 		<h3 >Markup Editor </h3> 
		
				<form >
					<textarea value={markupText} onChange={handleChange} id="editor" className={classes.TextArea} />
				</form>
		 </div> 
		 <div className={`${classes.Box} ${classes.Box_2}`} > 
				<h3>Preview Editor</h3>
				<Previewer preview={markupText}  />
			</div> 
</div>
)
}

export default Markup

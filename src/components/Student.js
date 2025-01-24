import React from 'react';
import { students } from './datas/studentList.js';
function Student({student}){
	return(
		<div>
			<h3>{student.name}</h3>
			<p>Age: {student.age}</p>
		</div>
		)
}

export default Student;
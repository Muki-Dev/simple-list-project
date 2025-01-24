import React from 'react';
import '../styles/student.css';
function Student({student}){
	return(
		<div className='student-card'>
			<h3>{student.name}</h3>
			<p>Age: {student.age}</p>
		</div>
		)
}

export default Student;
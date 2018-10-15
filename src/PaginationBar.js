import React, { Component } from 'react';

const PaginationBar = props => {
	
	const indexSize = Math.floor(props.items.length/6);
	const itemsLength = props.items.length;
	
	let isDeficient=false;          // 가져오는 갯수가 6개 미만 적으면 true
	
	if(itemsLength < 7){
		isDeficient=true;
	}
	
	const paging = new Array(indexSize).fill(1).map((value,index)=>{
		
		if(!isDeficient){
			return <a onClick={e =>{props.changePageIndex(index+1)}}>{index+1}</a>
		}else{
			return <a onClick={e =>{props.changePageIndex(1)}}>1</a>;	  
		}
	})
	
	
	return (
		<div style={{ margin: 'auto', marginTop: 15 }}>
			<a href="#">&laquo;</a>
			{paging}
			<a href="#">&raquo;</a>
		</div>
	);
};
export default PaginationBar;
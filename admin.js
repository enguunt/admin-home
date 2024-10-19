const title = document.querySelector('.title');
const img = document.querySelector('.image');
const desc = document.querySelector('.desc');
const postBtn = document.querySelector('.post');
let i=1;
let data2;
function savePost(){
		// localstorage -> setItem () hadaglah, getItem() avah 
		// [0] -> massive/array, key:value {} -> object 
		//let data = [title.value, img.value, desc.value ];
		if(title.value=="" || img.value=="" || desc.value==""){
			alert("Cannot be empty");
		}else{
			i++;
			 data2 = {
			id : i,
			title : title.value,
			img : img.value,
			desc : desc.value,
		}
		let sav = JSON.parse(localStorage.getItem("post")) || [];
		sav.push(data2);
		// pop hamgn ariin ustgan
		// unshift() -> a = [5,6,7]; a.unshift => [5,6]; ardn nemn
		// a = []; -> a.push(1); -> [1];
		// JSON.stringify() -> String/text ruu hurvuuleh
		localStorage.setItem("post", JSON.stringify(sav));
		}
		
		
		
}
postBtn.addEventListener('click',()=>{
	savePost();
	//window.open("index.html", "_blank");
});

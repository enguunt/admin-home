const title = document.querySelector('.title');
const img = document.querySelector('.image');
const desc = document.querySelector('.desc');
let allpost = '';
function getPost(){
	//getItem
	let  get = localStorage.getItem('post');
	// JSON.parse() -> object ruu  hurwuulne
	let jsonPost = JSON.parse(get);
	console.log(jsonPost);
	//.slice(0,5);
	jsonPost.slice(0,3).map(
		post =>{
			console.log(post.img);
			allpost +=`
			<h2 class="title">${post.title}</h2>
			<img src="${post.img}" class="image">
			<p class="desc">${post.desc}</p>
			`
		}
	
	);
	
	
	
	
	document.querySelector('.display').innerHTML = allpost;
	img.style.width='500px';
}
getPost();
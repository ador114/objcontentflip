const objs = [
	{
		"id": 1,
		"name": "adhfjadhsf;ha",
		"name_en": "adhfjadhsf;ha",
		"name_ru": null,
		"about": "",
		"about_en": "",
		"about_ru": "",
		"picture": "http://localhost:8000/images/0.png",
		"file": "http://localhost:8000/upload/file.png",
		"after_adv": false,
		"created_at": "2023-11-19T12:16:19.665514Z",
		"updated_at": "2023-11-19T20:07:44.569860Z",
		"type": 2,
		"category": 1,
	},
	{
		"id": 2,
		"name": "hafkjdfhahd",
		"name_en": "hafkjdfhahd",
		"name_ru": null,
		"about": "",
		"about_en": "",
		"about_ru": "",
		"picture": "http://localhost:8000/images/0_8GYRmml.png",
		"file": "http://localhost:8000/upload/file_RpNlu2c.png",
		"after_adv": false,
		"created_at": "2023-11-19T12:17:21.128719Z",
		"updated_at": "2023-11-19T13:09:41.228475Z",
		"type": 2,
		"category": 1,
	},
	{
		"id": 3,
		"name": "hafkj",
		"name_en": "hafkj",
		"name_ru": null,
		"about": "",
		"about_en": "",
		"about_ru": "",
		"picture": "http://localhost:8000/images/0_8GYRmml.png",
		"file": "http://localhost:8000/upload/file_RpNlu2c.png",
		"after_adv": false,
		"created_at": "2023-11-19T12:17:21.128719Z",
		"updated_at": "2023-11-19T13:09:41.228475Z",
		"type": 2,
		"category": 1,
	},
	{
		"id": 4,
		"name": "ghjgjh",
		"name_en": "ghjgjh",
		"name_ru": null,
		"about": "",
		"about_en": "",
		"about_ru": "",
		"picture": "http://localhost:8000/images/0_8GYRmml.png",
		"file": "http://localhost:8000/upload/file_RpNlu2c.png",
		"after_adv": false,
		"created_at": "2023-11-19T12:17:21.128719Z",
		"updated_at": "2023-11-19T13:09:41.228475Z",
		"type": 2,
		"category": 1,
	},
	{
		"id": 5,
		"name": "wsdrcf",
		"name_en": "wsdrcf",
		"name_ru": null,
		"about": "",
		"about_en": "",
		"about_ru": "",
		"picture": "http://localhost:8000/images/0_8GYRmml.png",
		"file": "http://localhost:8000/upload/file_RpNlu2c.png",
		"after_adv": false,
		"created_at": "2023-11-19T12:17:21.128719Z",
		"updated_at": "2023-11-19T13:09:41.228475Z",
		"type": 2,
		"category": 1,
	}
];

const objSpace = document.querySelector('.obj-space');
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');
let nowPage = 0;

let objDiv = document.createElement('div');
objDiv.classList.add('obj-div');
objSpace.appendChild(objDiv);

document.addEventListener('DOMContentLoaded', iterObj(objs[nowPage]));

function iterObj(obj){
	objDiv.innerHTML = ''
	for (const key in obj){
		const paragr = document.createElement('p');
		paragr.innerText = obj[key];
		objDiv.append(paragr);
	}		
	console.log(obj.id + ' is the id of current obj');

	nowPage = objs.indexOf(obj);

	if ((obj == objs[0])){
		console.log('cont-undef-left');
		arrowLeft.classList.add('arrow-invisible');
		arrowLeft.disabled = true;
	} else {
		arrowLeft.classList.remove('arrow-invisible');
		arrowLeft.disabled = false;
	}
	if (obj == objs[objs.length-1]){
		console.log('cont-undef-right');
		arrowRight.classList.add('arrow-invisible');
		arrowRight.disabled = true;
	} else {
		arrowRight.classList.remove('arrow-invisible');
		arrowRight.disabled = false;
	}
}


arrowLeft.addEventListener('click', () => iterObj(objs[nowPage-1]));
arrowRight.addEventListener('click', () => iterObj(objs[nowPage+1]));
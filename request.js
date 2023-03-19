function GetRequests(id) {
	let endpoint = "";
	if(id != null){
		endpoint +="/"+id;
	}
	let xhr = new XMLHttpRequest();
	// define the request
	xhr.open('GET', 'http://localhost:3000/employees'+endpoint, false);

	// Track the state changes of the request.
	xhr.onreadystatechange = function () {
		const DONE = 4; // readyState 4 means the request is done.
		const OK = 200; // status 200 is a successful return.
		if (xhr.readyState === DONE) {
			if (xhr.status === OK) {
				return xhr.responseText // 'This is the output.'
			} else {
				console.log('Error: ' + xhr.status); // An error occurred during the request.
			}
		}
	};
	// Send the request to send-ajax-data.php
	xhr.send(null);
}
const url = "http://localhost:3000/employees";
// let Getrequest = (anyId) => {
//     return new Promise((resolve, reject) => {
//         let xhr = new XMLHttpRequest();
// 		let u = url+"/"+anyId;
//         xhr.open("GET",u);
//         xhr.onload = () => {
//             if (xhr.status >= 200 && xhr.status < 300) {
//                 resolve(xhr.response);
//             } else {
//                 reject(xhr.statusText);
//             }
//         };
//         xhr.onerror = () => reject(xhr.statusText);
//         xhr.send(null);
//     });
// };
let GetRequest = async (id) =>{
	let u= url;
	if(id!=null){
		u = url+"/"+id;
	}
	var resp = await fetch(u);
	var data = await resp.json();
	return data;
}
let GetRe = ()=>{
	return fetch(url);
}
let DeleteRequest = async (id) =>{
	let u= url;
	if(id!=null){
		u = url+"/"+id;
	}
	var resp = await fetch(u,{method:"DELETE"});
	var data = await resp.json();
	return data;
}
let Postrequest =async (employee) => {
	var re = await fetch(url, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(employee)
	});
	var data = await re.json();
};
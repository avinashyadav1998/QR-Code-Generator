'use strict'

const qr = require('qr-image');
const fs = require('fs');
const argv = process.argv;



//let link = "https://www."  + argv[2];   // link :- "http://aitpune.com"
let link = argv[2];
let name  = argv[3];  // name of QRcode :- ait.png



function qrgen(data,file) {
			let dataToEncode = data || null ;
			let outImage = file || null;
			if(dataToEncode!=null && outImage!==null) {
				qr.image(dataToEncode, {
					type: 'png',
					size: 20
				}).pipe(fs.createWriteStream(outImage));
				console.log("QR code genrated");
			}
			else { 
				console.log("\nError it is : ")
				console.log("after node QR wirte link (eg: aitpune.com ) and name (pic1) of QR you want to give to pic\n");
			 }
		}

//qrgen("http://aitpune.com","ait.png")

qrgen(link,name);



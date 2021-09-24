//buat elemen baru
const pBaru = document.createElement('p');
const teksPBaru = document.createTextNode('Paragraf Baru');

//simpan tulisan ke dalam paragraf
pBaru.appendChild(teksPBaru);

//simpan pBaru di akhir section A
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);

//buat elemen baru
const liBaru = document.createElement('li');
const textLiBaru = document.createTextNode('Item Baru');

liBaru.appendChild(textLiBaru);

//insertBefore

const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2) ');

ul.insertBefore(liBaru, li2);

//removeChild

const link = document.getElementsByTagName('a')[0];
sectionA.removeChild(link);

//replaceChild

const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');

const h2Baru = document.createElement('h2');
const teksh2Baru = document.createTextNode('Judul baru');

h2Baru.appendChild(teksh2Baru);
sectionB.replaceChild(h2Baru, p4);





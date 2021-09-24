const judul= document.getElementById('judul');
judul.style.color = 'blue';
judul.style.backgroundColor = 'lightblue';
judul.innerHTML = 'Nama Lengkap';


const p = document.getElementsByTagName('p');
//p[1].style.backgroundColor = 'lightblue';
//p[2].style.backgroundColor = 'lightblue';
//p[3].style.backgroundColor = 'lightblue';
//p[4].style.backgroundColor = 'lightblue';

for(let i = 0; i < p.length; i++){
    p[i].style.backgroundColor = 'lightblue';
}

const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontSize = '50px';

const p1 = document.getElementsByClassName('p1');
p1[0].innerHTML = "p1 diubah";

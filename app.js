'strict';


let formFilm = document.getElementById('formFilm');
let tableFilm = document.getElementById('tableFilm');

let imageArr=[
  'action.png',
  'adventure.png',

  'action.png' ,
  'adventure.png' ,
  'animation.png' ,
  'comedy.png' ,
  'detective.png' ,
  'fantasy.png' ,
  'history.png' ,
  'horror.png' ,
  'musical.png' ,
  'pirate.png' ,
  'romantic.png' ,
  ' sci-fi.png',
  'war.png',
  ' western.png',
];


let filmArr=[];
function Film (image , name , release, categoryofimg ){
  this.name=name;
  this.release=release;
  this.categoryofimg=categoryofimg;
  Film.filmArr.push(this);
  //this.image=`./img/${this.image}`;

  Film.imageArr.push(this);
}

Film.filmArr=[];
//Film.imageArr=[];

getLocal();

for(let i= 0; i<imageArr.length; i++){
  new Film (imageArr[i].split('.')[0], imageArr[i]);
}


// header table

function headertable(){
  let tr1 =document.createElement('tr');
  tableFilm.appendChild(tr1);

  let td1 = document.createElement('td');
  td1.textContent='Remove';
  tr1.appendChild(td1);

  let td2 = document.createElement('td');
  td2.textContent='Image';
  tr1.appendChild(td2);

  let td3 = document.createElement('td');
  td3.textContent='Name';
  tr1.appendChild(td3);


  let td4 = document.createElement('td');
  td4.textContent='release';
  tr1.appendChild(td4);


}

headertable();

Film.prototype.render = function(){
  let tr1 =document.createElement('tr');
  tableFilm.appendChild(tr1);

  let td1 = document.createElement('td');
  td1.textContent='X';
  tr1.appendChild(td1);

  let td2 = document.createElement('td');
  td2.textContent=this.image;
  tr1.appendChild(td2);

  let td3 = document.createElement('td');
  td3.textContent=this.release;
  tr1.appendChild(td3);


  let td4 = document.createElement('td');
  td4.textContent=this.name;
  tr1.appendChild(td4);


};



//  function render (newFilm){

//     let tr1 =document.createElement('tr');
//      tableFilm.appendChild(tr1);

//      let td1 = document.createElement('td');
//      td1.textContent='X';
//      tr1.appendChild(td1);

//      let td2 = document.createElement('td');
//      td2.textContent=newFilm.image.src;
//      tr1.appendChild(td2);

//      let td3 = document.createElement('td');
//      td3.textContent=newFilm.name;
//      tr1.appendChild(td3);


//     let td4 = document.createElement('td');
//      td4.textContent=newFilm.release;
//      tr1.appendChild(td4);


//    };



formFilm.addEventListener ('submit', formListener);

function formListener(event){
  event.preventDefault();
  let name =event.target.name.value;
  let release =event.target.release.value;
  let categoryofimg =event.target.categoryofimg.value;
  let newFilm = new Film ( name , release, categoryofimg);

newFilm.render();

 
 setLocal();

}


function setLocal(){
  localStorage.saveFilm=JSON.stringify(filmArr);
}

function getLocal(){
  if (localStorage.Film){
    let data= JSON.parse(localStorage.Film);
    for(let i= 0 ; i<data.length; i++){
      let newFilm = new Film (data[i].image ,data[i].name, data[i].release, data[i].category );

      newFilm.render();
    }
  }
}



Film.addEventListener('click', remove);

function remove(ev){
  if(ev.target.textContent === 'X'){
    Film.filmArr.splice(ev.target.parentElement.rowIndex-1,1);
    setLocal();
  }
}


remove();

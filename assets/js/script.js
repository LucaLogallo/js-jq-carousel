//mi referenzio le cose che mi servono per poter cambiare le immagini

//referenzio il fas fa-angle-right per scorrere le immagini verso destra e il fas fa-angle-left per scorrere le immagini verso sinistra
$(function(){
  var imgScrollRight = $('.wrapper .fas.fa-angle-right');
  
  var imgScrollLeft = $('.wrapper .fas.fa-angle-left');

  imgScrollRight.click(nextImg);//richiamo funzione che passa a immagine successiva
  imgScrollLeft.click(prevImg);//richiamo funzione che passa a immagine precedente

  function nextImg(){
    var imgActive = $('.wrapper .box-img img.active');//mi salvo la prima immagine che si vede in una variabile locale del js
    var indexActive = $('.wrapper .box-img-index i.far.fa-circle.active')//mi salvo il primo pallono attivo in relazione alla prima immagine

    //adesso rimuovo la classe active ad entrambe le variabili che mi sono salvato

    imgActive.removeClass('active');
    indexActive.removeClass('active');

    imgActive.next('img').addClass('active');//ho preso l'immagine successiva(ricordati che imgActive è referenziato all'immagine nell'html) e dopo aver tolto l'active all'elemento che sto puntanto vado al successivo con next e gli aggiungo la classe active. faccio la stessa cosa anche per il far fa-circle referenziato in indexActive
    indexActive.next('.far.fa-circle').addClass('active');

    

    //controllo che non sia l'ultima immagine tramite il length.ovvero una volta che le immagini finiscono il length diventa 0 e rimane 1 fin quando trova le immagini
    //quindi teoricamente noi abbiamo un array di immagini e scorrendole con il next noi abbiamo una proprietò length che rimane 1 fin quando questo array non è finito. una volta che abbiamo preso tutti gli elementi lui "esce" da questo ciclo che scorre l'array e restituisce 0 nell'attributo length quindi se la proprietà length dell'immagine.next è uguale a 1 vuol dire che non ha ancora finito lo scorrimento delle immagini altrimenti quando la length di immagine.next restituisce 0 vuol dire che non troverà più immagini perchè sono finite e dovremo fare in modo che ritorni dinuovo all'inizio con l'attributo first e viceversa per il last

    if(imgActive.next('img').length === 0){//vedo se c'è un immagine successiva se la .length dell'immagine successiva mi restituisce 0 allora io punterò alla prima immagine tramite first e gli aggiungerò la classe active con activeClasse e contemporaneamente troverò il primo farfacircle tramite il first e gli aggiungerò la classe active in modo tale che rincominciano da capo 
      $('.wrapper .box-img img').first().addClass('active');
      $('.wrapper i.far.fa-circle').first().addClass('active');
    }else{//altrimenti all'immagine e al farfacircle successivo aggiungerò semplicemente la classe active
      indexActive.next('i.far.fa-circle').addClass('active')
      imgActive.next('img').addClass('active');
    }
  }

  //userò la stessa logica che ho usato per l'immagine successiva solo che al posto di usare next() userò prev()
  function prevImg(){
    var imgActive = $('.wrapper .box-img img.active');
    var indexActive = $('.wrapper .box-img-index i.far.fa-circle.active');

    imgActive.removeClass('active');
    indexActive.removeClass('active');

    if(imgActive.prev('img').length === 0){
      $('.wrapper .box-img img').last().addClass('active');
      $('.wrapper .box-img-index i.far.fa-circle').last().addClass('active');
    }else{
      imgActive.prev('img').addClass('active');
      indexActive.prev('i.far.fa-circle').addClass('active');
    }
  }


  /* bonus */
})




function menuclick(){


    const menu = document.querySelector('.cabecalho header i');






const nav = document.querySelector('.cabecalho header nav ul');








    
menu.addEventListener('click' , function inserir(){




    nav.classList.toggle('ativo');

})


}


menuclick();



function lista () {






const lista = document.querySelectorAll('.descobrir p');






const listaicone = document.querySelectorAll('.descobrir i');





console.log(lista);





console.log(listaicone);




lista[0].classList.add('ativo');





listaicone.forEach((item , index)=>{



    item.addEventListener('click' , function(){







        mover(index);
    })
});



function mover(index){

    lista.forEach((item) =>{



        item.classList.remove('ativo');
    });



    lista[index].classList.add('ativo');

}

}

lista();






function rolar(){


    const scroll = document.querySelectorAll('.js-scroll');

console.log(scroll);




const height = window.innerHeight * 0.6;




scroll[0].classList.add('ativo');



    scroll.forEach((section) => {




        const sectiontop = (section.getBoundingClientRect().top -height) < 0;






        if(sectiontop){



            section.classList.add('ativo');












        }

    })

}


window.addEventListener('scroll' , rolar);




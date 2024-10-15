
(function () {

const btnEliminacion=document.querySelectorAll(".btnEliminacion");

btnEliminacion.forEach(btn=>{
    btn.addEventListener('click',(e)=>{
        const confirmacion = confirm('Seguro de elimar el Campaña?');
        if(!confirmacion){
            e.preventDefault();
        }
    });
});
})();


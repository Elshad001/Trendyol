const sec1Slider=document.querySelector('.section1-slider');
const sec1NextBtn=document.querySelector('.sld-next-btn');
const sec1PrevBtn=document.querySelector('.sld-prev-btn');

sec1NextBtn.addEventListener('click',()=>
{
    let scrollAmount=300;
    sec1Slider.scrollLeft+=scrollAmount;
})

sec1PrevBtn.addEventListener('click',()=>
{
    let scrollAmount=300;
    sec1Slider.scrollLeft-=scrollAmount;
})
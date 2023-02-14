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


const sec3Slider=document.querySelector('.section3-slider');
const sec3NextBtn=document.querySelector('.sec3-next-btn');
const sec3PrevBtn=document.querySelector('.sec3-prev-btn');

sec3NextBtn.addEventListener('click',()=>
{
    let scrollAmount=300;
    sec3Slider.scrollLeft+=scrollAmount;
})

sec3PrevBtn.addEventListener('click',()=>
{
    let scrollAmount=300;
    sec3Slider.scrollLeft-=scrollAmount;
})
const adList = new Swiper('.ad_swiper',{
    slidesPerView:1, //전체개수가 아니라 보이는 개수가 기준
    spaceBetween:10, //사이 여백
    autoplay:{delay:3000},
    loop:true,
    pagination: {
        el: '.swiper-pagination',
        type:'fraction'

    },
});

const newSwiper = new Swiper('.new_swiper', {
    slidesPerView: 1, // 슬라이드에 하나의 UL만 보여짐 (ul 내부에 상품 4개)
    //autoplay:{delay:3000},
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        type:'bullets'
    },
});

const olgaSwiper = new Swiper('.olga_swiper', {
    slidesPerView:3.2, //전체개수가 아니라 보이는 개수가 기준
    spaceBetween:10, //사이 여백
    autoplay:{delay:2000},
    loop:true,
});

const bestSwiper = new Swiper('.best_swiper', {
    slidesPerView: 1, // 슬라이드에 하나의 UL만 보여짐 (ul 내부에 상품 4개)
    //autoplay:{delay:3000},
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        type:'bullets'
    },
});

const mealSwiper = new Swiper('.meal_swiper', {
    slidesPerView:3.1, //전체개수가 아니라 보이는 개수가 기준
    spaceBetween:10, //사이 여백
    autoplay:{delay:2000},
    loop:true,
    scrollbar: {
	el: '.swiper-scrollbar',
    },
});

const recommenSwiper = new Swiper('.recommen_swiper', {
    slidesPerView: 1, // 슬라이드에 하나의 UL만 보여짐 (ul 내부에 상품 4개)
    //autoplay:{delay:3000},
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        type:'bullets'
    },
});

const shortSwiper = new Swiper('.shorts_swiper', {
    slidesPerView: 5.7, 
    spaceBetween:0,
    autoplay:{delay:3000},
    loop: true,
});
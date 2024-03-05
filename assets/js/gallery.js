    const animals = [
        {
            imgSrc: "assets/images/gallery/gallery_img_1.jpg",
            species: "Köpek",
            speciesTag: "dogs",
            name: "Boncuk"
        },
        {
            imgSrc: "assets/images/gallery/gallery_img_2.jpg",
            species: "Kedi",
            speciesTag: "kittens",
            name: "Mırmır"
        },
        {
            imgSrc: "assets/images/gallery/gallery_img_3.jpg",
            species: "Köpek",
            speciesTag: "dogs",
            name: "Pamuk"
        },
        {
            imgSrc: "assets/images/gallery/gallery_img_4.jpg",
            species: "Kedi",
            speciesTag: "kittens",
            name: "Tekir"
        },
        {
            imgSrc: "assets/images/gallery/gallery_img_5.jpg",
            species: "Köpek",
            speciesTag: "dogs",
            name: "Fıstık"
        },
        {
            imgSrc: "assets/images/gallery/gallery_img_6.jpg",
            species: "Kuş",
            name: "Şeker"
        },
        {
            imgSrc: "assets/images/gallery/gallery_img_7.jpg",
            species: "Köpek",
            speciesTag: "dogs",
            name: "Luna"
        },
        {
            imgSrc: "assets/images/gallery/gallery_img_8.jpg",
            species: "Yavru Kedi",
            speciesTag: "cats",
            name: "Zeytin"
        },
        {
            imgSrc: "assets/images/gallery/gallery_img_9.jpg",
            species: "Köpek",
            speciesTag: "dogs",
            name: "Karamel"
        },
        {
            imgSrc: "assets/images/gallery/gallery_img_10.jpg",
            species: "Köpek",
            speciesTag: "dogs",
            name: "Şila"
        },
        {
            imgSrc: "assets/images/gallery/gallery_img_11.jpg",
            species: "Kedi",
            speciesTag: "kittens",
            name: "Pamuk"
        },
        {
            imgSrc: "assets/images/gallery/gallery_img_12.jpg",
            species: "Köpek",
            speciesTag: "dogs",
            name: "Cici"
        }
    ];

    document.addEventListener('DOMContentLoaded', function() {
        AnimalstoDisplay();
    });

    function AnimalstoDisplay(animals_gonna_show = animals) {

        const galleryContainer = document.querySelector('.all-gallary-container');

        animals_gonna_show.forEach(animal => {
            const eachAnimal = document.createElement("div")
            eachAnimal.className = `gallery-item mb-4 col-md-6 col-xl-3 col-lg-4 col-12 ${animal.speciesTag}`
            eachAnimal.innerHTML = `
                    <div class="captured-gallery-item">
                        <div class="gallery-content">
                            <span href="${animal.imgSrc}" title="Sophie Cute"><i class="icofont-plus"></i></span>
                            <h3>${animal.name}</h3>
                            <h5>${animal.species} </h5>
                        </div>
                        <img src="${animal.imgSrc}" class="rounded" alt="">                                          
                    </div>
            `;
        galleryContainer.appendChild(eachAnimal)
        })
        
    }

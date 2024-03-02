const blogs = [
    {
      id: 1,
      title: "Patili Dostlarımız için Aşının Önemi",
      shortDescription: "Evcil hayvanlarımızın sağlıklı ve mutlu bir yaşam sürdürebilmeleri için aşıların önemi.",
      date: "2024-03-01",
      author: "Dr. Ayşe Yılmaz",
      image: "vaccine-for-pets.jpg",
      longDescription: "Evcil hayvanlarımız ailemizin bir parçasıdır ve onların sağlığını korumak bizim sorumluluğumuzdadır. Aşılar, hayvanların çeşitli hastalıklara karşı korunmasını sağlar ve uzun vadede sağlıklı bir yaşam sürmelerine olanak tanır. Köpekler için parvovirüs, hepatit, leptospiroz gibi hastalıklar; kediler için ise panleukopeni, kedi lösemisi ve kedi üst solunum yolu hastalıkları aşı ile önlenebilir. Aşı takvimine uyulması, patili dostlarımızın hastalıklara karşı korunmasında kritik bir öneme sahiptir."
    },
    {
      id: 2,
      title: "Patili Dostlarımızı Neden Kısırlaştırmalıyız?",
      shortDescription: "Evcil hayvanlarda kısırlaştırmanın faydaları, sağlıklı bir yaşam için neden önemli olduğu.",
      date: "2024-03-08",
      author: "Dr. Mehmet Öz",
      image: "neutering-pets.jpg",
      longDescription: "Kısırlaştırma, hem erkek hem de dişi evcil hayvanlar için önerilen bir işlemdir. Bu işlem, evcil hayvanlarınızın daha uzun ve sağlıklı bir yaşam sürmesine yardımcı olur. Kısırlaştırılmış hayvanlar, belirli kanser türleri ve diğer sağlık sorunları riskinin azalmasının yanı sıra, daha sakin ve evde daha mutlu olma eğilimindedir. Ayrıca, istenmeyen yavruların doğumunu önleyerek hayvan barınaklarındaki kalabalığın azalmasına yardımcı olur. Her evcil hayvan sahibinin, sorumlu bir şekilde kısırlaştırma işlemi yaptırması toplum sağlığı için de önemlidir."
    },
    {
      id: 3,
      title: "Evcil Hayvanlarda Diyabet Yönetimi",
      shortDescription: "Evcil hayvanlarınızda diyabeti tanıma ve yönetme yolları.",
      date: "2024-03-15",
      author: "Dr. Elif Kaya",
      image: "managing-diabetes-in-pets.jpg",
      longDescription: "Diyabet, evcil hayvanlar arasında giderek daha yaygın hale gelen bir durumdur ve uygun yönetim ile kontrol altında tutulabilir. Diyabetli evcil hayvanlar için düzenli kan şeker seviyesi kontrolü, uygun diyet ve gerekirse insülin enjeksiyonları hayati önem taşır. Bu blog, evcil hayvan sahiplerine, diyabetli bir hayvanın günlük bakımında dikkat edilmesi gerekenler hakkında bilgi sağlar ve onların sağlıklı bir yaşam sürdürebilmeleri için ipuçları sunar."
    },
    {
      id: 4,
      title: "Evcil Hayvanlarda Alerjiler: Neler Yapılabilir?",
      shortDescription: "Evcil hayvanlarınızdaki alerjileri tanıma ve onlarla başa çıkma yöntemleri.",
      date: "2024-03-22",
      author: "Dr. Hasan Demir",
      image: "allergies-in-pets.jpg",
      longDescription: "Evcil hayvanlar, insanlar gibi alerjilere de maruz kalabilirler. Bu alerjiler, yiyeceklerden, çevresel faktörlerden veya parazit ısırıklarından kaynaklanabilir. Alerji belirtileri arasında kaşıntı, deride kızarıklık, tüy dökülmesi ve sindirim sorunları bulunur. Bu blogda, evcil hayvan alerjilerinin nasıl tanınacağı, önlenmesi ve tedavi edilmesi hakkında detaylı bilgiler yer almakta ve evcil hayvan sahiplerine pratik çözümler sunulmaktadır."
    },
    {
      id: 5,
      title: "Köpeklerde Davranış Sorunları ve Çözümleri",
      shortDescription: "Köpeklerinizde görülen davranış sorunlarını anlama ve bunları nasıl çözebileceğinize dair ipuçları.",
      date: "2024-03-29",
      author: "Dr. Sibel Güneş",
      image: "behavioral-issues-in-dogs.jpg",
      longDescription: "Köpeklerde davranış sorunları, çeşitli sebeplerden kaynaklanabilir ve uygun müdahale ile çözülebilir. Bu sorunlar arasında aşırı havlama, ısırma, ev içinde tuvaletini yapma ve ayrılık kaygısı bulunur. Davranışsal sorunların üstesinden gelmek için sabır, tutarlılık ve bazen profesyonel yardım gerekebilir. Bu blog, köpek sahiplerine, davranış sorunlarını nasıl tanıyacakları ve uygun eğitim teknikleri ile nasıl çözecekleri konusunda rehberlik eder."
    },
    {
      id: 6,
      title: "Kedilerde Tüy Bakımı ve Sağlığı",
      shortDescription: "Kedilerinizin tüy sağlığını korumak için yapılması gerekenler.",
      date: "2024-04-05",
      author: "Dr. Leyla Çetin",
      image: "fur-care-in-cats.jpg",
      longDescription: "Kedilerin tüy bakımı, genel sağlıklarının önemli bir parçasıdır. Düzenli tarama, tüy yumağı oluşumunu önler ve cildin sağlıklı kalmasına yardımcı olur. Ayrıca, tüy bakımı sırasında yapılacak dikkatli gözlemler, parazitlerin veya cilt sorunlarının erken teşhisine olanak tanır. Bu blog, kedilerinizin tüy sağlığını nasıl koruyacağınız konusunda detaylı bilgiler ve ipuçları sunar."
    },
    {
      id: 7,
      title: "Evcil Hayvanlarda Ağız ve Diş Sağlığı",
      shortDescription: "Evcil hayvanlarınızın ağız ve diş sağlığını korumanın önemi ve yöntemleri.",
      date: "2024-04-12",
      author: "Dr. Özge Karakaya",
      image: "dental-health-in-pets.jpg",
      longDescription: "Evcil hayvanların ağız ve diş sağlığı, genel sağlıkları üzerinde büyük bir etkiye sahiptir. Diş çürükleri ve diş eti hastalıkları, ağrıya ve yeme sorunlarına neden olabilir. Düzenli diş temizliği ve veteriner kontrolü, bu tür sorunların önlenmesinde hayati önem taşır. Bu blog, evcil hayvan sahiplerine, hayvanlarının ağız ve diş sağlığını nasıl koruyacakları hakkında kapsamlı bilgiler verir."
    },
    {
      id: 8,
      title: "Evcil Hayvanlar ve Çocuklar: Güvenli Bir Ortam Yaratmak",
      shortDescription: "Evcil hayvanlar ve çocuklar arasında güvenli ve sağlıklı bir ilişki kurmak için ipuçları.",
      date: "2024-04-19",
      author: "Dr. Murat Can",
      image: "pets-and-children.jpg",
      longDescription: "Evcil hayvanlar, çocukların sorumluluk almayı öğrenmelerine ve duygusal gelişimlerine katkıda bulunabilir. Ancak, çocuklar ve evcil hayvanlar arasında güvenli bir etkileşim sağlamak önemlidir. Bu blog, evcil hayvanların çocuklarla güvenli bir şekilde nasıl etkileşimde bulunabileceği, evcil hayvan sahipleri ve ebeveynlere pratik öneriler sunar."
    },
    {
      id: 9,
      title: "Evcil Hayvanlarda Obeziteyi Önleme",
      shortDescription: "Evcil hayvanlarınızın sağlıklı bir kiloda kalmasını sağlamak için yapılması gerekenler.",
      date: "2024-04-26",
      author: "Dr. Fatma Bilir",
      image: "preventing-obesity-in-pets.jpg",
      longDescription: "Evcil hayvanlarda obezite, çeşitli sağlık sorunlarına yol açabilir, bu yüzden onların ideal kiloda kalmasını sağlamak önemlidir. Sağlıklı beslenme, düzenli egzersiz ve veteriner kontrolü, obeziteyi önlemenin anahtarlarıdır. Bu blog, evcil hayvan sahiplerine, hayvanlarının sağlıklı bir kiloda nasıl kalabileceği konusunda rehberlik eder."
    },
    {
      id: 10,
      title: "Evcil Hayvanlar için Stresi Azaltma Yolları",
      shortDescription: "Evcil hayvanlarınızın stresini azaltmak ve onlara huzurlu bir ortam sağlamak için öneriler.",
      date: "2024-05-03",
      author: "Dr. Emre Korkmaz",
      image: "reducing-stress-in-pets.jpg",
      longDescription: "Tıpkı insanlar gibi, evcil hayvanlar da stres ve kaygı yaşayabilirler. Evcil hayvanınızın stresini azaltmak için sakin bir ortam sağlamak, düzenli oyun ve egzersiz zamanları ayırmak ve onlara güvenli bir sığınak sunmak önemlidir. Bu blog, evcil hayvan sahiplerine, hayvanlarının stresini nasıl azaltabilecekleri konusunda etkili yöntemler sunar."
    },
    {
        id: 11,
        title: "Patili Dostlarımız için Aşının Önemi",
        shortDescription: "Evcil hayvanlarımızın sağlıklı ve mutlu bir yaşam sürdürebilmeleri için aşıların önemi.",
        date: "2024-03-01",
        author: "Dr. Ayşe Yılmaz",
        image: "vaccine-for-pets.jpg",
        longDescription: "Evcil hayvanlarımız ailemizin bir parçasıdır ve onların sağlığını korumak bizim sorumluluğumuzdadır. Aşılar, hayvanların çeşitli hastalıklara karşı korunmasını sağlar ve uzun vadede sağlıklı bir yaşam sürmelerine olanak tanır. Köpekler için parvovirüs, hepatit, leptospiroz gibi hastalıklar; kediler için ise panleukopeni, kedi lösemisi ve kedi üst solunum yolu hastalıkları aşı ile önlenebilir. Aşı takvimine uyulması, patili dostlarımızın hastalıklara karşı korunmasında kritik bir öneme sahiptir."
      },
      {
        id: 12,
        title: "Patili Dostlarımızı Neden Kısırlaştırmalıyız?",
        shortDescription: "Evcil hayvanlarda kısırlaştırmanın faydaları, sağlıklı bir yaşam için neden önemli olduğu.",
        date: "2024-03-08",
        author: "Dr. Mehmet Öz",
        image: "neutering-pets.jpg",
        longDescription: "Kısırlaştırma, hem erkek hem de dişi evcil hayvanlar için önerilen bir işlemdir. Bu işlem, evcil hayvanlarınızın daha uzun ve sağlıklı bir yaşam sürmesine yardımcı olur. Kısırlaştırılmış hayvanlar, belirli kanser türleri ve diğer sağlık sorunları riskinin azalmasının yanı sıra, daha sakin ve evde daha mutlu olma eğilimindedir. Ayrıca, istenmeyen yavruların doğumunu önleyerek hayvan barınaklarındaki kalabalığın azalmasına yardımcı olur. Her evcil hayvan sahibinin, sorumlu bir şekilde kısırlaştırma işlemi yaptırması toplum sağlığı için de önemlidir."
      },
      {
        id: 13,
        title: "Evcil Hayvanlarda Diyabet Yönetimi",
        shortDescription: "Evcil hayvanlarınızda diyabeti tanıma ve yönetme yolları.",
        date: "2024-03-15",
        author: "Dr. Elif Kaya",
        image: "managing-diabetes-in-pets.jpg",
        longDescription: "Diyabet, evcil hayvanlar arasında giderek daha yaygın hale gelen bir durumdur ve uygun yönetim ile kontrol altında tutulabilir. Diyabetli evcil hayvanlar için düzenli kan şeker seviyesi kontrolü, uygun diyet ve gerekirse insülin enjeksiyonları hayati önem taşır. Bu blog, evcil hayvan sahiplerine, diyabetli bir hayvanın günlük bakımında dikkat edilmesi gerekenler hakkında bilgi sağlar ve onların sağlıklı bir yaşam sürdürebilmeleri için ipuçları sunar."
      },
      {
        id: 14,
        title: "Evcil Hayvanlarda Alerjiler: Neler Yapılabilir?",
        shortDescription: "Evcil hayvanlarınızdaki alerjileri tanıma ve onlarla başa çıkma yöntemleri.",
        date: "2024-03-22",
        author: "Dr. Hasan Demir",
        image: "allergies-in-pets.jpg",
        longDescription: "Evcil hayvanlar, insanlar gibi alerjilere de maruz kalabilirler. Bu alerjiler, yiyeceklerden, çevresel faktörlerden veya parazit ısırıklarından kaynaklanabilir. Alerji belirtileri arasında kaşıntı, deride kızarıklık, tüy dökülmesi ve sindirim sorunları bulunur. Bu blogda, evcil hayvan alerjilerinin nasıl tanınacağı, önlenmesi ve tedavi edilmesi hakkında detaylı bilgiler yer almakta ve evcil hayvan sahiplerine pratik çözümler sunulmaktadır."
      },
      {
        id: 15,
        title: "Köpeklerde Davranış Sorunları ve Çözümleri",
        shortDescription: "Köpeklerinizde görülen davranış sorunlarını anlama ve bunları nasıl çözebileceğinize dair ipuçları.",
        date: "2024-03-29",
        author: "Dr. Sibel Güneş",
        image: "behavioral-issues-in-dogs.jpg",
        longDescription: "Köpeklerde davranış sorunları, çeşitli sebeplerden kaynaklanabilir ve uygun müdahale ile çözülebilir. Bu sorunlar arasında aşırı havlama, ısırma, ev içinde tuvaletini yapma ve ayrılık kaygısı bulunur. Davranışsal sorunların üstesinden gelmek için sabır, tutarlılık ve bazen profesyonel yardım gerekebilir. Bu blog, köpek sahiplerine, davranış sorunlarını nasıl tanıyacakları ve uygun eğitim teknikleri ile nasıl çözecekleri konusunda rehberlik eder."
      },
      {
        id: 16,
        title: "Kedilerde Tüy Bakımı ve Sağlığı",
        shortDescription: "Kedilerinizin tüy sağlığını korumak için yapılması gerekenler.",
        date: "2024-04-05",
        author: "Dr. Leyla Çetin",
        image: "fur-care-in-cats.jpg",
        longDescription: "Kedilerin tüy bakımı, genel sağlıklarının önemli bir parçasıdır. Düzenli tarama, tüy yumağı oluşumunu önler ve cildin sağlıklı kalmasına yardımcı olur. Ayrıca, tüy bakımı sırasında yapılacak dikkatli gözlemler, parazitlerin veya cilt sorunlarının erken teşhisine olanak tanır. Bu blog, kedilerinizin tüy sağlığını nasıl koruyacağınız konusunda detaylı bilgiler ve ipuçları sunar."
      },
      {
        id: 17,
        title: "Evcil Hayvanlarda Ağız ve Diş Sağlığı",
        shortDescription: "Evcil hayvanlarınızın ağız ve diş sağlığını korumanın önemi ve yöntemleri.",
        date: "2024-04-12",
        author: "Dr. Özge Karakaya",
        image: "dental-health-in-pets.jpg",
        longDescription: "Evcil hayvanların ağız ve diş sağlığı, genel sağlıkları üzerinde büyük bir etkiye sahiptir. Diş çürükleri ve diş eti hastalıkları, ağrıya ve yeme sorunlarına neden olabilir. Düzenli diş temizliği ve veteriner kontrolü, bu tür sorunların önlenmesinde hayati önem taşır. Bu blog, evcil hayvan sahiplerine, hayvanlarının ağız ve diş sağlığını nasıl koruyacakları hakkında kapsamlı bilgiler verir."
      },
      {
        id: 18,
        title: "Evcil Hayvanlar ve Çocuklar: Güvenli Bir Ortam Yaratmak",
        shortDescription: "Evcil hayvanlar ve çocuklar arasında güvenli ve sağlıklı bir ilişki kurmak için ipuçları.",
        date: "2024-04-19",
        author: "Dr. Murat Can",
        image: "pets-and-children.jpg",
        longDescription: "Evcil hayvanlar, çocukların sorumluluk almayı öğrenmelerine ve duygusal gelişimlerine katkıda bulunabilir. Ancak, çocuklar ve evcil hayvanlar arasında güvenli bir etkileşim sağlamak önemlidir. Bu blog, evcil hayvanların çocuklarla güvenli bir şekilde nasıl etkileşimde bulunabileceği, evcil hayvan sahipleri ve ebeveynlere pratik öneriler sunar."
      },
      {
        id: 19,
        title: "Evcil Hayvanlarda Obeziteyi Önleme",
        shortDescription: "Evcil hayvanlarınızın sağlıklı bir kiloda kalmasını sağlamak için yapılması gerekenler.",
        date: "2024-04-26",
        author: "Dr. Fatma Bilir",
        image: "preventing-obesity-in-pets.jpg",
        longDescription: "Evcil hayvanlarda obezite, çeşitli sağlık sorunlarına yol açabilir, bu yüzden onların ideal kiloda kalmasını sağlamak önemlidir. Sağlıklı beslenme, düzenli egzersiz ve veteriner kontrolü, obeziteyi önlemenin anahtarlarıdır. Bu blog, evcil hayvan sahiplerine, hayvanlarının sağlıklı bir kiloda nasıl kalabileceği konusunda rehberlik eder."
      },
      {
        id: 20,
        title: "Evcil Hayvanlar için Stresi Azaltma Yolları",
        shortDescription: "Evcil hayvanlarınızın stresini azaltmak ve onlara huzurlu bir ortam sağlamak için öneriler.",
        date: "2024-05-03",
        author: "Dr. Emre Korkmaz",
        image: "reducing-stress-in-pets.jpg",
        longDescription: "Tıpkı insanlar gibi, evcil hayvanlar da stres ve kaygı yaşayabilirler. Evcil hayvanınızın stresini azaltmak için sakin bir ortam sağlamak, düzenli oyun ve egzersiz zamanları ayırmak ve onlara güvenli bir sığınak sunmak önemlidir. Bu blog, evcil hayvan sahiplerine, hayvanlarının stresini nasıl azaltabilecekleri konusunda etkili yöntemler sunar."
      }
  ];
  

document.addEventListener('DOMContentLoaded', function() {
    displayBlogs();
    setupSearch();
    const params = new URLSearchParams(window.location.search);
    const blogId = params.get('id'); // URL'den blog ID'sini al
    displaySingleBlog(blogId);
});

const blogsPerPage = 9;
let currentPage = 1;

function displayBlogs(page = 1, blogsToUse = blogs) {
    const startIndex = (page - 1) * blogsPerPage;
    const endIndex = page * blogsPerPage;
    const blogsToDisplay = blogsToUse.slice(startIndex, endIndex);

    const blogsContainer = document.querySelector('.row.row-cols-1.row-cols-md-3.row-cols-lg-3.row-cols-sm-1');
    blogsContainer.innerHTML = '';

    blogsToDisplay.forEach(blog => {
        const colDiv = document.createElement('div');
        colDiv.className = 'col mb-5';
        colDiv.innerHTML = `
            <div class="blog-wrap-modern">
                <div class="img">
                    <a href="blog-single.html?id=${blog.id}"><img src="assets/images/blog/blog_modern_4.jpg" alt=""></a>
                </div>
                <div class="content">
                    <h3 class="title">
                        <a href="blog-single.html?id=${blog.id}">${blog.title}</a>
                    </h3>
                    <div class="description">
                        <p>${blog.shortDescription}</p>
                    </div>
                    <div class="bottom-content">
                        <div class="thumb-author">
                            <img src="assets/images/testimonial_thumb_large_1.jpg" alt="">
                            ${blog.author}
                        </div>
                        <div class="date">${blog.date}</div>
                    </div>
                </div>
            </div>
        `;
        blogsContainer.appendChild(colDiv);
    });

    updatePagination(blogsToUse.length, page);
}

function updatePagination(totalBlogs, activePage) {
    const totalPages = Math.ceil(totalBlogs / blogsPerPage);
    const paginationContainer = document.querySelector('.theme-pagination nav .pagination');
    paginationContainer.innerHTML = '';

    createPageItem('«', activePage > 1, activePage - 1, paginationContainer);

    for (let i = 1; i <= totalPages; i++) {
        createPageItem(i, true, i, paginationContainer, i === activePage);
    }

    createPageItem('»', activePage < totalPages, activePage + 1, paginationContainer);
}

function createPageItem(text, clickable, page, container, isActive = false) {
    const pageItem = document.createElement('li');
    pageItem.className = `page-item ${!clickable ? 'disabled' : ''} ${isActive ? 'active' : ''}`;
    pageItem.innerHTML = `<a class="page-link" href="#">${text}</a>`;
    if (clickable) {
        pageItem.querySelector('a').addEventListener('click', (e) => {
            e.preventDefault();
            currentPage = page;
            displayBlogs(page);
        });
    }
    container.appendChild(pageItem);
}

function setupSearch() {
    const searchInput = document.querySelector('.sidebar-search input[type="text"]');
    const clearButton = document.querySelector('.sidebar-search button');

    // Anlık arama için 'input' olay dinleyicisi
    searchInput.addEventListener('input', function() {
        const searchTerm = searchInput.value.toLowerCase();
        if (searchTerm) {
            const filteredBlogs = blogs.filter(blog => blog.title.toLowerCase().includes(searchTerm));
            displayBlogs(1, filteredBlogs);
            currentPage = 1;
        } else {
            displayBlogs(); // Arama çubuğu boşsa tüm blogları tekrar listele
        }
    });

    // "X" butonuna tıklanınca işlevsellik
    clearButton.addEventListener('click', function(e) {
        e.preventDefault();
        searchInput.value = ''; // Arama çubuğunu temizle
        displayBlogs(); // Tüm blogları tekrar listele
        currentPage = 1;
    });
}
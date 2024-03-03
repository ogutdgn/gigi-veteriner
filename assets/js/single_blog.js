import { blogs_data } from "./blogs_data.js";
  
document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const blogId = params.get('id'); // URL'den blog ID'sini al
    console.log(blogId);
    displaySingleBlog(blogId);
});

function displaySingleBlog(blogId) {
    const blog = blogs_data.find(blog => blog.id === parseInt(blogId)); // ID'ye göre blogu bul

    if (blog) {
        const popular_blogs = document.querySelector(".list-unstyled")
        const blogs_div = document.querySelector(".blogs-page-info-div")
        const each_blog = document.createElement("div")
        each_blog.innerHTML = `
            <div>
                <div class="blog-wrap-modern single-entry">
                  <div class="img">
                      <img src="assets/images/blog/blog_modern_large.jpg" alt="">
                  </div>
                  <div class="content">
                      <h3 class="title">
                          ${blog.title}
                      </h3>
                      <div class="bottom-content">
                          <div class="thumb-author">
                              <img src="assets/images/testimonial_thumb_large_1.jpg" alt="">
                              ${blog.author}
                          </div>
                          <div class="date">${blog.date}</div>
                      </div>
                  </div>
                </div>

                <div class="entry-text-gap">
                  ${blog.longDescription}
                </div>

                <div class="author-box">
                  <div class="media">
                    <div class="thumb">
                        <img src="assets/images/testimonial_thumb_large_1.jpg" alt="" class="rounded-circle">
                    </div>
                    <div class="service-inner-content media-body pos-rel">
                        <div class="social-icon-author">
                            <a href="#"><i class="icofont-twitter"></i></a>
                            <a href="#"><i class="icofont-facebook"></i></a>
                            <a href="#"><i class="icofont-instagram"></i></a>
                        </div>
                        <h5 class="fw-7 txt-white mb-3">${blog.author} Hakkında</h5>
                        ${blog.authorDesc}
                    </div>
                  </div>
                </div>
            </div>
        `;
        blogs_div.appendChild(each_blog);

        for (let index = 1; index < 6; index++) {
          const popular_each_blog = document.createElement("li")
          const blog_index = blogs_data.find(blog => blog.id === index);

          popular_each_blog.innerHTML = `
            <li>
                <img src="assets/images/blog/post_thumb_1.jpg" alt="">
                <div>
                    <a href="blog-single.html?id=${blog_index.id}" class="title">${blog_index.title}</a>
                    <small>${blog_index.date}</small>
                </div>
            </li>
          `
          popular_blogs.appendChild(popular_each_blog)
        }
        
        // İsteğe bağlı olarak diğer alanları da doldurabilirsiniz.
    } else {
        console.log('Blog bulunamadı!');
    }
}

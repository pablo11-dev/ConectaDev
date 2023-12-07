import axios from 'axios';

document.querySelectorAll('.like-button').forEach(button => {
    button.addEventListener('click', function() {
        const icon = this.querySelector('i');
        icon.style.color = icon.style.color === 'red' ? '' : 'red';
    });
});

// Fazendo a requisição GET
axios.get('https://apiconectadev.1gabsfps1.repl.co/posts')
    .then(function (response) {
      const posts = response.data;
      const feedsElement = document.querySelector('.feeds');

        posts.forEach(post => { 
        const postElement = document.createElement('div');
        postElement.className = 'feed';
        postElement.innerHTML = `
          <div class="head">
            <div class="user">
              <div class="profile-photo">
                <img src="./images/profile-12.jpg" alt="">
              </div>
              <div class="info">
                <h3>${post.Usuario}</h3>
              </div>
            </div>
            <span class="edit">
              <i class="uil uil-ellipsis-h"></i>
            </span>
          </div>
        `;
        // Adicione o postElement ao feedsElement aqui
      });
    });
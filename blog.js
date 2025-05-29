
fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
  .then(response => response.json())
  .then(data => {
    const blogDiv = document.getElementById('blog-posts');
    blogDiv.innerHTML = data.map(post => `<h3>${post.title}</h3><p>${post.body}</p>`).join('');
  });

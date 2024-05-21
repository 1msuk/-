/* script.js */
document.getElementById('save-post').addEventListener('click', function() {
    const content = document.getElementById('post-content').value;
    if (content.trim() === '') {
        alert('내용을 입력하세요.');
        return;
    }

    const postContainer = document.getElementById('posts-container');
    const postDiv = document.createElement('div');
    postDiv.className = 'post';
    postDiv.textContent = content;
    postContainer.appendChild(postDiv);

    // 입력 필드 초기화
    document.getElementById('post-content').value = '';
});

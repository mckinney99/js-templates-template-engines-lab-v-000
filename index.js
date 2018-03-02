function createPost() {

  var pageTemplate = _.template(document.getElementById("page-template").innerHTML)
  var postTemplate = _.template(document.getElementById("post-template").innerHTML)
  var commentsTemplate = _.template(document.getElementById("comments-template").innerHTML)

  var postTitle = document.getElementById("postTitle").value
  var postContent = document.getElementById("postContent").value
  var postAuthor = document.getElementById("postAuthor").value


  document.getElementsByTagName("main")[0].innerHTML += pageTemplate()

  let pagePostDiv = document.getElementById('post')
    pagePostDiv.innerHTML = postTemplate({'title': postTitle, 'author': postAuthor, 'content': postContent})
    pagePostDiv.getElementsByTagName('footer')[0].innerHTML = commentsTemplate()
  }

  postElement.innerHTML = blogSection
  postElement.getElementsByTagName("footer")[0].innerHTML = commentsSection
}

function postComment() {
  var commentTemplate = _.template(document.getElementById("comment-template").innerHTML)

  var commentText = document.getElementById("commentText").value
  var commenterName = document.getElementById("commentName").value

  var commentsSection = document.getElementById("comments")
  commentsSection.innerHTML += commentTemplate({ 'commenter': commentName, 'comment': commentText })
}

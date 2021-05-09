---
mainTag: All Posts
permalink: "/tagPages/"
---
{% for post in collections.posts %}
<a class="link" href="{{ post.url }}"><span>{{ post.data.pageTitle }}</span></a>
<div class="postDescription">{{post.data.postDescription}}</div>
{% endfor %}
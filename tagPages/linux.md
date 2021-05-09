---
mainTag: Linux
permalink: "/tagPages/linux.html"
---
{% for post in collections.posts %}
{% if post.data.tags contains "linux"  %}
<a class="link" href="{{ post.url }}"><span>{{ post.data.pageTitle }}</span></a>
<div class="postDescription">{{post.data.postDescription}}</div>
{% endif %}
{% endfor %}
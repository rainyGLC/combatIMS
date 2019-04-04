{% extends './layout.tpl' %}

{% block css %}
<link rel="stylesheet" href="/stylesheets/style.css">
{% endblock %}

{% block content %}
<div class="article-container">
  <div class="article-comment">
    <div class="article-title">{{articles.title}}</div>
    <div class="article-comment">{{articles.comment}}</div>
  </div>
</div>
{% endblock %}
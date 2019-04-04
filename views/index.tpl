{% extends './layout.tpl' %}

{% block css %}
<link rel="stylesheet" href="/stylesheets/style.css">
{% endblock %}

{% block content %}
<div class="article-container">
  <ul class="article-list">
    {% for val in articles %}
    <li class="article-item">
      <span class="member">{{loop.index}}</span>
      <span class="article-classsify">
        <a class="classify-title" href="/article/{{val.id}}" target="_blank">{{val.title}}</a> 
      </span>
    </li>
    {% endfor %}
  </ul>
</div>
{% endblock %}
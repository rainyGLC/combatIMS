<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>{{title}}</title>
  {% block css %}
  {% endblock %}
</head>
<body>
  <div class="warpper">
  <div class="page-container">
    <header class="header-container">
      <nav class="nav-list">
        <a class="nav-item" href="/article">全部</a>
        {% for val in classifys %}
        <a class="nav-item" href="/article/?classify_id={{val.id}}">{{val.name}}</a>
        {% endfor %}
      </nav>
    </header>
    {% block content %}
    {% endblock %}
  </div>
</div>
  {% block js %}
  {% endblock %}
</body>
</html>
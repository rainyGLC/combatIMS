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
        <a class="nav-item" href="#">全部</a>
        <a class="nav-item" href="#">技术热点</a>
        <a class="nav-item" href="#">极客新闻</a>
        <a class="nav-item" href="#">通知公告</a>
        <a class="nav-item" href="#">新课列表</a>
        <a class="nav-item" href="#">技术讨论</a>
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
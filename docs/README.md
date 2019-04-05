# 

在做极客信息发布系统中遇到的问题：
路由配置问题：
使用element-ui组件的问题：
Nunjucks模版渲染中：for 可以遍历数组 (arrays) 和对象 (dictionaries)

    eg:var items =[{title:"foo,id:1},{title:'bar',id:2}];
      <h1>Posts</h1>
      <ul>
      {% for item in items %}
        <li>{{ item.title }}</li>
      {% else %}
        <li>This would display if the 'item' collection were empty</li>
      {% endfor %}
      </ul>
      上面的示例通过使用items数组中的每一项的title属性显示了所有文章的标题。如果items数组是空数组的话则会渲染else语句中的内容

    还可以遍历对象
    eg:
    var food = {
      'ketchup': '5 tbsp',
      'mustard': '1 tbsp',
      'pickle': '0 tbsp'
    };
    {% for ingredient, amount in food %}
      [ Use {{ amount }} of {{ ingredient }}
    {% endfor %}]

    除此之外，Nunjucks 会将数组解开，数组内的值对应到变量 (new in 0.1.8)
    {% for x, y, z in points %}
      Point: {{ x }}, {{ y }}, {{ z }}
    {% endfor %}

      ******在循环中可获得一些特殊的变量
      loop.index:当前循环数(从1开始)
      loop.index0:当前循环数(从0开始)
      loop.revindex:当前循环数，从后往前(1indexed)
      loop.revindex0:当前循环数，从后往前（0 based)
      loop.fires:是否第一个
      loop.last:是否最后一个
      loop.length:总数
      eg:
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







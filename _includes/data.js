[
         
    {% for sermon in site.sermons %}
    {% capture details %}{{ sermon.book }} - {{ sermon.pastor  }}{% endcapture %}
    {
        "title":"{{ sermon.title | escape}}",
        "text":"{{ details | escape }}",
        "url":"{{ sermon.audio }}",
        "pastor":"{{ sermon.pastor }}",
        "service":"{{ sermon.service }}",
        "date":"{{ sermon.date | date: "%Y-%m-%d" }}",
        "book":"{{ sermon.date }}",
        "testament":"{{sermon.testament}}",
        "tags ": "sermons"   
    } {% unless forloop.last %},{% endunless %}           
    {% endfor %}

]
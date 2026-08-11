---
layout: home
---

{% comment %}
  1. Collect all unique 'tab' values from site.posts
{% endcomment %}
{% assign tab_string = "" %}

{% for post in site.posts %}
  {% if post.tab %}
    {% assign tab_string = tab_string | append: post.tab | append: "|||" %}
  {% else %}
    {% assign tab_string = tab_string | append: "uncategorized" | append: "|||" %}
  {% endif %}
{% endfor %}

{% assign raw_tabs = tab_string | split: "|||" %}
{% assign unique_tabs = raw_tabs | uniq | sort %}

<!-- Tab Buttons -->
<div class="tab-buttons">
  {% for t in unique_tabs %}
    {% if t != "" %}
      <button class="tab-btn {% if forloop.first %}active{% endif %}" onclick="openTab(event, 'tab-{{ t | slugify }}')">
        {{ t | capitalize }}
      </button>
    {% endif %}
  {% endfor %}
</div>

<!-- Tab Content -->
<div class="tab-content-wrapper">
  {% for t in unique_tabs %}
    {% if t != "" %}
      <div id="tab-{{ t | slugify }}" class="tab-content {% if forloop.first %}active{% endif %}">
        <ul>
          {% for post in site.posts %}
            {% assign post_tab = post.tab | default: "uncategorized" %}
            {% if post_tab == t %}
              <li>
                <span class="post-date">{{ post.date | date: "%b %d, %Y" }}</span> — 
                <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
              </li>
            {% endif %}
          {% endfor %}
        </ul>
      </div>
    {% endif %}
  {% endfor %}
</div>

<!-- Styles -->
<style>
.tab-buttons { display: flex; gap: 10px; border-bottom: 2px solid #eee; margin-bottom: 20px; }
.tab-btn { background: none; border: none; padding: 8px 16px; cursor: pointer; border-bottom: 2px solid transparent; margin-bottom: -2px; font-size: 1rem; }
.tab-btn.active { border-bottom-color: #0066cc; font-weight: bold; }
.tab-content { display: none; }
.tab-content.active { display: block; }
</style>

<!-- JS Handler -->
<script>
function openTab(evt, tabId) {
  document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(tabId).classList.add('active');
  evt.currentTarget.classList.add('active');
}
</script>
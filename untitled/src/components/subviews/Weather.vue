<template>
  <div>
    <div id="weather-v2-plugin-simple"></div>
  </div>
</template>


<script>
export default {
  name: 'weather',
  created() {
    window.WIDGET = {
      CONFIG: {
        'modules': '01234',
        'background': 5,
        'tmpColor': '4A90E2',
        'tmpSize': 20,
        'cityColor': '4A90E2',
        'citySize': 20,
        'aqiSize': 20,
        'weatherIconSize': 30,
        'alertIconSize': 18,
        'padding': '10px 10px 10px 10px',
        'shadow': '1',
        'language': 'auto',
        'borderRadius': 5,
        'fixed': 'false',
        'vertical': 'middle',
        'horizontal': 'center',
        'key': 'ZBq0HxyLbF'
      }
    };
    (function(d) {
      var c = d.createElement('link');
      c.rel = 'stylesheet';
      c.href = 'https://apip.weatherdt.com/simple/static/css/weather-simple.css?v=2.0';
      var s = d.createElement('script');
      s.src = 'https://apip.weatherdt.com/simple/static/js/weather-simple.js?v=2.0';
      var sn = d.getElementsByTagName('script')[0];
      sn.parentNode.insertBefore(c, sn);
      sn.parentNode.insertBefore(s, sn);
    })(document);
  }
};
</script>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Single Page Apps for GitHub Pages</title>
    <meta name="description" content="Lightweight solution for deploying single page apps with GitHub Pages. Code and concept by Rafael Pedicini.">

    <style>
      html, body, div, span, a, p, ul, li, h1, code, nav {
        margin: 0;
        border: 0;
        padding: 0;
        box-sizing: inherit;
        font: inherit;
        text-decoration: inherit;
        text-align: inherit;
        color: inherit;
        background: transparent;
      }
      
      html, body { height: 100%; }
      html { background-color: rgb(0, 120, 0); }
      #root { background-color: #F0F0F0; min-height: 100%; }

      
      body { overflow-x: hidden; }
    </style>

    <!-- start favicon -->
    <link rel="apple-touch-icon" sizes="57x57" href="http://favicon.rafrex.com/green-grid-144-168-192/apple-touch-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="http://favicon.rafrex.com/green-grid-144-168-192/apple-touch-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="http://favicon.rafrex.com/green-grid-144-168-192/apple-touch-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="http://favicon.rafrex.com/green-grid-144-168-192/apple-touch-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="http://favicon.rafrex.com/green-grid-144-168-192/apple-touch-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="http://favicon.rafrex.com/green-grid-144-168-192/apple-touch-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="http://favicon.rafrex.com/green-grid-144-168-192/apple-touch-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="http://favicon.rafrex.com/green-grid-144-168-192/apple-touch-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="http://favicon.rafrex.com/green-grid-144-168-192/apple-touch-icon-180x180.png">
    <link rel="icon" type="image/png" href="http://favicon.rafrex.com/green-grid-144-168-192/favicon-32x32.png" sizes="32x32">
    <link rel="icon" type="image/png" href="http://favicon.rafrex.com/green-grid-144-168-192/favicon-194x194.png" sizes="194x194">
    <link rel="icon" type="image/png" href="http://favicon.rafrex.com/green-grid-144-168-192/favicon-96x96.png" sizes="96x96">
    <link rel="icon" type="image/png" href="http://favicon.rafrex.com/green-grid-144-168-192/android-chrome-192x192.png" sizes="192x192">
    <link rel="icon" type="image/png" href="http://favicon.rafrex.com/green-grid-144-168-192/favicon-16x16.png" sizes="16x16">
    <link rel="manifest" href="http://favicon.rafrex.com/green-grid-144-168-192/manifest.json">
    <link rel="mask-icon" href="http://favicon.rafrex.com/green-grid-144-168-192/safari-pinned-tab.svg" color="#00a800">
    <link rel="shortcut icon" href="http://favicon.rafrex.com/green-grid-144-168-192/favicon.ico">
    <meta name="msapplication-TileColor" content="#000000">
    <meta name="msapplication-TileImage" content="http://favicon.rafrex.com/green-grid-144-168-192/mstile-144x144.png">
    <meta name="msapplication-config" content="http://favicon.rafrex.com/green-grid-144-168-192/browserconfig.xml">
    <meta name="theme-color" content="#000000">
    <!-- end favicon -->

    <!-- Start Single Page Apps for GitHub Pages -->
    <script type="text/javascript">
     
      (function(l) {
        if (l.search) {
          var q = {};
          l.search.slice(1).split('&').forEach(function(v) {
            var a = v.split('=');
            q[a[0]] = a.slice(1).join('=').replace(/~and~/g, '&');
          });
          if (q.p !== undefined) {
            window.history.replaceState(null, null,
              l.pathname.slice(0, -1) + (q.p || '') +
              (q.q ? ('?' + q.q) : '') +
              l.hash
            );
          }
        }
      }(window.location))
    </script>
    <!-- End Single Page Apps for GitHub Pages -->

  </head>
  <body>
    <div id="root"></div>
    <!-- single page app in bundle.js -->
    <script src="/build/bundle.js"></script>
  </body>
</html>

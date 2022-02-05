document.getElementById("navigation-bar").innerHTML =

`
<div class="navbar-fixed">
      
<nav class="white">
  <div class="container">
  <div class="nav-wrapper white">
    <!-- <div class="container "> -->
      <a class="sidenav-trigger" href="index.html" data-target="mobile-demo"><i class="material-icons black-text">menu</i></a>
      <a class="brand-logo black-text" href="index.html" ><i class="material-icons">polymer</i></a>       
      <ul class="right hide-on-med-and-down">
        <li><a class="black-text" href="about.html">About</a></li>
        <li><a class="black-text" href="projects.html">Projects</a></li>
        <li><a class="dropdown-trigger black-text" href="#" data-target="r_d_dropdown">R&D<i class="material-icons right">arrow_drop_down</i></a></li>
      </ul>
  </div>
  </div>
</nav>

</div>

<ul class="sidenav" id="mobile-demo">
  <li><a href="about.html">About</a></li>
  <li><a href="r_d.html">R&D</a></li>
  <li><a href="projects.html">Projects</a></li>
</ul>

<!-- Dropdown Structure -->
<ul id="r_d_dropdown" class="dropdown-content">
<li><a class="black-text" id="geometry_dropdown" href="r_d/geometry.html">Geometry</a></li>
<li><a class="black-text" href="#!">Optimisation</a></li>
<li><a class="black-text" href="#!">Coding</a></li>
<li><a class="black-text" href="#!">Rhino/Grasshopper</a></li>
</ul>`
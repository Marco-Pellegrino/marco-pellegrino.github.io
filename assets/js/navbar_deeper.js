document.getElementById("navbar").innerHTML = 
`
<div class="navbar-fixed">
    
    <nav class="white">
      <div class="container">
      <div class="nav-wrapper white">
        <!-- <div class="container "> -->
          <a class="sidenav-trigger" href="#" data-target="mobile-demo"><i class="material-icons black-text">menu</i></a>
          <a class="brand-logo black-text" href="../index.html" ><i class="material-icons">polymer</i></a>       
          <ul class="right hide-on-med-and-down">
            <li><a class="black-text" href="../about.html">About</a></li>
            <li><a class="black-text" href="../projects.html">Projects</a></li>
            <li><a class="dropdown-trigger black-text" href="#" data-target="r_d_dropdown">R&D<i class="material-icons right">arrow_drop_down</i></a></li>
          </ul>
      </div>
      </div>
    </nav>
  
  </div>
  
  
    <ul class="sidenav" id="mobile-demo">
      <li><a href="../about.html">About</a></li>
      <li><a href="../projects.html">Projects</a></li>
      <li><a class="dropdown-trigger black-text" href="#" data-target="r_d_dropdown_mobile">R&D</a></li>
    </ul>


  <!-- Dropdown Structure -->
  <ul class="dropdown-content" id="r_d_dropdown">
    <li><a class="black-text" id="geometry_dropdown" href="geometry.html">Geometry</a></li>
    <li><a class="black-text" id="geometry_dropdown" href="optimisation.html">Optimisation</a></li>
    <li><a class="black-text" id="geometry_dropdown" href="coding.html">Coding</a></li>
    <li><a class="black-text" id="geometry_dropdown" href="rhino_grasshopper.html">Rhino/Grasshopper</a></li>
  </ul>


    <!-- Dropdown Structure Mobile-->
    <ul class="dropdown-content" id="r_d_dropdown_mobile">
      <li><a class="black-text" id="geometry_dropdown" href="geometry.html">Geometry</a></li>
      <li><a class="black-text" id="geometry_dropdown" href="optimisation.html">Optimisation</a></li>
      <li><a class="black-text" id="geometry_dropdown" href="coding.html">Coding</a></li>
      <li><a class="black-text" id="geometry_dropdown" href="rhino_grasshopper.html">Rhino/Grasshopper</a></li>
    </ul>
`
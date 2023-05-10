body {
    background: #1c1f23;
    color: white;
    font-family: 'Open Sans', sans-serif;
    margin: 0;
    padding: 0;
  }
  
  .topnav {
    background-color: #1c1f23;
    overflow: hidden;
    text-align: center;
    align-items: center;
  }
  .topnav a {
    float: left;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
    text-align: center;
    align-items: center;
  }
  
  .topnav a:hover {
    background-color: #6466E9;
    color: black;
    font-weight: bolder;
    text-align: center;
    align-items: center;
  }
  
  .topnav a.active {
    font-weight: bolder;
    /* background-color: #6466E9; */
    color: white;
    text-align: center;
    text-align: center;
    align-items: center;
  }
  
  .tab-bar {
    background-color: #1c1f2350;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    padding: 15px;
    max-width: 200px;
    margin: auto;
    width: 100%;
    border-radius: 5px;
    font-size: 30px;
    font-weight: bold;
    padding: 26px 18px 26px 26px;
    border-radius: 10px;
    margin-top: 50px;
    margin-bottom: 25px;
  }
  
  .tab-bar:active {
    font-weight: bolder;
    text-decoration: underline;
  }
  
  
  
  a {
    color: white;
    font-weight: bold;
  }
  
  
  .container {

    margin-left: 120px;
    margin-right: 120px;

    /* max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    border: 5.2px solid #6466e999;
    border-radius: 5.2px;
    box-shadow: 444px #6466e981;
    margin-top: 42px;
    margin-bottom: 42px; */
  }
  
  label[for="post-title"] {
    padding-bottom: 10px;
    width: -150px;
    margin-left: 225px;
    margin-right: 225px;
  }


  input[type="image"] {
    width: 35px;
    height: auto;
  }


  #credits {
    background-color: #1c1f23 !important;
    color: white !important;
    border: 1px solid #6466E9 !important;
 }
 
  
 input[type="submit"] {
  background-color: #1c1f23;
  border: 1px solid #6466E9;
  border-radius: 5px;
  color: white;
  padding: 20px 20px 20px 20px;
  width: 50%;
  align-items: center;
  text-align: center;
  margin-left: 225px;
  margin-right: 225px;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
}
  
  
  
  #post-title {
    font-family: 'Open Sans', sans-serif;
    background-color: #1c1f23;
    border-radius: 5px;
    border-color: #6466E9;
    color: white;
    font-size: 14.5px;
    width: auto;
    height: 79px;
    margin-left: 225px;
    margin-right: 225px;
  }
  
  #post-body {

    display: none;
    visibility: hidden;

    /* font-family: 'Open Sans', sans-serif;
    background-color: #1c1f23;
    border-radius: 5px;
    border-color: #6466E9;
    color: white;
    width: auto;
    height: 200px; */
  }
  
  textarea {
    font-size: 14.5px;
  }
  
  h1 {
    text-align: center;
  }
  
  form {
    display: flex;
    flex-direction: column;
  }
  
  label {
    margin-top: 10px;
  }
  
  input, textarea {
    margin-bottom: 10px;
    width: 1000px;
    padding: 5px;
  }
  
  input[type="checkbox"] {
    appearance: square;
    background-color: #6466E9;
    color: white;
    padding: 15px 15px 15px 15px;
  }
  
  
  button {
    background-color: #1c1f23;
    border: 1px solid #6466E9;
    border-radius: 7px;
    color: white;
    
  }
  
  button:hover {
    background-color: #6466E0;
  }
  
  
  .post-list {
    margin-top: 20px;
    padding: 13px;
    border-radius: 5px;
    margin-left: 140px;
    margin-right: 140px;
    border: 2.5px solid #6466E9;
    border-radius: 10px;
    padding: 30px;
    width: auto;
    height: auto;
    inline-size: auto;
    overflow-wrap: break-word;
    padding-top: 20px;
    min-height: 50px;
    min-width: 50px;
  }
  
  .post {
    margin-bottom: 15px;
  }
  
  .post h2 {
    font-size: 1.2rem;
    margin-bottom: 5px;
  }
  
  .post p {
    color: white;
  }
  
  
  #show-container {
    position: fixed;
    bottom: 0;
    right: 0;
    font-size: 40px;
    font-weight: bold;
    border-radius: 5.5%;
    margin-bottom: 3.5px;
    margin-right: 14px;
    margin-bottom: 14px;
    background-color: #6466E9;
    color: whitesmoke;
    border-color: #6466E9;
  }
  
  .msg-1 {
    text-align: center;
  }
  
  ::selection {
    color: white;
    background: #4c4eb5fd;
  }
  
  .modal-header {
    text-align: center;
    color: #6466E9;
  }
  
  .modal-overlay {
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    backdrop-filter: blur(5px);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: auto;
    margin-bottom: auto;
  }
  
  
  /* Style for modal container */
  .modal-container {
    background-color: #fff;
    padding: 20px; /* Increase the padding to 40px */
    border-radius: 5px;
  }
  
  
  .msg {
    text-align: center;
  }
  a {
    color: #6466E9;
  }
  
  .selector {
    margin-top: 20px;
    padding: 15px 15px 15px 15px;
    background-color: #1d1f2186;
    box-shadow: 7.3px 2.5px 2.5px #6466E9;
  }
  
  select {
    padding: 2px 2px 2px 2px;
    color: white;
    border: 1px solid #6466E9 radius 5%;
  }
  
  .toggle-c label {
    align-items: center;
  }
  
  .toggle-c input[type="checkbox"] {
    margin-left: 5px;
  }
  
  .addons {
    text-align: center;
    margin-bottom: 10px;
    padding: 15px 15px;
  }
  
  .finished {
    text-align: center;
    margin-top: 20px;
  
  }
  
  .finished img {
    height: 110px;
    width: auto;
    margin-top: 20px;
  }

  #no-posts-message {
    text-align: center;
    margin-top: 12px;
    font-weight: bold;
  }

  a[href^="#"] + * {
    color: red;
  }
    


  #tags {
    font-family: 'Open Sans', sans-serif;
    background-color: #1c1f23;
    border-radius: 5px;
    border: 1px solid #6466E9;
    color: white;
    font-size: 14.5px;
    padding: 10px 10px 50px 50px;

  }
  
  .post-content p span.tag {
    color: #6466E9;
  }

  h4 {
    margin-top: -1px;
    color: greenyellow;
  }

  .quick-options {

    margin-top: 10px;
    padding: 7px;
  }
  
  #menuToggle
  {
    display: block;
    position: relative;
    top: 20px;
    left: 50px;
    margin-top: 10px;
    
    z-index: 1;
    
    -webkit-user-select: none;
    user-select: none;
  }
  
  #menuToggle a
  {
    text-decoration: none;
    color: white;
    
    transition: color 0.3s ease;
  }
  
  #menuToggle a:hover
  {
    font-weight: bolder;
  }
  
  
  #menuToggle input
  {
    display: block;
    width: 40px;
    height: 32px;
    position: absolute;
    top: -7px;
    left: -5px;
    
    cursor: pointer;
    
    opacity: 0; /* hide this */
    z-index: 2; /* and place it over the hamburger */
    
    -webkit-touch-callout: none;
  }
  
  /*
   * Just a quick hamburger
   */
  #menuToggle span
  {
    display: block;
    width: 33px;
    height: 4px;
    margin-bottom: 5px;
    position: relative;
    
    background: #cdcdcd;
    border-radius: 3px;
    
    z-index: 1;
    
    transform-origin: 4px 0px;
    
    transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                opacity 0.55s ease;
  }
  
  #menuToggle span:first-child
  {
    transform-origin: 0% 0%;
  }
  
  #menuToggle span:nth-last-child(2)
  {
    transform-origin: 0% 100%;
  }
  
  /* 
   * Transform all the slices of hamburger
   * into a crossmark.
   */
  #menuToggle input:checked ~ span
  {
    opacity: 1;
    transform: rotate(45deg) translate(-2px, -1px);
    background: white;
  }
  
  /*
   * But let's hide the middle one.
   */
  #menuToggle input:checked ~ span:nth-last-child(3)
  {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }
  
  /*
   * Ohyeah and the last one should go the other direction
   */
  #menuToggle input:checked ~ span:nth-last-child(2)
  {
    transform: rotate(-45deg) translate(0, -1px);
  }
  
  /*
   * Make this absolute positioned
   * at the top left of the screen
   */
  #menu
  {
    position: absolute;
    width: 300px;
    margin: -100px 0 0 -50px;
    padding: 50px;
    padding-top: 125px;
    
    background: #3033379d;
    opacity: 1 Imp !important;
    box-shadow: 4px 4px 4px 4px transparent;
    border-radius: 5px;
    list-style-type: none;
    -webkit-font-smoothing: antialiased;
    /* to stop flickering of text in safari */
    
    transform-origin: 0% 0%;
    transform: translate(-100%, 0);
    
    transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
  }
  
  #menu li
  {
    padding: 10px 0;
    font-size: 22px;
  }
  
  /*
   * And let's slide it in from the left
   */
  #menuToggle input:checked ~ ul
  {
    transform: none;
  }


  .form-inline {
    display: flex;
    align-items: center;
  }

  .form-inline input[type="image"] {
    margin-right: 10px;
  }

  .bookmark-button {
    background-color: #1c1f23;
    border: 1px solid #6466E9;
    border-radius: 10px;
    padding: 14px 14px 14px 14px;
    font-size: 15px;
    font-weight: 700;
  }

  .bookmark-button.clicked {
    background-color: #6466E9;
    /* border: 1px solid #6466E9; */
    border-radius: 9%;
    padding: 14px 14px 14px 14px;
    font-size: 15px;
    font-weight: 700;
  }

  .interact {
    display: flex;
    align-items: center;
    padding-right: 115px;
  }

.profile-image-container {
  position: absolute;
  top: 20px;
  right: 50px;
  display: block;
  width: 33px;
  height: 4px;
  margin-bottom: 5px;
  
}

input[type="text"] {
    background-color: #1c1f23;
    border: 2px solid #6466E9;
    border-radius: 10px;
    color: white;
    padding: 13px 13px 13px 13px;
}

input[type="url"] {
    background-color: #1c1f23;
    border: 2px solid #6466E9;
    border-radius: 10px;
    color: white;
    padding: 13px 13px 13px 13px;
}

select {
    background-color: #1c1f23;
    border: 2px solid #6466E9;
    border-radius: 10px;
    color: white;
    padding: 13px 13px 13px 13px;
    
    margin-bottom: 15px;
}

form {
    padding-bottom: 10px;
}

#menuToggle
  {
    display: block;
    position: relative;
    top: 20px;
    left: 50px;
    margin-top: 10px;
    
    z-index: 1;
    
    -webkit-user-select: none;
    user-select: none;
  }
  
  #menuToggle a
  {
    text-decoration: none;
    color: white;
    
    transition: color 0.3s ease;
  }
  
  #menuToggle a:hover
  {
    font-weight: bolder;
  }
  
  
  #menuToggle input
  {
    display: block;
    width: 40px;
    height: 32px;
    position: absolute;
    top: -7px;
    left: -5px;
    
    cursor: pointer;
    
    opacity: 0; /* hide this */
    z-index: 2; /* and place it over the hamburger */
    
    -webkit-touch-callout: none;
  }
  
  /*
   * Just a quick hamburger
   */
  #menuToggle span
  {
    display: block;
    width: 33px;
    height: 4px;
    margin-bottom: 5px;
    position: relative;
    
    background: #cdcdcd;
    border-radius: 3px;
    
    z-index: 1;
    
    transform-origin: 4px 0px;
    
    transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                opacity 0.55s ease;
  }
  
  #menuToggle span:first-child
  {
    transform-origin: 0% 0%;
  }
  
  #menuToggle span:nth-last-child(2)
  {
    transform-origin: 0% 100%;
  }
  
  /* 
   * Transform all the slices of hamburger
   * into a crossmark.
   */
  #menuToggle input:checked ~ span
  {
    opacity: 1;
    transform: rotate(45deg) translate(-2px, -1px);
    background: white;
  }
  
  /*
   * But let's hide the middle one.
   */
  #menuToggle input:checked ~ span:nth-last-child(3)
  {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }
  
  /*
   * Ohyeah and the last one should go the other direction
   */
  #menuToggle input:checked ~ span:nth-last-child(2)
  {
    transform: rotate(-45deg) translate(0, -1px);
  }
  
  /*
   * Make this absolute positioned
   * at the top left of the screen
   */
  #menu
  {
    position: absolute;
    width: 300px;
    margin: -100px 0 0 -50px;
    padding: 50px;
    padding-top: 125px;
    
    background: #3033379d;
    opacity: 1 Imp !important;
    box-shadow: 4px 4px 4px 4px transparent;
    border-radius: 5px;
    list-style-type: none;
    -webkit-font-smoothing: antialiased;
    /* to stop flickering of text in safari */
    
    transform-origin: 0% 0%;
    transform: translate(-100%, 0);
    
    transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
  }
  
  #menu li

  {
    padding: 10px 0;
    font-size: 22px;
  }
  
  /*
   * And let's slide it in from the left
   */
  #menuToggle input:checked ~ ul
  {
    transform: none;
  }


  .created-courses {
    color: #6466E9;
    margin-left: 140px;
  }

  #enroll-button {
    padding: 15px 15px 15px 15px;
    border: 1px solid #6466E9;
    border-radius: 10px;
  }

  @import url(//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css);

  fieldset, label { margin: 0; padding: 0; }
  body{ margin: 20px; }
  h1 { font-size: 1.5em; margin: 10px; }
  
  /****** Style Star Rating Widget *****/
  
  .rating { 
    border: none;
    float: left;
  }
  
  .rating > input { display: none; } 
  .rating > label:before { 
    margin: 5px;
    font-size: 1.25em;
    font-family: FontAwesome;
    display: inline-block;
    content: "\f005";
  }
  
  .rating > .half:before { 
    content: "\f089";
    position: absolute;
  }
  
  .rating > label { 
    color: #ddd; 
   float: right; 
  }
  
  /***** CSS Magic to Highlight Stars on Hover *****/
  
  .rating > input:checked ~ label, /* show gold star when clicked */
  .rating:not(:checked) > label:hover, /* hover current star */
  .rating:not(:checked) > label:hover ~ label { color: #FFD700;  } /* hover previous stars in list */
  
  .rating > input:checked + label:hover, /* hover current star when changing rating */
  .rating > input:checked ~ label:hover,
  .rating > label:hover ~ input:checked ~ label, /* lighten current selection */
  .rating > input:checked ~ label:hover ~ label { color: #FFED85;  } 


var gigsData = localStorage.getItem('total-gigs');
  var gigs = JSON.parse(gigsData);
  var instanceCount = gigs.length;
  document.getElementById('gig-stats').innerText = "Number of instances: " + instanceCount;
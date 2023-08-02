const gigs = JSON.parse(localStorage.getItem('gigs'));

if (gigs && gigs.length > 0) {
  gigs.forEach(gig => {
    const optionElement = document.createElement('option');
    optionElement.text = gig.gigTitle;
    gigSelectElement.add(optionElement);
  });
}

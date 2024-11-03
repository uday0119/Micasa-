function searchProperties() {
  const location = document.getElementById('location').value;
  const priceRange = document.getElementById('price-range').value;
  const propertyType = document.getElementById('property-type').value;
  const bedrooms = document.getElementById('bedrooms').value;

  alert(`Searching properties in ${location} with ${priceRange} price range, ${propertyType} type, and ${bedrooms} bedrooms.`);
}

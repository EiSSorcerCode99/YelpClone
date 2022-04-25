const apiKey = '6LENYqq3hlHhM1Ak4VrgA6rU-vPOJq-H_LjuT-bK1rmkZrX-JXG1Mf6aYGV9Urht1lk6gA5H-5thEOA5AfRbC7nXcDh8w6h_ghKcfYZIuawfXpSAL4slMbdn6m_BYXYx';
const Yelp = {
    search(term, location, sortBy) {
      return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
        headers: {
          Authorization: `Bearer ${apiKey}`
        }
      }).then(response => {
        return response.json();
      }).then(jsonResponse => {
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map(business => ({
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories[0].title,
            rating: business.rating,
            reviewCount: business.review_count
          }));
        }
      });
    }
  };   

export default Yelp; 
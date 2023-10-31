const API_CEY = '39538903-b61d7980a82458644abd1a2e7';
const configurationParam_API = 'image_type = photo & orientation=horizontal';

function getImage(searchPhoto, page) {
  return fetch(
    `https://pixabay.com/api/?q=${searchPhoto}&page=${page}&key=${API_CEY}&=${configurationParam_API}&per_page=12`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(
      new Error(`photo with request ${searchPhoto} not available`)
    );
  });
}

export default getImage;

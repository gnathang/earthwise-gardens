// this is where we write all our fetch calls for our blocks, and for our collection types

// define a constant for the API URL. this is another thingf we’ll add to the .env file.
const API_URL = process.env.STRAPI_API_URL;

// typing for our strapi response.
// will be useful for collection types.
type StrapiResponse<T> = {
  data: T;
};


// define a header var
// contains authorization header
// and add the content type header
const HEADERS = {
	Authorization: "bearer " + process.env.STRAPI_API_TOKEN,
	"Content-Type": "application/json",
}

// define function to get the hero ttext
export async function getHeroText() {
  // make fetch call to our API, ands fetch the hero text
  const res = await fetch(API_URL + "/hero/", {
    // add the headers
    headers: HEADERS,
  });
  // get json from the response
  const json = await res.json();
  // return it
  return json;
}

// fucntion to grab the contact info
export async function getContactInfo() {
  const res = await fetch(API_URL + "/contact/", {
    // don't forget the headers
    headers: HEADERS,
  });
  const json = await res.json();
  return json;
}

// services
// add our type support - means no guessing what properties exist or their types.

type Service = {
  id: number
  Title: string
  Content: string
  Icon: string | null
  createdAt: string
  updatedAt: string
  publishedAt: string
  documentId: string
};


// fetch ALL services from the services collection type
export async function getServices() {
  const res = await fetch(API_URL + '/services', {
    headers: HEADERS,
  });
  // return the JSON using the type support above
  const json: StrapiResponse<Service[]> = await res.json();
  return json.data; // return the array inside data
}


// fetch about page data
export async function getAboutContent() {
  const res = await fetch(API_URL + '/about', {
    headers: HEADERS,
  });
  const json = await res.json();
  return json;
}
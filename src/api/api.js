const baseURL = "https://ipo-cp.ru/api/v1/bootcamps/605c5f71bc557b46b4f42a56/courses";

export async function fetchCourses() {
  let response = await fetch(baseURL);
  response = await response.json();
  return await response.data;
}

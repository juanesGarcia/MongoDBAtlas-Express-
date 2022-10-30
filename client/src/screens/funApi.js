const url="http://localhost:9000/api/company"

export async function getCompany(){
    try {
        const response = await fetch(url);
        const responseJson = await response.json();
        return responseJson;
        } catch (error) {
          console.error(error);
        }
}

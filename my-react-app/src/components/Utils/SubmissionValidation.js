export function capitalFirstLetter(string){
    if (string){
        return string.charAt(0).toUpperCase();
    }
}
export function validationEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(String(email).toLowerCase());
  }
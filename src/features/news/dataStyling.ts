/**
 * this function receives a string to capitalize the first letter of each word
 * @author Eduardo
 * @param word a string to be capitalized from the interface iNoticias
 * @returns a capitalized joined string
 */
const changeCase = (word: string) =>{
    return word.split(" ")
    .map((str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    })
    .join(" ");
    }

/**
 * this function receives a type Date data to compute the elapsed time in minutes
 * @author Eduardo
 * @param date from the interface iNoticias
 * @returns the number of elapsed minutes 
 */
const getCurrentTime = (date: { fecha: { getTime: () => number; }; }) => {
    const now = new Date();
    const elapsedMinutes = Math.floor(
      (now.getTime() - date.fecha.getTime()) / 60000
    );
    return elapsedMinutes;
  }


export { changeCase, getCurrentTime }
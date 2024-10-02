const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
const reversedTeachers = teachers.reverse();

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = teachers.length;
for (let i = 0; i < longNames; i++) {
  let result = teachers[i];
  if (result.length >= 5) {
    Array.from(result);
    console.log(result);
  }
}

// 3. Rimuovi 'Ed' dall'array teachers
teachers.splice(1, 1);
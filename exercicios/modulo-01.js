// Modulo 1 ES6

// Exercicio 1

class Usuario {
  constructor(email, password) {
      this.email = email;
      this.password = password;
  }
  isAdmin() {
      return this.admin === true;
  }

}

const Usuario01 = new Usuario('teste@gmail.com', 'senha233');

console.log(Usuario01);
console.log(Usuario01.isAdmin());


class Admin extends Usuario{
  constructor(email, password){
    super(email, password);
    this.admin = true;
  }
}
const Admin01 = new Admin('teste@gmail.com', 'senha233');
console.log(Admin01);
console.log(Admin01.isAdmin());

// 2 Exercicio

const user = [
  { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
  { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
  { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
 ];


//map 2.1
const age = user.map( item => item.idade);

console.log(age); // [23, 15, 30];

// filter 2.2
const maiorIdade = user.filter( age => age.idade >= 18);

console.log(maiorIdade);

// find 2.3

const company = user.find( company => company.empresa === 'Google');

console.log(company);

// Unindo operações 2.4


const Mult = user.map((user) => ({ ...user, idade: user.idade*2 }));

console.log(Mult)

const filterMult = Mult.filter( user => user.idade >= 50);
console.log(filterMult)

// Exercicio 3 Arrow Functions

// 3.1
const arr = [1, 2, 3, 4, 5];

arr.map(item => item + 10);

// 3.2
// Dica: Utilize uma constante pra function
const usuariof = { nome: 'CSS', idade: 33 };

const mostrarIdade = (conteudo) => conteudo.idade;
 
console.log(mostrarIdade(usuariof));

// 3.4
const promise = function() {
  return new Promise((resolve, reject) => resolve());
}


// Desestruturação

// 4.1
const empresa = {
  nome: 'Rocketseat',
  endereco: {
  cidade: 'Rio do Sul',
  estado: 'SC',
  }
 };

const { nome, endereco: {cidade, estado}} = empresa;

console.log(nome);
console.log(cidade);
console.log(estado)

// 4.2
const pessoa = {nome: 'Diego', idade: 23};

function mostraInfo(usuario) {
  const { nome, idade} = usuario;
  console.log(`${nome} tem ${idade} anos.`);
 }

// desesntruturação com variavel do objeto direto ou o objeto passado diretamente

mostraInfo({ nome: 'Diego', idade: 23 });
mostraInfo(pessoa); 
 


// 5.1


const arrs = [1, 2, 3, 4, 5, 6];

const [x, ...y] = arrs;

console.log(x);
console.log(y);


// 5.1

function somar(...numbers){
  return numbers.reduce((all, next) => all + next);

}

console.log(somar(2,5 ,9 ,10))


// 5.2

const spread = {
  nome: 'Diego',
  idade: 23,
  endereco: {
  cidade: 'Rio do Sul',
  uf: 'SC',
  pais: 'Brasil',
  }
 };

const usuario02 = {...spread, nome: 'Gabriel'};
const usuario03 = {...spread, endereco: {...spread.endereco, cidade: 'Lontras'} }
console.log(usuario02);
console.log(usuario03);


// 6

const username = 'Diego';
const Agee = 23;
console.log(`O usuário ${username} possui ${Agee} anos`);


// 7

const nome7 = 'Diego';
const idade7 = 23;
const city = 'Rio do Sul';
const usuario7 = {
 nome7,
 idade7,
 city,
};

console.log(usuario7);
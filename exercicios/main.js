class List {
  constructor(){
    this.data = [];
  }

  add(data){
    this.data.push(data);
    console.log(this.data);
  }
}

class TodoList extends List {
  constructor(){
    super() //chamando o metodo constructor da classe pai

    this.usuario = 'Christian';
  }

  mostraUsuario(){
    console.log(this.usuario);
  }
}

const MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function() {
  MinhaLista.add('Novo todo');
  console.log(MinhaLista)
};

MinhaLista.mostraUsuario();

// Arrays


const arr = [1,3,4,5,8,9];


// map

const newArr = arr.map(function(item, index) {
  return item + index;
});

console.log(newArr);

//Reduce

const sum = arr.reduce(function(total, next) {
  return total + next;
});

console.log(sum);

// Filter

const filter = arr.filter(item => item % 2 === 0);

console.log(filter);


// Find


const find = arr.find(item => item === 4);


console.log(find);


const teste = () => ({ nome: 'Christian Marçal'});

console.log(teste());



// desestruturaçao


const user = {
  nome: 'Christian',
  idade: 19,
  endereco: {
    cidade: 'Campinas',
    estado: 'SP',
  },
};


const { nome, idade, endereco: { cidade }} = user;


console.log(nome);
console.log(idade);
console.log(cidade);

function mostrarDados({ nome, idade }){
  console.log(nome, idade)
}

mostrarDados(user);


//REST

function soma(a, b, ...params){
  return params;
}
console.log(soma(1,2,3,4));


// SPREAD

const usuario1 = {
  nome: 'Diego',
  idade: 23,
  empresa: 'Rocketseat',
};

const usuario2 = { ...usuario1, nome: 'Christian'};

console.log(usuario2);

// 

const name = 'Beatriz';
const age = 17;

const pessoa = {
  name,
  age,
  company: 'Rocketseat',
}

console.log(pessoa);





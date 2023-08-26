
/*function assurancePrice(age, duration)
{
    if(age >= 18  &&  age < 60 && duration >= 9 ){
        return true;
        
    }else{
        return false;
    }

}

console.log(assurancePrice(59, 10))*/





const arr = [1,2,3,4,5,6,7,8,9,10];


const doubleArr = arr.map(e => e * 2);
    /*for (let i = 0; i > numbers.lenght; i++) {
        numbersx2.push(numbers[i] * 2 )
    }*/
    //console.log(doubleArr);
    

const evenFromArr = arr.filter(e => e % 2 == 0);



const oddFromArr = arr.filter(e => e % 2 != 0);

//console.log(evenFromArr);
//console.log(oddFromArr);

const maxValueFromArray = arr.reduce((max, e) => Math.max(max, e));
const minValueFromArray = arr.reduce((max, e) => Math.min(max, e));

//console.log(maxValueFromArray);
//console.log(minValueFromArray);

const addValueArray = arr.reduce((sum, e) => sum + e );

const isOddValueFromArray = arr.filter(e => e % 2 != 0).length != 0 ;
//console.log(isOddValueFromArray);

//MAP si ce que vous voulez appliquer au tableau conserve sa longueur en sortie 
//FILTER si en sortie le tableau est plus petit ou de même taille
//REDUCE s'il ne reste qu'une valeur en sortie

const userList = [

    {name: "joan", country: 'USA', salary: 35000},
    {name: "janette", country: 'FRANCE', salary: 42000},
    {name: "andrew", country: 'USA', salary: 320000},
    {name: "phil", country: 'FRANCE', salary: 19000},
    {name: "boubacar", country: 'AFRICA', salary: 500},
    {name: "greg", country: 'FRANCE', salary: 35000},
    {name: "andrew", country: 'USA', salary: 32000},
    {name: "phil", country: 'USA', salary: 205000},
    {name: "fatou", country: 'AFRICA', salary: 158},

];


    africaSalaryPlusThousand = userList 
                            .filter(user => user.country == 'AFRICA')
                            .map(user => user.salary += 1000)
                            .reduce((africaSalaryPlusThousand, menSalary) => africaSalaryPlusThousand + menSalary);
                 

